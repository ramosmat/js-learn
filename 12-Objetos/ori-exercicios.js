// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
let dados = {
  nome: "Matheus",
  sobrenome: "Ramos Amaral",
  idade: 27,
};

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = dados.nome + " " + dados.sobrenome;

console.log(dados.nomeCompleto);

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 300;
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

let cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa == "Homem") {
      console.log("Au au");
    } else {
      console.log("");
    }
  },
};

// let pessoa = window.prompt("Homem ou Mulher?");
let pessoa = "q";

pessoa = pessoa.replace(pessoa.charAt(0), pessoa.charAt(0).toUpperCase());

console.log(cachorro.latir(pessoa));

// nomeie 3 propriedades ou métodos de strings
"matheus".charAt();
"matheus".length;
console.log("matheus".concat(" julia"));

// nomeie 5 propriedades ou métodos de elementos do DOM
let click = document.querySelector(".clique");
let div = document.querySelector(".div");
let doc = window.document;

const node = document.createElement("p");
const textNode = document.createTextNode("Alooooou!");

console.log(click.classList);
console.log(click.id);
console.log(click.innerHTML);
console.log(click.innerText);

doc.addEventListener("click", () => {
  node.appendChild(textNode);
  div.appendChild(node);
});

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
