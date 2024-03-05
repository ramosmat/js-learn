"use strict";
//Escopo de função

// Ao declarar uma variável dentro de uma função, ela nao pode ser acessada
// fora da função. Pode-se contornar isso declarando a variável sem usar o 'var',
// 'const' e 'let', mas isso é um erro!! O 'use strict' acima faz com que o JS
// entre no modo estrito, evitando erros como esse

function mostrarCarro() {
  let carro = "Fusca";
  console.log(carro);
}

mostrarCarro();

//Escopo de bloco

// Variáveis criadas com var, vazam o bloco.
// Por isso com a introdução do ES6 a melhor forma de declarmos uma variável é
// utilizando const e let, pois estas respeitam o escopo de bloco

if (true) {
  var carro = "Palio";
  console.log(carro);
}

console.log(`O carro é um ${carro}`); // Carro

//Escopo CONST
// Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor
// da variável, evitando bugs no código.
const mes = "Dezembro";
mes = "Janeiro"; // erro, tentou modificar o valor
//const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: "Dezembro",
  ano: 2018,
};

data.dia = 29; // Funciona, é permitido a alteração de uma propriedade
data = "Janeiro"; // Nesse caso foi a alteração é também do tipo de dado, gerando erro
