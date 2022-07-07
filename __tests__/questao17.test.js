const hakerSenha = require('../questoes/questao17')

test("Acessou conta", () => {
    senhasTeste = "chocolateQuente viajar amoviajar 123456 alterarsenha"

    resultado = hakerSenha(senhasTeste)
    expect(resultado).toBe("voce acessou a conta!")
})
