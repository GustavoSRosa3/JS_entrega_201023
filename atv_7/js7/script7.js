var nota = prompt("Digite uma nota");

nota = Number(nota);

if (nota >= 0 && nota <= 10) {
 console.log("Nota válida");
} else {
 console.log("Nota inválida");
}