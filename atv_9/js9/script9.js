var operacao = prompt("Digite uma operação matemática (+, -, *, /)");

var num1 = prompt("Digite o primeiro número");
var num2 = prompt("Digite o segundo número");

num1 = Number(num1);
num2 = Number(num2);

switch (operacao) {
  case "+":
    var resultado = num1 + num2;
    console.log(resultado);
    break;
    
  case "-":
    var resultado = num1 - num2;
    console.log(resultado);
    break;
    
  case "*":
    var resultado = num1 * num2;
    console.log(resultado);
    break;
    
  case "/":
    var resultado = num1 / num2;
    console.log(resultado);
    break;
    
  default:
    console.log("Operação inválida");
}