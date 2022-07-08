/*
Questão 5: Dimitri e Monique foram à feira, cada um comprou e colocou na sua respectiva sacola as frutas que mais gostava.
Na sacola de Dimitri tinha: 12 bananas que ele comprou por R$ 2,50; 1 abacaxi que custou 2,78; 5 maçãs que custou 6,94.
Já na sacola de Monique tinha 10 bananas que custou R$ 2,00; 6 tomates que foi R$ 5,00, 2 abacaxi R$ 5,00 e 10 morangos que custou R $10,00. 
Implemente um algoritmo que mostre quanto cada um gastou
*/
class Compra {
    calcularTotal(produtos) {
        let total = 0
        for (let index = 0; index < produtos.length; index++) {
            const produto = produtos[index];
            total += produto.preco
        }
        return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    calcularTotalv2(produtos) {
        return produtos.map(produto => produto.preco)
            .reduce((a, b) => a + b)
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    calcularTotalProdutos(produtos) {
        return produtos.map(produto => produto.qtd)
            .reduce((a, b) => a + b)
    }
}

module.exports = Compra;

/*
var carrinho = new Array();
carrinho.push(["Banana", 0.21, 12]);
carrinho[1] = ["Abacaxi", 2.78, 1];
carrinho[2] = ["Maca", 1.38, 5];
var totalItemCarrinho = 0;
var totalCompra = 0;
console.table(carrinho)

for (var i = 0; i < carrinho.length; i++) {
    totalItemCarrinho = carrinho[i][1] * carrinho[i][2];
    console.log("Produto: " + carrinho[i][0] + "/ Valor unitário " + carrinho[i][1].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + "/ Quantidade: " + carrinho[i][2] + " / Valor total do item: " + totalItemCarrinho.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + ".");
    totalCompra += totalItemCarrinho;
}
console.log("Total:" + totalCompra.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));




console.log(`Dimitri gastouR$ ${totalCompra}`)

var carrinho = new Array();
carrinho[0] = ["Banana", 0.20, 10];
carrinho[1] = ["Abacaxi", 2.50, 2];
carrinho[2] = ["Tomate", 0.83, 6];
carrinho[3] = ["Morango", 1.00, 10];
var totalItemCarrinho = 0;
var totalCompra = 0;
console.table(carrinho)

for (var i = 0; i < carrinho.length; i++) {
    totalItemCarrinho = carrinho[i][1] * carrinho[i][2];
    console.log("Produto: " + carrinho[i][0] + "/ Valor unitário " + carrinho[i][1].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + "/ Quantidade: " + carrinho[i][2] + " / Valor total do item: " + totalItemCarrinho.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + ".");
    totalCompra += totalItemCarrinho;
}
console.log("Total:" + totalCompra.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));

console.log(`Monique gastouR$ ${totalCompra}`)

//


var carrinho = new Array();
carrinho[0] = ["Banana", 0.21, 12];
carrinho[1] = ["Abacaxi", 2.78, 1];
carrinho[2] = ["Maca", 1.38, 5];
var totalCompra = 0;
console.table(carrinho)

for (var i = 0; i < carrinho.length; i++) {
    totalItemCarrinho = carrinho[i][1] * carrinho[i][2];
    console.log("Produto: " + carrinho[i][0] + "/ Valor unitário " + carrinho[i][1].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + "/ Quantidade: " + carrinho[i][2] + " / Valor total do item: " + totalItemCarrinho.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + ".");
    totalCompra += totalItemCarrinho;
}

console.log("Total:" + totalCompra.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
console.log(`Dimitri gastou R$ ${totalCompra}`)

var carrinho = new Array();
carrinho[0] = ["Banana", 0.20, 10];
carrinho[1] = ["Abacaxi", 2.50, 2];
carrinho[2] = ["Tomate", 0.83, 6];
carrinho[3] = ["Morango", 1.00, 10];
var totalItemCarrinho = 0;
var totalCompra = 0;
console.table(carrinho)

for (var i = 0; i < carrinho.length; i++) {
    totalItemCarrinho = carrinho[i][1] * carrinho[i][2];
    console.log("Produto: " + carrinho[i][0] + "/ Valor unitário " + carrinho[i][1].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + "/ Quantidade: " + carrinho[i][2] + " / Valor total do item: " + totalItemCarrinho.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + ".");
    totalCompra += totalItemCarrinho;
}
console.log("Total:" + totalCompra.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));

console.log(`Monique gastouR$ ${totalCompra}`)
*/
