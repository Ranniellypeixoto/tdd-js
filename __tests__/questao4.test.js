const pagarConta = require('../questoes/questao4')

test("Pagamento de conta saldo positivo", () => {
    saldoEmConta = 500
    agua = 30.00
    energia = 50.00
    lanche = 26.00
    despesas = (agua + energia + lanche)
    saldo = (saldoEmConta - despesas)
    

    resultado = pagarConta(saldo)
    expect(resultado).toBe(`${nome}, conta paga com sucesso, seu saldo é R$${saldo}`);
})

test("Pagamento de conta saldo negativo", () => {
    saldoEmConta = 30
    agua = 30.00
    energia = 50.00
    lanche = 26.00
    const despesas = (agua + energia + lanche)
    const saldo = (saldoEmConta - despesas)
    
    resultado = pagarConta(saldo)
    expect(resultado).toBe(`${nome}, seu saldo é insuficiente, falta R$${saldo} para conseguir efetuar o pagamento`);
})
