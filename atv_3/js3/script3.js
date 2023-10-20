var limite = prompt("Digite um número");

limite = Number(limite);

var contador = 1;

while (contador <= limite) {
  if (contador % 2 == 0) {
    console.log(contador);
  }
  contador++;
}