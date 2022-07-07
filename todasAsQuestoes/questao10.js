/*Questão 10: Crie uma função que receba como parâmetro uma array de números e some os valores desta array e retorne o seu resultado. 
Caso a array seja passada vazia, a função deve retornar 0
*/
/*
function soma(numeros){
    let sum = 0;
    for (let i = 0; i < numeros.length; i++) {
      sum += numeros[i];
    }
    return sum
  }
  const meusNumeros = [1,2,3,4,5]
  // const meusNumeros = []
  
  const resultadoDaFuncao = soma(meusNumeros)
  
  console.log(resultadoDaFuncao)
*/
//Aula
function soma(numeros) {
  let sum = 0;
  for (let i = 0; i < numeros.length; i++) {
    sum += numeros[i];
  }
  return sum
}
const meusNumeros = [1, 2, 3, 4, 5]
// const meusNumeros = []
const resultadoDaFuncao = soma(meusNumeros)
console.log(resultadoDaFuncao)

// Usando arrow function
const somarListaDeNumeros = (numeros) => {
  let sum = 0;
  for (let i = 0; i < numeros.length; i++) {
    sum += numeros[i];
  }
  return sum
}
console.log(somarListaDeNumeros(meusNumeros))

// Usando reduce
// https://desenvolvimentoparaweb.com/javascript/map-filter-reduce-javascript/
// https://www.codegrepper.com/code-examples/javascript/array+map%28%29+sum+javascript
const resultado = [1, 2, 3, 4, 5].reduce((a, b) => a + b)
console.log(resultado)
