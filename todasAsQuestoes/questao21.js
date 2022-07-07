/*Questão 21: Cappuccino novamente! Implemente um algoritmo que: Quando alguém falar “cappuccino me motiva”,
 ele deve responder com uma das mensagens de maneira aleatória:

“Tenha coragem para se tornar aquilo que sonha.”
“Mudar pode dar medo, mas é uma aventura que pode te levar muito longe.”

“Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar em você.”
“Os sonhos servem para abrir o caminho e mostrar a direção.”*/

const obterMensagem = () => {

    var text = new Array();
    text[0] = "Tenha coragem para se tornar aquilo que sonha.";
    text[1] = "Mudar pode dar medo, mas é uma aventura que pode te levar muito longe.";
    text[2] = "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar em você.";
    text[3] = "Os sonhos servem para abrir o caminho e mostrar a direção.";
    var i = Math.floor(Math.random()*4)

    if (mensagem1 == "cappuccino me motiva") {
        console.log(text[i])
    }
}
mensagem1 = "cappuccino me motiva"
obterMensagem();

//Correção


const obterMensagem2 = (c) => {

    const frases = [
      "Tenha coragem para se tornar aquilo que sonha.",
      "Mudar pode dar medo, mas é uma aventura que pode te levar muito longe.",
      "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar em você.",
      "Os sonhos servem para abrir o caminho e mostrar a direção."
    ]

    let i = parseInt(Math.random() * frases.length)
    if (c == "cappuccino motiva") {
      return frases[i]
    }
}

const frase = obterMensagem2("cappuccino motiva");
console.log(frase)

//Complemento
/*

const obterMensagem3 = (c) => {
    const comandosAceitos = [
      "motiva",
      "hora",
      "dia"
    ]
  
    const comando = c.split(" ")
    if(comando[0] == "cappuccino" && comandosAceitos.includes(comando[1])){
      switch(comando[1]) {
        case "motiva":
          const frases = [
            "Tenha coragem para se tornar aquilo que sonha.",
            "Mudar pode dar medo, mas é uma aventura que pode te levar muito longe.",
            "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar em você.",
            "Os sonhos servem para abrir o caminho e mostrar a direção."
          ]
      
          let i = parseInt(Math.random() * frases.length)
          if (c == "cappuccino motiva") {
            return frases[i]
          }
        break;
        case "hora":
          const hoje = new Date();      
          return hoje
        break;
        default:
      } 
    }
}

const frase2 = obterMensagem3("cappuccino motiva");
console.log(frase2)
*/