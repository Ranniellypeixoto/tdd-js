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
    return numero1 + numero2;
}

function subtrair(numero1, numero2) {
    return numero1 - numero2;
};

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
};

function dividir(numero1, numero2) {
    return numero1 / numero2;
};







module.exports = { soma, subtrair, multiplicar, dividir };