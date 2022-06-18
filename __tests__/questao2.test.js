const classificarNadador = require('../questoes/questao2')

test("Classificar categoria Infantil A", () => {
    idade = 7
    resultado = classificarNadador(idade)
    expect(resultado).toBe('Infantil A');
})

test("Classificar categoria Infantil B", () => {
    idade = 9
    resultado = classificarNadador(idade)
    expect(resultado).toBe('Infantil B');
})

test("Classificar categoria Juvenil A", () => {
    idade = 13
    resultado = classificarNadador(idade)
    expect(resultado).toBe('Juvenil A');
})

test("Classificar categoria Juvenil B", () => {
    idade = 15
    resultado = classificarNadador(idade)
    expect(resultado).toBe('Juvenil B');
})

test("Classificar categoria Adulto", () => {
    idade = 20
    resultado = classificarNadador(idade)
    expect(resultado).toBe('Adulto');
})