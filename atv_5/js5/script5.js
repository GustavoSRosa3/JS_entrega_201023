var num = prompt("Digite um número");

num = Number(num);

if (num > 0) {
  console.log("O número é positivo");
} else if (num < 0) {
  console.log("O número é negativo");
} else {
  console.log("O número é zero");
}