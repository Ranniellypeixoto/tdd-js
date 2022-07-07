/*Questão 11: Implemente essa função na qual ao receber o seguinte  parâmetro {usuario_id: 1, perfil: “ADMINISTRADOR”} ou {usuario_id: 2, perfil: “NORMAL”}
a) - Se o perfil é igual ADMINISTRADOR então deve retornar uma array de funcionalidades [“LISTAR”,”CADASTRAR”,”VISUALIZAR”,”ALTERAR”,”EXCLUIR”];
b) - Se o perfil é igual ADMINISTRADOR então deve retornar uma array de funcionalidades [“LISTAR”,”VISUALIZAR”]
*/

function obterPermissaoPorPerfil(usuario) {
  if (usuario.perfil == "ADMINISTRADOR") {
    return ["LISTAR", "CADASTRAR", "VISUALIZAR", "ALTERAR", "EXCLUIR"]
  }
  if (usuario.perfil == "NORMAL") {
    return ["LISTAR", "VISUALIZAR"]
  }
}


const usuario1 = { usuario_id: 1, perfil: "ADMINISTRADOR" }
const usuario2 = { usuario_id: 2, perfil: "NORMAL" }

console.log(obterPermissaoPorPerfil(usuario1))
console.log(obterPermissaoPorPerfil(usuario2))

console.log("========================================================")


const usuario_id11 = (ADMINISTRADOR) => {
  return ["LISTAR, CADASTRAR, VISUALIZAR, ALTERAR, EXCLUIR"]
};

const usuario_id22 = (NORMAL) => {
  return ["LISTAR, VISUALIZAR"]
};

console.log(usuario_id11("ADMINISTRADOR"))


function imprimirLinhas() {
  console.log("==================")

} 
console.log("========================================================")
const obterPermissaoPorPerfil2 = (usuario) => {
  if (usuario == "ADMINISTRADOR") {
      return "LISTAR, CADASTRAR, VISUALIZAR, ALTERAR, EXCLUIR";
  }
  if (usuario == "NORMAL") {
      return "LISTAR, VISUALIZAR";
  }
}

console.log(obterPermissaoPorPerfil2("NORMAL"))