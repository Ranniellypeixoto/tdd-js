/*
Questão 9: Como desenvolvedor, você recebeu uma tarefa para desenvolver uma função de autenticação de usuário e
 controle de acesso.
a) - Crie uma função que receba dois parâmetros: um é o email e o outro é a senha, essa função deve retornar 
um Boolean (true ou false). 
b) - Crie outra função que utiliza a função criada anteriormente (A) e exiba a mensagem na tela  “Seja bem vindo” 
caso o usuário esteja autenticado ou a mensagem “Acesso negado”.
*/

function autenticarUsuario(email, senha) {
    const emailCadastrado = "cicrano@gmail.com"
    const senhaCadastrada = "12354"

    if (email == emailCadastrado && senha == senhaCadastrada)
        return true;

    return false
}


function exibirMensagemAutenticar(autenticarUsuario) {

    if (autenticarUsuario == true)
        return "Seja bem vindo"

    return "Acesso negado"
}

module.exports = { autenticarUsuario, exibirMensagemAutenticar };