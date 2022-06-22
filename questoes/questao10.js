/*
Questão 10: Crie uma função que receba como parâmetro uma array de 
números e some os valores desta array e retorne o seu resultado. 
Caso a array seja passada vazia, a função deve retornar 0
*/
const somarListaDeNumeros = (numeros) => {
    let sum = 0;
    for (let i = 0; i < numeros.length; i++) {
      sum += numeros[i];
    }
    return sum
  }

  module.exports = somarListaDeNumeros;