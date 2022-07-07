/*Questão 14: Crie 4 métodos onde cada um receba dois parâmetros e realize, respectivamente, as seguintes operações aritméticas
a) - Somar
b) - Subtrair
c) - Multiplicar
d) - Dividir
*/

/*const numeros = [ 10, 2];
let sum = 0;

for (let i = 0; i < numeros.length; i++) {
    sum += numeros[i];
}
console.log(sum);*/


function soma(numero1, numero2) {
    let resultado = numero1 + numero2;
    return resultado;
}
console.log(soma(8, 5))


console.log("===================================")



function subtrair(numero1, numero2) {
    let resultado = numero1 - numero2;
    return resultado;
}
console.log(subtrair(7, 3))


console.log("===================================")


function multiplicar(numero1, numero2) {
    let resultado = numero1 * numero2;
    return resultado;
}
console.log(multiplicar(2, 5))


console.log("===================================")

function dividir(numero1, numero2) {
    let resultado = numero1 / numero2;
    return resultado;
}
console.log(dividir(10, 5))

function imprimirLinhas() {
    console.log("==================")
} 