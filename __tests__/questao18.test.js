const compararAmigos = require('../questoes/questao18')

test("Comparar Amigos de Izadora e Igos", () => {

    amigosDeIzadora = ["pedro", "bianca", "fernanda", "julio"];
    amigosDeIgor = ["pedro", "bianca", "julio"];

    resultado = compararAmigos(amigosDeIzadora, amigosDeIgor)
    expect(resultado).toEqual(
        expect.arrayContaining(['pedro', 'bianca', 'julio']))
})
