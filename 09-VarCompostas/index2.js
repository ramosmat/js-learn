let num = [5, 8, 4];

let x = 0;

while (x < num.length) {
  console.log(num[x]);
  x += 1;
}

console.log("-----------------------------------");

for (let i in num) {
  console.log(`A posição ${i} tem o valor ${num[i]}`);
}
