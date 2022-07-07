const enviarMensagem = require('../questoes/questao20')

test("Enviar mensagem semanal", () => {
    dia = "Segunda"
    hora = 8
    
    resultado = enviarMensagem(dia, hora)
    expect(resultado).toBe("Tenha uma ótima semana pessoal")
})
