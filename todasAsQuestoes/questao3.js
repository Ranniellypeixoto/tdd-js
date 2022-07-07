/*
Questão 3: Implemente um algoritmo que receba a idade de uma pessoa e apresente na tela se ela ainda não tem idade para votar,
 se ela é obrigada a votar e se o voto dela é opcional.
*/
var idade = 19;
var alfabetizado = true

if (alfabetizado) {
  if (idade >= 0 && idade <= 15) {
    console.log("Não tem idade para votar");
  } else if (idade >= 16 && idade <= 17) {
    console.log("Idade para votar, voto facultativo");
  } else if (idade >= 18 && idade <= 70) {
    console.log("Voto obrigatorio");
  } else {
    console.log("Voto facultativo");
  }
} else {
  console.log("Voto facultativo");
}

console.log(idade)