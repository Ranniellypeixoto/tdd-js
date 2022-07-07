const obterMensagem = require('../questoes/questao21')

test("Verificar se a frase obtida na função é uma das frases possiveis", () => {
    let c = "cappuccino motiva"
    resultado = obterMensagem(c)
    
    expect([resultado].length).toBe(1)
})