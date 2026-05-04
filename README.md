# Instagram Clone

Um clone do Instagram desenvolvido com **React** e **Firebase**, como projeto de aprendizado.

🔗 **Demo ao vivo:** [instagram-clone-curso-3728f.web.app](https://instagram-clone-curso-3728f.web.app)

---

## Funcionalidades

- Autenticação completa (cadastro, login e logout) com Firebase Auth
- Feed de posts em tempo real com Firestore
- Publicação de posts via URL de imagem
- Sistema de curtidas com contador persistido
- Comentários por post em subcoleção do Firestore
- Stories com atualização em tempo real
- Sidebar lateral expansível no hover com ícones SVG
- Sidebar responsiva para mobile com menu hamburguer
- Tema automático (claro/escuro) conforme preferência do sistema
- Notificações visuais (toast) no lugar de alerts
- Skeleton loading enquanto os posts carregam
- Página 404 para rotas inexistentes
- Logo do Instagram rola para o topo ao clicar

---

## Tecnologias

- [React 19](https://react.dev/)
- [Firebase v12](https://firebase.google.com/) — Auth, Firestore, Hosting
- [React Router DOM](https://reactrouter.com/)
- CSS puro

---

## Como rodar localmente

**1. Clone o repositório:**
```bash
git clone https://github.com/wagnerjunior3121/instagram-clone.git
cd instagram-clone
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Configure o Firebase:**

Copie o arquivo de exemplo e preencha com suas credenciais do [Firebase Console](https://console.firebase.google.com/):
```bash
cp src/firebase.example.js src/firebase.js
```

Edite `src/firebase.js` com os dados do seu projeto Firebase.

**4. Rode a aplicação:**
```bash
npm start
```

---

## Deploy

```bash
npm run build
npx firebase-tools deploy --only hosting
```

---

## Estrutura do projeto

```
src/
├── App.js            # Componente raiz, estado global, roteamento
├── App.css           # Estilos globais
├── Header.js         # Header com login, cadastro e modal de postagem
├── Post.js           # Card de post com curtidas e comentários
├── SideMenu.js       # Sidebar lateral com ícones SVG
├── Toast.js          # Sistema de notificações visuais
├── PostSkeleton.js   # Skeleton loading dos posts
├── NotFound.js       # Página 404
├── firebase.js       # Configuração do Firebase (ignorado pelo git)
└── firebase.example.js  # Exemplo de configuração do Firebase
```

---

## Segurança

As Firestore Security Rules estão configuradas para que apenas o administrador possa criar, editar e deletar posts, comentários e stories. Qualquer usuário pode visualizar o conteúdo.
