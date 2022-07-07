const pararDeAquecer = require('../questoes/questao15')

test("Parar de aquecer quando o botão for pressionado", () => {
    tempo = 47
    cacenlar = 47
    resultado = pararDeAquecer(tempo, cacenlar)

    expect(resultado).toBe("O botão cancelar foi pressionado, parar de aquecer")
})
