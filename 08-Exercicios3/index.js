function tabuada() {
  var numero = document.getElementById("nmr");
  var root = document.querySelector("div#root");
  var tabuada = document.querySelector("select#tab");

  if (numero.value.length == 0) {
    root.innerText = "Insira um valor e tente novamente";
  } else {
    root.innerText = "";
    tabuada.innerHTML = "";

    var nmr = Number(numero.value);

    i = [...Array(10)];

    for (index = 0; index <= i.length; index++) {
      tabuada.innerHTML += `<option value="v${index}">${nmr} x ${index} = ${
        nmr * index
      }</option>`;
    }
  }
}
