//Questão 7: Chegando ao caixa, Monique e Dimitri verificam se esqueceram de comprar laranjas. Desenvolva o código que imprima na tela se eles esqueceram ou não de comprar laranja.

var carrinhoD = new Array();
carrinhoD[0] = ["Banana", 0.21, 12];
carrinhoD[1] = ["Abacaxi", 2.78, 1];
carrinhoD[2] = ["Maca", 1.38, 5];
var totalItemCarrinhoD = 0;
var totalCompra = 0;
console.table(carrinhoD)


var carrinhoM = new Array();
carrinhoM[0] = ["Banana", 0.20, 10];
carrinhoM[1] = ["Abacaxi", 2.50, 2];
carrinhoM[2] = ["Tomate", 0.83, 6];
carrinhoM[3] = ["Morango", 1.00, 10];
var totalItemCarrinhoM = 0;
var totalCompra = 0;
var totalItens = 0;
console.table(carrinhoM)

const carrinho = carrinhoD.concat(carrinhoM);

console.table(carrinho)


for (var i = 0; i < carrinho.length; i++) {
  totalItemCarrinho = carrinho[i][1] * carrinho[i][2];
  totalItens = totalItens + carrinho[i][2];
  console.log("Produto: " + carrinho[i][0] + "/ Valor unitário " + carrinho[i][1].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + "/ Quantidade: " + carrinho[i][2] + " / Valor total do item: " + totalItemCarrinho.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + ".");
  totalCompra += totalItemCarrinho;
}
console.log("Total:" + totalCompra.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
console.log("Quantidade de frutas:" + totalItens.toLocaleString('pt-BR'));



if (carrinho.includes("laranja")) {
  console.log('Sim, comprou laranja');
} else
  console.log('Não comprou laranja')



//console.log(carrinho.includes("lanja"));