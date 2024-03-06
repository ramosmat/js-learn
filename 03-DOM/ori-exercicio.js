const divRoot = document.querySelector("#root");

// Retorne o url da página atual utilizando o objeto window
const node = document.createElement("p");
const nodeText = window.location.href;

node.innerHTML = nodeText;
divRoot.appendChild(node);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const ativos = document.querySelectorAll(".ativo");
console.log(ativos[0].innerText);

// Retorne a linguagem do navegador
console.log(window.navigator.language);

// Retorne a largura da janela
console.log(window.innerWidth);
