//Arryas é um objeto que contém informações que geralmente estão relacionadas, diferente de Python
// estes dados não precisam ser do mesmo tipo, mas não é aconselhavél.

//Definindo uma array
let videoGames = ["Switch", "PC", "xBox"];

console.log(videoGames);
console.log(videoGames[0]);

//O método pop remove o ultimo item do array
console.log(videoGames.pop());
console.log(videoGames);

let ultimoItem = videoGames.pop();
console.log(ultimoItem);
console.log(videoGames);

//O método push() adiciona um item no final do array
videoGames.push("PlayStation");
console.log(videoGames);
