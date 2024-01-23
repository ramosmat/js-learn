// Crie uma função para verificar se um valor é Truthy
function isTruthy(valor) {
  {
    !!valor ? console.log("Verdadeiro") : console.log("Falso");
  }
}

isTruthy(2);

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
  return (per = 4 * lado);
}

console.log(perimetro(2));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  if (typeof nome != "string" || typeof sobrenome != "string") {
    return "Por favor insira um nome";
  } else {
    return nome + " " + sobrenome;
  }
}

console.log(nomeCompleto("Matheus", "Ramos"));

// Crie uma função que verifica se um número é par
function parImpar(nmr) {
  if (nmr % 2 == 0) {
    console.log("O número é Par");
  } else {
    console.log("O número é Ímpar");
  }
}

parImpar(3);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function dType(dado) {
  return console.log(typeof dado);
}
dType(true);

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

let doc = window.document;

doc.addEventListener("click", () => {
  return console.log("Clicouu");
});

// window.document.addEventListener("scroll", () => {
//   return console.log("Scrollouuuu");
// });

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return console.log(
    `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
  );
}

function jaVisitei(paisesVisitados) {
  return console.log(
    `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
  );
}
precisoVisitar(20);
jaVisitei(20);
