const somarListaDeNumeros = require('../questoes/questao10')

test('Somar resultados da array', () => {
    meusNumeros = [1, 2, 3, 4]
    resultado = somarListaDeNumeros(meusNumeros)

    expect(resultado).toBe(10);
});
