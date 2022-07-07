/*
Questão 11: Implemente essa função na qual ao receber o seguinte 
parâmetro {usuario_id: 1, perfil: “ADMINISTRADOR”} 
ou {usuario_id: 2, perfil: “NORMAL”}
a) - Se o perfil é igual ADMINISTRADOR então deve retornar uma array de funcionalidades [“LISTAR”,”CADASTRAR”,”VISUALIZAR”,”ALTERAR”,”EXCLUIR”];
b) - Se o perfil é igual ADMINISTRADOR então deve retornar uma array de funcionalidades [“LISTAR”,”VISUALIZAR”]
*/

const cadastrarCliente = (nome = 0, email = 0, cpf = 0) => {
    mensagem = "Cadastro realizado com sucesso!"

    function validarEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);

    }

    function validarCpf(cpf) {
        var Soma;
        var Resto;
        Soma = 0;

        for (i = 1; i <= 9; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(cpf.substring(9, 10)))
            return false;

        Soma = 0;
        for (i = 1; i <= 10; i++)
            Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(cpf.substring(10, 11)))
            return false;
        return true;
    }

    if (!nome) {
        return "O nome deve ser informado"
    }

    if (!email) {
        return "O email deve ser informado"
    }

    if (!cpf) {
        return "O CPF deve ser informado"
    }

    if (!validarEmail(email)) {
        return "E-mail inválido!"
    }

    if (!validarCpf(cpf)) {
        return "CPF inválido!"
    }

    if (cpf.length != 11 || cpf == "00000000000") {
        return "CPF inválido!"
    }


    return mensagem
}


module.exports = cadastrarCliente;