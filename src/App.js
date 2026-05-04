import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { auth, db } from './firebase.js';
import Header from './Header.js';
import NotFound from './NotFound.js';
import Post from './Post.js';
import PostSkeleton from './PostSkeleton.js';
import SideMenu from './SideMenu.js';
import { ToastProvider, useToast } from './Toast.js';

function AppContent() {
  const showToast = useToast();
  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const [storyImagemUrl, setStoryImagemUrl] = useState('');
  const [modalUploadAberto, setModalUploadAberto] = useState(false);
  const [postsCarregando, setPostsCarregando] = useState(true);
  const [mobileMenuAberto, setMobileMenuAberto] = useState(false);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(function(authUser){
      if(authUser){
        setUser(authUser.displayName);
      } else {
        setUser(null);
      }
    });

    const postsQuery = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
    const storiesQuery = query(collection(db, 'stories'), orderBy('timestamp', 'desc'));

    const unsubscribePosts = onSnapshot(postsQuery, (snapshot) => {
      setPosts(snapshot.docs.map(function(document){
        return {id: document.id, info: document.data()}
      }));
      setPostsCarregando(false);
    });

    const unsubscribeStories = onSnapshot(storiesQuery, (snapshot) => {
      setStories(snapshot.docs.map(function(document){
        return {id: document.id, info: document.data()}
      }))
    });

    return () => {
      unsubscribeAuth();
      unsubscribePosts();
      unsubscribeStories();
    };
  }, [])

  async function publicarStory(e){
    e.preventDefault();
    if (!user) {
      showToast('Você precisa estar logado para publicar story.', 'error');
      return;
    }
    if (!storyImagemUrl.trim()) {
      showToast('Informe a URL da imagem do story.', 'error');
      return;
    }

    try {
      await addDoc(collection(db, 'stories'), {
        username: user,
        imageUrl: storyImagemUrl.trim(),
        timestamp: serverTimestamp()
      });
      setStoryImagemUrl('');
      showToast('Story publicado com sucesso!');
    } catch (error) {
      showToast('Erro ao publicar story: ' + error.message, 'error');
    }
  }

  return (
    <div className="App">
      <SideMenu
        onCriar={() => setModalUploadAberto(true)}
        user={user}
        mobileOpen={mobileMenuAberto}
        onMobileClose={() => setMobileMenuAberto(false)}
      />

      {mobileMenuAberto && (
        <div className='mobileOverlay' onClick={() => setMobileMenuAberto(false)}></div>
      )}

      <div className='appContent'>
        <Header
          setUser={setUser}
          user={user}
          modalUploadAberto={modalUploadAberto}
          setModalUploadAberto={setModalUploadAberto}
          onHamburger={() => setMobileMenuAberto(prev => !prev)}
        />

        <div className='storiesArea'>
          <form className='storyForm' onSubmit={(e) => publicarStory(e)}>
            <input
              type='url'
              placeholder='URL da imagem do story...'
              value={storyImagemUrl}
              onChange={(e) => setStoryImagemUrl(e.target.value)}
            />
            <input type='submit' value='Publicar Story' />
          </form>

          <div className='storiesLista'>
            {stories.map(function(story){
              return (
                <div className='storyItem' key={story.id}>
                  <img src={story.info.imageUrl} alt='Story' />
                  <span>{story.info.username}</span>
                </div>
              )
            })}
          </div>
        </div>

        {postsCarregando
          ? [1, 2, 3].map(i => <PostSkeleton key={i} />)
          : posts.map(function(val){
              return (
                <Post key={val.id} info={val.info} id={val.id} user={user} />
              )
            })
        }
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Routes>
          <Route path='/' element={<AppContent />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
