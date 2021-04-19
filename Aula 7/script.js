var cartaPaulo = {
  nome: "Gimli",
  atributos: {
    ataque: 80,
    defesa: 59,
    magia: 30
  }
};

var cartaRafa = {
  nome: "Legolas",
  atributos: {
    ataque: 70,
    defesa: 65,
    magia: 40
  }
};

var cartaGui = {
  nome: "Gandalf",
  atributos: {
    ataque: 88,
    defesa: 62,
    magia: 90
  }
};

var cartaMaquina;
var cartaJogador;

var cartas = [cartaGui, cartaRafa, cartaPaulo];

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }

  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirOpcoes();
}

function exibirOpcoes() {
  var opcoes = document.getElementById('opcoes');
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radiosAtributo = document.getElementsByName('atributo');
  for (var i = 0; i < radiosAtributo.length; i++) {
    if (radiosAtributo[i].checked) {
      return radiosAtributo[i].value;
    }
  }
}

function jogar() {
 var atributoSeleciondo = obtemAtributoSelecionado()
 if(cartaJogador.atributos[atributoSeleciondo] > cartaMaquina.atributos[atributoSeleciondo]){
alert('Venceu a carta máquinha')
 } else if (cartaJogador.atributos[atributoSeleciondo] < cartaMaquina.atributos[atributoSeleciondo]){
   alert('Perdeu. Carta da máquinha é maior')
 } else {
   alert('Empatou')
 }
  console.log(cartaMaquina)
}
