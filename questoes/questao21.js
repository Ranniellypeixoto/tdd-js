/*Questão 21: Cappuccino novamente! Implemente um algoritmo que: Quando alguém falar “cappuccino me motiva”,
 ele deve responder com uma das mensagens de maneira aleatória:

“Tenha coragem para se tornar aquilo que sonha.”
“Mudar pode dar medo, mas é uma aventura que pode te levar muito longe.”

“Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar em você.”
“Os sonhos servem para abrir o caminho e mostrar a direção.”*/

const obterMensagem = (c) => {

    const frases = [
      "Tenha coragem para se tornar aquilo que sonha.",
      "Mudar pode dar medo, mas é uma aventura que pode te levar muito longe.",
      "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar em você.",
      "Os sonhos servem para abrir o caminho e mostrar a direção."]

    let i = parseInt(Math.random() * frases.length)
    if (c == "cappuccino motiva") {
      return frases[i]
    }
}

module.exports = obterMensagem;