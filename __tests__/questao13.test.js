const ligarCarro = require('../questoes/questao13')

test("Ligar carro Motor ligado", () => {
    embreagem = true
    resultado = ligarCarro(embreagem)
    expect(resultado).toBe("Motor ligado");
})

test("Ligar carro sem embreagem pressionada", () => {
    embreagem = false
    resultado = ligarCarro(embreagem)
    expect(resultado).toBe("");
})