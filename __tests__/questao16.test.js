const atualizarCarrinho = require('../questoes/questao16');

test("Adicionar produto ao carrinho com sucesso", () => {
    let carrinho = []
    atualizarCarrinho("laranja", carrinho)
    expect(carrinho.length).toBe(1)
})

test("Adicionar produto duplicado", () => {
    let carrinho = []
    atualizarCarrinho("laranja", carrinho)
    atualizarCarrinho("laranja", carrinho)
    expect(carrinho.length).toBe(1)
})

test("Adicionar produtos diferentes", () => {
    let carrinho = []
    atualizarCarrinho("laranja", carrinho)
    atualizarCarrinho("banana", carrinho)

    mock = ["laranja", "banana"].sort()

    expect(mock).toEqual(carrinho.sort());
})