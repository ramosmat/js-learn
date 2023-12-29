function contar() {
  var inicio = document.getElementById("inicio");
  var fim = document.querySelector("input#fim");
  var passo = document.querySelector("input#passo");
  var root = document.querySelector("div#root");

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    fim.value.length == 0
  ) {
    root.innerText = "Confira os valores e tente novamente.";
  } else {
    var i = Number(inicio.value);
    var f = Number(fim.value);
    var p = Number(passo.value);
    if (p <= 0) {
      window.alert("Passo inválido. Será considerado passo igual a 1.");
      p = 1;
    }

    if (i < f) {
      root.innerHTML = "<p>Contagem Crescente:</p>";
      for (let c = i; c <= f; c += p) {
        root.innerHTML += `${c} 👽 `;
      }
    } else {
      root.innerHTML = "<p>Contagem Decrescente:</p>";
      for (let c = i; c >= f; c -= p) {
        root.innerHTML += `${c} 👻 `;
      }
    }
  }
}
