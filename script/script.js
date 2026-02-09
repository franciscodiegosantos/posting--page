
// Seletores
const form = document.querySelector("#form-post");
const titulo = document.querySelector("#titulo");
const conteudo = document.querySelector("#conteudo");

const tituloRenderizar = document.querySelector("#renderizador-titulo");
const conteudoRenderizar = document.querySelector("#renderizador-conteudo");

// Evento de submit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Objeto obrigatório
  const data = {
    title: titulo.value,
    body: conteudo.value,
    userId: 1
  };

  // Fetch POST
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => {
      // Renderização
      tituloRenderizar.innerHTML = data.title;
      conteudoRenderizar.innerHTML = data.body;

      // Limpar formulário (extra, mas elegante)
      form.reset();
    })
    .catch(error => {
      console.error("Erro ao criar post:", error);
    });
});