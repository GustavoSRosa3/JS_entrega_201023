var num = prompt("Digite um número");

num = Number(num);

var multiplicador = 1;

while (multiplicador <= 10) {
  var resultado = num * multiplicador;
  
  console.log(num + " x " + multiplicador + " = " + resultado);
  
  multiplicador++;
}