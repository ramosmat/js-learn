// window é o objeto global do browser possui diferentes métodos e propriedades

// window e documentSão os objetos principais do DOM, boa parte da manipulação é
// feita através dos seus métodos e propriedades.

//window.alert("Isso é um alerta"); // Funciona
//("Isso é um alerta"); // Funciona

const h1Selecionado = document.querySelector("h1"); // Seleciona o primeiro h1
const liSelecionados = Array.from(document.querySelectorAll(".li"));
const button = document.querySelector("#but");
const divRoot = document.querySelector("#root");

document.body; // Retorna o body

console.log(h1Selecionado.innerText);

console.log(liSelecionados);

liSelecionados.forEach((item) => {
  console.log(item.innerText);
});

function callBackFunction() {
  const node = document.createElement("p");
  const newText = window.prompt("Salve meu nobre, qual seu nome?");

  node.innerHTML = newText;

  divRoot.appendChild(node);
}

button.addEventListener("click", callBackFunction);
