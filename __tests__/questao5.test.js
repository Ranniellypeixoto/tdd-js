/*
Questão 5: Dimitri e Monique foram à feira, cada um comprou e colocou na sua respectiva sacola as frutas que mais gostava.
Na sacola de Dimitri tinha: 12 bananas que ele comprou por R$ 2,50; 1 abacaxi que custou 2,78; 5 maçãs que custou 6,94.
Já na sacola de Monique tinha 10 bananas que custou R$ 2,00; 6 tomates que foi R$ 5,00, 2 abacaxi R$ 5,00 e 10 morangos que custou R $10,00. 
Implemente um algoritmo que mostre quanto cada um gastou
*/

const Compra = require("../questoes/questao5")

const compra = new Compra();
const mockDimitri = [
    { nome: "banana", qtd: 12, preco: 2.50 },
    { nome: "abacaxi", qtd: 1, preco: 2.78 },
    { nome: "maçã", qtd: 5, preco: 6.94 },
]

const mockMonique = [
    { nome: "banana", qtd: 10, preco: 2.00 },
    { nome: "tomates", qtd: 6, preco: 5.00 },
    { nome: "abacaxi", qtd: 2, preco: 5.00 },
    { nome: "morango", qtd: 10, preco: 10.00 },
]


test('Calcular total sacola Dimitri', () => {
    totalDrimitri = compra.calcularTotal(mockDimitri)
    expect(totalDrimitri).toBe("R$ 12,22")
});

test('Calcular total sacola Monique', () => {
    totalMonique = compra.calcularTotal(mockMonique)
    expect(totalMonique).toBe("R$ 22,00")
});

test('Calcular total compras do casal', () => {
    produtosDoCasal = mockDimitri.concat(mockMonique)
    totalDrimitri = compra.calcularTotalv2(produtosDoCasal)
    expect(totalDrimitri).toBe("R$ 34,22")
});

test('Quantidade total produtos comprados', () => {
    produtosDoCasal = mockDimitri.concat(mockMonique)
    expect(compra.calcularTotalProdutos(produtosDoCasal)).toEqual(46)
});
