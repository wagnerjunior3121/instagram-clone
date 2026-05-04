import { addDoc, collection, doc, increment, onSnapshot, orderBy, query, serverTimestamp, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from './firebase.js';
import { useToast } from './Toast.js';

function Post(props){
  const showToast = useToast();
  const [comentarioAtual, setComentarioAtual] = useState('');
  const [comentarios, setComentarios] = useState([]);
  const [curtido, setCurtido] = useState(false);

  useEffect(() => {
    const comentariosQuery = query(
      collection(db, 'posts', props.id, 'comentarios'),
      orderBy('timestamp', 'desc')
    );

    const unsubscribe = onSnapshot(comentariosQuery, (snapshot) => {
      setComentarios(snapshot.docs.map(function(document){
        return {id: document.id, info: document.data()}
      }))
    });

    return () => unsubscribe();
  }, [props.id])
  
  async function comentar(e, postId){
    e.preventDefault();
    if (!comentarioAtual.trim()) {
      showToast('Digite um comentario antes de enviar.', 'error');
      return;
    }

    try {
      await addDoc(collection(db, 'posts', postId, 'comentarios'), {
        nome: props.user || 'Anonimo',
        comentario: comentarioAtual.trim(),
        timestamp: serverTimestamp()
      });
      showToast('Comentario enviado!');
      setComentarioAtual('');
    } catch (error) {
      showToast('Erro ao enviar comentário: ' + error.message, 'error');
    }
  }

  async function curtirPost(){
    try {
      const postRef = doc(db, 'posts', props.id);
      await updateDoc(postRef, {
        curtidas: increment(curtido ? -1 : 1)
      });
      setCurtido(!curtido);
    } catch (error) {
      showToast('Erro ao curtir post: ' + error.message, 'error');
    }
  }

  return (
      <div className='postSingle'>
         <img src ={props.info.imageUrl} alt={props.info.titulo || 'Imagem do post'} />
          <p><b>{props.info.username}</b>: {props.info.titulo}</p>

          <div className='postActions'>
            <button type='button' className={curtido ? 'likeButton liked' : 'likeButton'} onClick={curtirPost} aria-label='Curtir'>
              <svg className='iconSvg' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
                {curtido
                  ? <path d='M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938Z' />
                  : <path d='M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z' />
                }
              </svg>
            </button>
            <span>{props.info.curtidas || 0} </span>
          </div>


          <div className='coments'>
            {comentarios.map(function(val){
              return (
                <div className='coment-single' key={val.id}>
                  <p><b>{val.info.nome}</b>: {val.info.comentario}</p>
                </div>
              )
            })}
          </div>

            <form onSubmit={(e)=>comentar(e, props.id)}>
              <textarea
                id={`comentario-${props.id}`}
                value={comentarioAtual}
                onChange={(e) => setComentarioAtual(e.target.value)}
              ></textarea>
              <input type="submit" value="Comentar!" />
            </form>
      </div>
  )
}

export default Post;