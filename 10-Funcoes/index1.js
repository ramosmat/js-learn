function parimp(num = 0) {
  //definir um numero para o parâmetro faz com que ela tenha esse valor caso não seja passado na chamada
  if (num % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}

let res = parimp(9);

console.log(`O número é ${res}`);
