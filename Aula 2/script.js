  var primeiroValor = parseInt(prompt("Digite o primeiro valor: "))
  var segundoValor = parseInt(prompt("Digite o segundo valor: "))

  var operacao = prompt("[1] Divisão | [2] Multiplicação | [3] Soma | [4] Subtração | [5] Módulo ->")

if(operacao == 1){
  var resultado = primeiroValor /   segundoValor
  document.write("<h2>"+primeiroValor+" / "+segundoValor+" = "+resultado+"<h2>")
} else if(operacao == 2){
  var resultado = primeiroValor * segundoValor
  document.write("<h2>"+primeiroValor+" X "+segundoValor+" = "+resultado+"<h2>")
} else if(operacao == 3) {
  var resultado = (primeiroValor + segundoValor)
  document.write("<h2>"+primeiroValor+" + "+segundoValor+" = "+resultado+"<h2>")
} else if(operacao == 4){
  var resultado = primeiroValor - segundoValor
  document.write("<h2>"+primeiroValor+" - "+segundoValor+" = "+resultado+"<h2>")
} else if(operacao == 5){
  var resultado = primeiroValor % segundoValor
  document.write("<h2>"+primeiroValor+" % "+segundoValor+" = "+resultado+"<h2>")
}else {
  document.write("<h2>-----ERROR-----<h2>")
}


/*
escrevendo na tela - document.write()
concatenacao (junta palavra com variaveis - "palavra" + variavel)
== comparacao é diferente do = que usamos para fazer atribuicao
if = se
else if = senao se
else = senao
document.write("<h2>"+primeiroValor+" X "+segundoValor+" = "+resultado+"<h2>")
*/