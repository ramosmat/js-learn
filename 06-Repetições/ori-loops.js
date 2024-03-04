//forEach é um método que executa uma função para cada item de uma Array ou uma Array Like.
// É uma forma mais simples de utilizarmos um loop com arrays.

//Exemplo de um loop for
let videoGames = ["Switch", "PC", "PS4", "xBox"];

for (let item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === "PS4") {
    break;
  }
}

console.log("");

//Exemplo de um loop forEach
let frutas = ["Banana", "Maça", "Uva", "Morango", "Abacaxi"];

frutas.forEach(function (item, index, array) {
  console.log(item, index, array);
});

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let brasilCampeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
brasilCampeao.forEach((item) => {
  console.log(`O Brasil ganhou a copa de ${item}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for (let index = 0; index < frutas.length; index++) {
  console.log(frutas[index]);
  if (frutas[index] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
let ultimaFruta = frutas.length - 1;

console.log(`A ultima fruta é ${frutas[ultimaFruta]}, na lista: ${frutas}`);
