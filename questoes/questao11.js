/*Questão 11: Implemente essa função na qual ao receber o seguinte  parâmetro {usuario_id: 1, perfil: “ADMINISTRADOR”} ou {usuario_id: 2, perfil: “NORMAL”}
a) - Se o perfil é igual ADMINISTRADOR então deve retornar uma array de funcionalidades [“LISTAR”,”CADASTRAR”,”VISUALIZAR”,”ALTERAR”,”EXCLUIR”];
b) - Se o perfil é igual ADMINISTRADOR então deve retornar uma array de funcionalidades [“LISTAR”,”VISUALIZAR”]
*/

const obterPermissaoPorPerfil = (usuario) => {
    if (usuario == "ADMINISTRADOR")
        return "LISTAR, CADASTRAR, VISUALIZAR, ALTERAR, EXCLUIR";

    if (usuario == "NORMAL")
        return "LISTAR, VISUALIZAR";

    return "Usuário não cadastrado"

}
module.exports = obterPermissaoPorPerfil;