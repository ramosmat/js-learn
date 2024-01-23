// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20; //35
console.log(total);

// Crie duas expressões que retornem NaN
let expressao1 = "matheus" * 2;
let expressao2 = "27s" - 1;

console.log(expressao1, expressao2);

// Somar a string '200' com o número 50 e retornar 250
let x = +"200" + 50;
console.log(x);

// Incremente o número 5 e retorne o seu valor incrementado
let y = 5;
console.log(++y);

// Como dividir o peso por 2?
var numero = "80";
var unidade = "kg";
numero = +numero / 2;

var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

console.log(peso);
