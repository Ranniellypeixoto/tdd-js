const { soma, subtrair, multiplicar, dividir } = require('../questoes/questao14')


test("Somar", () => {

    resultado = soma(3, 2)

    expect(resultado).toBe(5)
})

test("Subtrair", () => {

    resultado = subtrair(8, 4)

    expect(resultado).toBe(4)
})

test("Multiplicar", () => {

    resultado = multiplicar(3, 9)

    expect(resultado).toBe(27)
})

test("Dividir", () => {

    resultado = dividir(100, 4)

    expect(resultado).toBe(25)
})

