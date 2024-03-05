//Por qual motivo o código abaixo retorna com erros?

//  O console.log está tentando exibir a variavel var, o que gera um erro pois é
//  uma sintaxe reservada para declaração de variaveis em JS.
//  Além disso, a declaração com const e let não ultrapassa o escopo de bloco
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
}
// console.log(var, marca, portas);

//Como corrigir o erro abaixo?

//  'dois' é uma variavel do tipo const, declarada dentro da função somarDois,
//  como variavel do tipo const não ultrapassa blocos, a opção para correção é
//  declarar a variavel fora do bloco da função somarDois, assim ela pode ser usada
//  nas duas funções
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
somarDois(4);
dividirDois(6);

//O que fazer para total retornar 500?

//  No caso a declaração da variavel numero dentro do loop utilizando var, soprepoe
//  o valor definido anteriormente fora do loop. Para correção devemos declarar a
//  variável dentro do loop com outro nome, ou utilizar const na váriavel fora do
//  loop e let dentro do loop

var numero = 50;

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
