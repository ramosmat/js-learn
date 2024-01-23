// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let minhaIdade = 2024 - 1996;
let idadeMae = 2024 - 1963;

if (minhaIdade > idadeMae) {
  console.log("É maior");
} else if (minhaIdade === idadeMae) {
  console.log("É igual");
} else {
  console.log("É menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;

console.log("expressao: ", expressao); //retorna o primeiro false ou o ultimo true

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log("nome: ", !!nome);
console.log("idade: ", !!idade);
console.log("possuiDoutorado: ", !!possuiDoutorado);
console.log("empregoFuturo: ", !!empregoFuturo);
console.log("dinheiroNaConta: ", !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

{
  brasil > china
    ? console.log("Brasil maior que china")
    : console.log("China maior que Brasil");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso"); //VAI APARECER FALSO
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão"); //VAI APARECER CÃO PORQUE SEMPRE RETORNA O ULTIMO TRUE
} else {
  console.log("Falso");
}
