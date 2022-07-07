const obterPermissaoPorPerfil = require('../questoes/questao11')

test("Listar funcionalidades do usuário ADMINISTRADOR", () => {
    usuario = "ADMINISTRADOR"
    resultado = obterPermissaoPorPerfil(usuario)
    expect(resultado).toBe("LISTAR, CADASTRAR, VISUALIZAR, ALTERAR, EXCLUIR");
})

test("Listar funcionalidades do usuário NORMAL", () => {
    usuario = "NORMAL"
    resultado = obterPermissaoPorPerfil(usuario)
    expect(resultado).toBe("LISTAR, VISUALIZAR");
})

test("Listar funcionalidades do usuário OUTROUSUARIO", () => {
    usuario = "OUTROUSUARIO"
    resultado = obterPermissaoPorPerfil(usuario)
    expect(resultado).toBe("Usuário não cadastrado");
})