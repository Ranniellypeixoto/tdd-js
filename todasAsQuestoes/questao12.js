/*Questão 12:  Você recebeu uma task de criar um cadastro clientes, Crie uma função que receba como parâmetro o nome, email e cpf do cliente.
a) - Caso o argumento passado como nome não seja informado, a mensagem “O nome do cliente deve ser informado”;
b)- Sua função deve utilizar outra função de validação de email (procure na internet função pronta de validação de email  e utilize-a)
    e caso o parâmetro de email não seja válido, a mensagem “E-mail inválido” deve ser exibida;
c) - Além da validação do e-mail, o parâmetro do CPF deve ser validado (procure na internet uma função pronta para validar CPF e utilize-
    a) também, caso o argumento passado como CPF não seja válido, a mensagem “CPF inválido deve ser exibida”;
*/
/*

function cadastroCliente(nome = 0, email = 0, cpf = 0) {
    if (!nome) {
        console.log("O nome do cliente deve ser informado")
        return
    }

    if (!email) {
        console.log("O email deve ser informado")
        return
    }

    if (!cpf) {
        console.log("O CPF deve ser informado")
        return
    }

    if (!validarEmail(email)) {
        console.log('E-mail inválido!')
        return
    }

    if (!validarCpf(cpf)) {


        if (cpf.length != 11) {
            console.log('CPF inválido!')
            return
        }

        if (cpf == "00000000000") {
            console.log('CPF inválido!')
            return
        }
        return
    }

    mensagem = "Cadastro realizado com sucesso!"
    return mensagem
}

function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);

}

function validarCpf(cpf) {
    if (cpf.length != 11) {
        return false;
    } else {
        return true
    }
}

function validarCpf(cpf) {
    var numeros = cpf.substring(0, 9);
    var digitos = cpf.substring(9);

    var soma = 0;
    for (var i = 10; i > 1; i--) {
        soma += numeros.charAt(10 - i) * i;
    }

    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    if (resultado != digitos.charAt(0)) {
        return false;
    }

    soma = 0;
    numeros = cpf.substring(0, 10);

    for (var k = 11; k > 1; k--) {
        soma += numeros.charAt(11 - k) * k;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    if (resultado != digitos.charAt(1)) {
        return false;
    }

    return true;

}

resultado = cadastroCliente("Rannielly", "ranniellypalves@gmail.com", "06605757440");

console.log(resultado)

*/
//_______________________________________________________________________________________________Tipo 2

function cadastroCliente(nome = 0, email = 0, cpf = 0) {
    if (!nome) {
        return 'O nome deve ser informado'
    }

    if (!email) {
        return 'O email deve ser informado'
    }

    if (!cpf) {
     return 'O CPF deve ser informado'
    }

    if (!validarEmail(email)) {
        return 'E-mail inválido!'
    }

    if (!validarCpf(cpf)) {
       return 'CPF inválido!' 
    }

    if (cpf.length != 11 || cpf == "00000000000") {
        return 'CPF inválido!'
    }

    mensagem = "Cadastro realizado com sucesso!"
    return mensagem
}

function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);

}

//console.log(validarEmail('texto@texto.com')); // true
//console.log(validarEmail('texto@texto')); // false
//console.log(validarEmail('texto.com')); // false
//console.log(validateEmail('texto')); // false

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


resultado = cadastroCliente("Rannielly", "ranniellypalves@gmail.com", "06605757440");

console.log(resultado)
/*
//__________________________________

function cadastroCliente(nome = 0, email = 0, cpf = 0) {

    let erros = []
    if (!nome) {
        erros.push("O nome do cliente deve ser informado")
    }

    if (!email) {
        erros.push("O email deve ser informado")
    }

    if (!validarCpf(cpf)) {
        erros.push("CPF não informado ou inválido")
    }

    if (!validarEmail(email)) {
        erros.push('E-mail inválido!')
    }

    if (erros.length > 0) {
        for (i = 0; i < erros.length; i++) {
            console.log(erros[i])
        }

        // for(i in erros) {
        //   console.log(erros[i])
        // }    
        return
    }

    mensagem = "Cadastro realizado com sucesso!"
    return mensagem
}

function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);

}

function validarCpf(cpf) {

    if (!cpf) {
        return false
    }

    var numeros = cpf.substring(0, 9);
    var digitos = cpf.substring(9);

    var soma = 0;
    for (var i = 10; i > 1; i--) {
        soma += numeros.charAt(10 - i) * i;
    }

    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    if (resultado != digitos.charAt(0)) {
        return false;
    }

    soma = 0;
    numeros = cpf.substring(0, 10);

    for (var k = 11; k > 1; k--) {
        soma += numeros.charAt(11 - k) * k;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    if (resultado != digitos.charAt(1)) {
        return false;
    }

    return true;
}


resultado = cadastroCliente("Rannielly", "ranniellypalves@gmail.com", "06605757440");
//resultado = cadastroCliente();
console.log(resultado)
*/
