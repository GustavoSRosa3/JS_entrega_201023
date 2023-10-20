var num1 = prompt("Digite o primeiro número");
var num2 = prompt("Digite o segundo número");

num1 = Number(num1);
num2 = Number(num2);

if (num1 > num2) {
  console.log("O maior número é " + num1);
} else if (num1 < num2) {
  console.log("O maior número é " + num2);
} else {
  console.log("Os números são iguais");
}