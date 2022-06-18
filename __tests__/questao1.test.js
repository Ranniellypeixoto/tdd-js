const calcularMedia = require('../questoes/questao1')

test('O aluno deve ser aprovado', () => {
    nota1 = 7.0
    nota2 = 7.5
    nota3 = 7.0
    nota4 = 7

    resultado = calcularMedia(nota1, nota2, nota3, nota4)

    expect(resultado).toBe('Aprovado');
});

test('O aluno deve ser reprovado', () => {
    nota1 = 7.0
    nota2 = 6.5
    nota3 = 6.0
    nota4 = 7

    resultado = calcularMedia(nota1, nota2, nota3, nota4)

    expect(resultado).toBe('Reprovado');
});
