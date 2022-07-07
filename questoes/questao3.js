/*
Questão 3: Implemente um algoritmo que receba a idade de 
uma pessoa e apresente na tela se ela ainda não tem idade 
para votar, se ela é obrigada a votar e se o voto dela é 
opcional.
*/

/*const verificarIdadeVoto2 = (idadeEleitor) => {
    if (idadeEleitor < 16) {
        return `voto não obrigatório`
    }
    else if (idadeEleitor < 18) {
        return `voto facultativo`
    }
    else if (idadeEleitor <= 70) {
        return `voto obrigatório`
    }
    else {
        return `voto facultativo`
    }
}*/
function verificarIdadeVoto(idade, alfabetizado) {

  if (alfabetizado) {
    if (idade >= 0 && idade <= 15) {
      return "Não tem idade para votar"
    } else if (idade >= 16 && idade <= 17) {
      return "Idade para votar, voto facultativo"
    } else if (idade >= 18 && idade <= 70) {
      return "voto obrigatório"
    } else {
      return "Voto não obrigatório"
    }
  } else {
    return "voto facultativo"
  }
}

module.exports = verificarIdadeVoto;