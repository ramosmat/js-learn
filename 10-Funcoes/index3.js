//Função recursiva

function fatorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

let y = 6;

console.log(`O fatorial de ${y} é ${fatorial(y)}`);
