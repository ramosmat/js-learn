const numero = document.getElementById("nmr");
const root = document.querySelector("div#root");
const list = document.querySelector("select#list");
const res = document.querySelector("div#res");

console.log(nmr.value);

let i = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function add() {
  if (isNumero(nmr.value) && !inLista(nmr.value, i)) {
    root.innerText = "";

    i.push(Number(nmr.value));

    list.innerHTML += `<option> Valor ${nmr.value} adicionado.</option>`;
  } else {
    root.innerText = "Insira um valor válido";
  }

  console.log(nmr.value);
}

function finalizar() {
  let sum = 0;
  let med = 0;

  for (let index = 0; index < i.length; index++) {
    sum += i[index];
  }

  med = sum / i.length;

  if (i.length != 0) {
    root.innerText = "";
    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo, foram inseridos ${i.length} números</p>`;
    res.innerHTML += `<p>O maior valor inserido é o: ${Math.max(...i)}</p>`;

    res.innerHTML += `<p>O menor valor inserido é o: ${Math.min(...i)}</p>`;

    res.innerHTML += `<p>A soma dos números inseridos é: ${sum}</p>`;

    res.innerHTML += `<p>A médias dos valores inseridos é: ${med}</p>`;
  } else {
    root.innerText = "Insira valores antes de finalizar!";
  }
}
