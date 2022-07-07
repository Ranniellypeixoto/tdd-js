const { autenticarUsuario, exibirMensagemAutenticar } = require('../questoes/questao9')

test("Autenticação com sucesso", () => {
    const autenticado = autenticarUsuario("cicrano@gmail.com", "12354")
    expect(autenticado).toBe(true);
})

test("Falha na autenticação", () => {
    const autenticado = autenticarUsuario("cicran@gmail.com", "12354")
    expect(autenticado).toBe(false);
})

test("Mensagem de boas vindas", () => {
    const mensagem = exibirMensagemAutenticar(true)
    expect(mensagem).toBe("Seja bem vindo");
})

test("Mensagem de boas vindas", () => {
    const mensagem = exibirMensagemAutenticar(false)
    expect(mensagem).toBe("Acesso negado");
})