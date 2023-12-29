var c = 1;

//Faz a verificação ANTES de executar o bloco
while (c <= 10) {
  if (c % 2 == 0) {
    console.log(c);
    c++;
  } else {
    console.log("nope");
    c++;
  }
}

//Faz a verificação DEPOIS de executar o bloco
var x = 1;
do {
  if (x % 2 == 1) {
    console.log(x);
    x++;
  } else {
    console.log("nope");
    x++;
  }
} while (x <= 10);
