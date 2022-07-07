/*Questão 15: Judite colocou um recipiente com alimento no micro-ondas, e pressionou a função de 1 minuto, porém, aos 47 segundos após 
o micro-ondas começar a esquentar sua comida, ela decidiu cancelar pois estava com muita fome. Implemente um algoritmo que representa 
esse processo e execute a função pararDeAquecer aos 47 segundos, exibindo na tela a mensagem “O botão cancelar foi pressionado, 
parar de aquecer”.
*/

cacenlar = 47
for (i = 60; i > 0; i--) {
  if (i == cacenlar) {
    pararDeAquecer(i, cacenlar)
  }
  console.log(i)
}

function pararDeAquecer(tempo, cacenlar) {
  if (tempo == cacenlar) {
    console.log("O botão cancelar foi pressionado, parar de aquecer")
  }
}

