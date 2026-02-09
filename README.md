# 📘 Projeto – Criação de Post com JavaScript e API

Este projeto é uma **página web dinâmica** que simula a criação de um post, semelhante a redes sociais como **Facebook** ou **LinkedIn**.

O usuário informa um **título** e um **conteúdo**, envia o post através de um formulário e o retorno da API é renderizado na própria página, utilizando **JavaScript puro** e a API pública **JSONPlaceholder**.

---

## 🚀 Tecnologias Utilizadas

- **HTML5** – Estrutura e semântica
- **CSS3** – Estilização e layout
- **JavaScript (Vanilla JS)** – Manipulação do DOM, eventos e requisições HTTP
- **Fetch API** – Comunicação com API externa
- **Google Fonts** – Fonte Google Sans Code
- **API pública:** https://jsonplaceholder.typicode.com/posts

---

## 📂 Estrutura do Projeto

/projeto-post
├── index.html
├── README.md
├── /style
│ └── style.css
└── /script
└── script.js

---

## 🧱 Estrutura da Aplicação

### 📄 HTML
- Utiliza **tags semânticas** para melhor organização e acessibilidade:
  - `<main>`
  - `<section>`
- Contém um formulário com:
  - Input de texto para o **título**
  - Textarea para o **conteúdo**
  - Botão para envio do post
- Área específica para renderização do post retornado pela API:
  - `<h2 id="renderizador-titulo">`
  - `<p id="renderizador-conteudo">`

---

### 🎨 CSS
- Reset básico com `box-sizing: border-box`
- Fonte personalizada via Google Fonts
- Fundo com **gradiente**
- Layout centralizado e responsivo
- Estilização simples, porém funcional:
  - Bordas arredondadas
  - Sombra nos cards
  - Efeito hover no botão

> O foco do projeto é a funcionalidade e a integração com JavaScript, mantendo um visual limpo e agradável.

---

### ⚙️ JavaScript
O JavaScript é responsável por toda a interação da aplicação:

- Seleção de elementos com `querySelector`
- Captura do evento de envio do formulário (`submit`)
- Uso de `event.preventDefault()` para evitar o recarregamento da página
- Criação do objeto obrigatório para envio à API:

```js
const data = {
  title: titulo.value,
  body: conteudo.value,
  userId: 1
}

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})

