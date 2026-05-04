import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from 'react';
import { auth, db } from './firebase.js';
import { useToast } from './Toast.js';

function Header(props){
  const showToast = useToast();
  const [modalCriarContaAberto, setModalCriarContaAberto] = useState(false);
  const [emailCadastro, setEmailCadastro] = useState('');
  const [usernameCadastro, setUsernameCadastro] = useState('');
  const [passwordCadastro, setPasswordCadastro] = useState('');
  const [tituloUpload, setTituloUpload] = useState('');
  const [imageUrlUpload, setImageUrlUpload] = useState('');

  function abrirModalCriarConta(e){
    e.preventDefault();
    setModalCriarContaAberto(true);
  }

  function fecharModalCriarConta(e){
    e.preventDefault();
    setModalCriarContaAberto(false);
  }

  function fecharModalUpload(e){
    e.preventDefault();
    props.setModalUploadAberto(false);
  }

  function limparFormularioUpload(){
    setTituloUpload('');
    setImageUrlUpload('');
  }

  async function criarConta(e){
    e.preventDefault();
    try {
      const authUser = await createUserWithEmailAndPassword(auth, emailCadastro, passwordCadastro);
      await updateProfile(authUser.user, {
        displayName: usernameCadastro
      });
      showToast('Conta criada com sucesso!');
      setModalCriarContaAberto(false);
      setEmailCadastro('');
      setUsernameCadastro('');
      setPasswordCadastro('');
    } catch (error) {
      showToast('Erro ao criar conta: ' + error.message, 'error');
    }
  }

  async function logar(e){
    e.preventDefault();
    let emailLogin = document.getElementById('email-login').value;
    let senhaLogin = document.getElementById('senha-login').value;

    try {
      const credencial = await signInWithEmailAndPassword(auth, emailLogin, senhaLogin);
      props.setUser(credencial.user.displayName);
      showToast('Logado com sucesso!');
      window.location.href = '/';
    } catch (error) {
      showToast('Erro ao logar: ' + error.message, 'error');
    }
  }

  async function uploadPost(e){
    e.preventDefault();
    if (!tituloUpload || !imageUrlUpload) {
      showToast('Preencha o titulo e a URL da imagem!', 'error');
      return;
    }

    try {
      await addDoc(collection(db, 'posts'), {
        titulo: tituloUpload,
        imageUrl: imageUrlUpload,
        username: props.user,
        timestamp: serverTimestamp()
      });
      showToast('Post enviado com sucesso!');
      props.setModalUploadAberto(false);
      limparFormularioUpload();
    } catch (error) {
      showToast('Erro ao salvar post: ' + error.message, 'error');
    }
  }

  function deslogar(e){
    e.preventDefault();
    auth.signOut().then(() => {
      props.setUser(null);
      window.location.href = '/';
    });
  }

  return(
    <>
      <div className="header">
        <div className='center'>
          <button
            type='button'
            className='hamburgerBtn'
            aria-label='Menu'
            onClick={props.onHamburger}
          >
            <span></span><span></span><span></span>
          </button>
        <div className='header_logo'>
          </div>
          {
            (props.user)?
            <div className='header_logadoInfo'>
              <span>Olá, <b>{props.user}</b></span>
              <button type="button" onClick={(e)=>deslogar(e)}>Sair</button>
            </div>
            :
            <div className='header_loginForm'>
              <form onSubmit={(e) => logar(e)}>
                <input id="email-login" type="text" placeholder='Login...' />
                <input id="senha-login" type="password" placeholder='Senha...' />
                <input type="submit" name='acao' value="Logar!" />
              </form>
              <div className='btn_criarConta'>
                <button type="button" onClick={(e) => abrirModalCriarConta(e)}>Criar Conta!</button>
              </div>
            </div>
            }
        </div>
      </div>

      <div className="modalUpload" style={{ display: props.modalUploadAberto ? 'block' : 'none' }}>
        <div className="formUpload">
            <div onClick={(e) => fecharModalUpload(e)} className='close-modal-criar'>
              <button type="button" onClick={(e) => fecharModalUpload(e)}>X</button>
            </div>
            <h2>Novo Post</h2>
            <form onSubmit={(e)=>uploadPost(e)}>
              <input
                id="titulo-upload"
                type="text"
                placeholder="Titulo da foto..."
                value={tituloUpload}
                onChange={(e) => setTituloUpload(e.target.value)}
                required
              />
              <input
                type="url"
                placeholder="URL da imagem..."
                value={imageUrlUpload}
                onChange={(e) => setImageUrlUpload(e.target.value)}
                required
              />
              <input type="submit" value="Postar no Instagram!" />
            </form>
        </div>
      </div>

      <div className='modalCriarConta' style={{ display: modalCriarContaAberto ? 'block' : 'none' }}>
        <div className='formCriarConta'>
          <div onClick={(e) => fecharModalCriarConta(e)} className='close-modal-criar'>
            <button type="button" onClick={(e) => fecharModalCriarConta(e)}>X</button>
          </div>
          <h2>Criar Conta</h2>
          <form onSubmit={(e) => criarConta(e)}>
            <input
              id='email-cadastro'
              type="email"
              placeholder='Seu e-mail...'
              value={emailCadastro}
              onChange={(e) => setEmailCadastro(e.target.value)}
              required
            />
            <input
              id='username-cadastro'
              type="text"
              placeholder='Seu nome de usuário...'
              value={usernameCadastro}
              onChange={(e) => setUsernameCadastro(e.target.value)}
              required
            />
            <input
              id='password-cadastro'
              type="password"
              placeholder='Sua senha...'
              value={passwordCadastro}
              onChange={(e) => setPasswordCadastro(e.target.value)}
              required
            />
            <input type="submit" name='acao' value="Criar Conta!" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Header;