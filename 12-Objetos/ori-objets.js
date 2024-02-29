//Um objeto é uma variavel que possui outras variaveis dentro dela, que podem ser propriedades ou métodos
// Sendo que o método é uma função!
let pessoa = {
  nome: "Matheus",
  idade: 28,
};

console.log(pessoa.nome); //Acessando a propriedade nome dentro do objeto pessoa

let quadrado = {
  ladosQtd: 4,

  area: function (lado) {
    return `area: ${lado * lado}`;
  },
  perimetro(lado) {
    console.log(this.area(5));
    return `perimetro: ${lado * this.ladosQtd}`;
  },
};

console.log(quadrado.area); //Acessando o método area dentro do objeto quadrado
console.log(quadrado.perimetro(5)); //Acessando o resultado do método perimetro dentro do objeto quadrado

console.log(Math.PI);

console.log(Math.random());

//TUDO é objeto, até mesmo o próprio console:
console.log(console);

console.log(console.table(quadrado));

//Também podemos alterar valores de uma propriedade de um objeto:
let menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

menu.backgroundColor = "#000";
console.log(menu.backgroundColor);

//Também podemos adicionar novas propriedades à um objeto:
menu.color = "blue";
menu.alou = () => {
  console.log("Aloou");
};

console.log(menu);
console.log(menu.alou());

//Objetos HERDAM caracteristicas de outros objetos, como o Object que é nativo do JS, que possui
// propriedades como constructor, hasOwnProperty

console.log(menu.hasOwnProperty("color")); //verifica se a propriedade passada como atributo foi criada dentro do objeto
