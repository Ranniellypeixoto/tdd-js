const verificarIdadeVoto = require("../questoes/questao3")

test("voto deve ser obrigatório", () => {
    idade = 18
    alfabetizado = true
    resultado = verificarIdadeVoto(idade, alfabetizado)
    expect(resultado).toBe("voto obrigatório")
})

test("voto deve ser facultativo para analfabeto", () => {
    idade = 16
    alfabetizado = false
    resultado = verificarIdadeVoto(idade, alfabetizado)
    expect(resultado).toBe("voto facultativo")
})
test("voto deve ser facultativo", () => {
    idade = 16
    alfabetizado = true
    resultado = verificarIdadeVoto(idade, alfabetizado)
    expect(resultado).toBe("Idade para votar, voto facultativo")
})

test("voto deve ser facultativo maior que 70 anos", () => {
    idade = 71
    resultado = verificarIdadeVoto(idade)
    expect(resultado).toBe("voto facultativo")
})

test("voto deve ser facultativo para criança", () => {
    idade = 1
    alfabetizado = true
    resultado = verificarIdadeVoto(idade, alfabetizado)
    expect(resultado).toBe("Não tem idade para votar")
})

