/*
Questão 13: Em alguns modelos de carros com câmbio manual, a partida só pode ser dada quando o motoristas segura a embreagem, Implemente 
uma função que receba um parâmetro que represente se a embreagem foi pressionada, caso sim a mensagem “Motor ligado” deve ser exibida, 
em caso contrário nenhuma mensagem deve ser exibida.

const ligarCarro = (embreagem) => {
    embreagem == true ? console.log("Motor ligado") : console.log("")
}

embreagem = true
ligarCarro(embreagem)

*/
const ligarCarro = (embreagem) => {
    return embreagem == true ? "Motor ligado" : ""
}


module.exports = ligarCarro;