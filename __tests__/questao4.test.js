const pagarConta = require('../questoes/questao4')

test("Pagamento de conta saldo positivo", () => {
    nome = "Fulano"
    saldoEmConta = 500
    agua = 30.00
    energia = 50.00
    lanche = 26.00
    saldo = 394

    resultado = pagarConta(nome, agua, energia, lanche, saldoEmConta)
    expect(resultado).toBe(`${nome}, conta paga com sucesso, seu saldo é R$ ${saldo}`);
})

test("Pagamento de conta saldo negativo", () => {
    nome = "Fulano"
    saldoEmConta = 30
    agua = 30.00
    energia = 50.00
    lanche = 26.00
    saldo = -76
    
    resultado = pagarConta(nome, agua, energia, lanche, saldoEmConta)
    expect(resultado).toBe(`${nome}, seu saldo é insuficiente, falta R$ ${saldo} para conseguir efetuar o pagamento`);
})
