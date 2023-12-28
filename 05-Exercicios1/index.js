function verify() {
  var anoNascimento = document.querySelector("input#ano");
  var data = new Date();
  var anoAtual = data.getFullYear();
  var sex = document.getElementsByName("sexo");
  var div = document.querySelector("div#root");

  anoNascimento = Number(anoNascimento.value);

  var idade = anoAtual - anoNascimento;

  if (anoNascimento == 0 || anoNascimento > anoAtual) {
    div.innerHTML = `<p>Por favor, insira um ano de nascimento válido!</p>`;
  } else {
    if (sex[0].checked) {
      //se homem
      if (1 <= idade && idade <= 18) {
        div.innerHTML = `<p>Detectamos um homem jovem com <strong>${idade}</strong> anos </p>`;
        div.innerHTML += '<img src="img/homem-jovem.jpg" alt="" id="imagem">';
      } else if (19 <= idade && idade <= 55) {
        div.innerHTML = `<p>Detectamos um homem adulto com <strong>${idade}</strong> anos </p>`;
        div.innerHTML += '<img src="img/homem-adulto.jpg" alt="" id="imagem">';
      } else {
        div.innerHTML = `<p>Detectamos um homem idoso com <strong>${idade}</strong> anos </p>`;
        div.innerHTML += '<img src="img/homem-idoso.jpg" alt="" id="imagem">';
      }
    } else {
      //se mulher
      if (1 <= idade && idade <= 18) {
        div.innerHTML = `<p>Detectamos uma mulher jovem com <strong>${idade}</strong> anos </p>`;
        div.innerHTML += '<img src="img/mulher-jovem.jpg" alt="" id="imagem">';
      } else if (19 <= idade && idade <= 55) {
        div.innerHTML = `<p>Detectamos uma mulher adulto com <strong>${idade}</strong> anos </p>`;
        div.innerHTML += '<img src="img/mulher-adulto.jpg" alt="" id="imagem">';
      } else {
        div.innerHTML = `<p>Detectamos uma mulher idoso com <strong>${idade}</strong> anos </p>`;
        div.innerHTML += '<img src="img/mulher-idoso.jpg" alt="" id="imagem">';
      }
    }
  }
}
