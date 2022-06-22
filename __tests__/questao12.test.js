const cadastrarCliente = require('../questoes/questao12')

test("Cadastrar Cliente com dados completos", () => {
    nome = "Rannielly"
    email = "ranniellypalves@gmail.com"
    cpf = "06605757440"
    resultado = cadastrarCliente(nome, email, cpf)
    expect(resultado).toBe("Cadastro realizado com sucesso!");
})

test("Cadastrar cliente sem nome preenchido", () => {
    nome = ""
    email = "ranniellypalves@gmail.com"
    cpf = "06605757440"
    resultado = cadastrarCliente(nome, email, cpf)
    expect(resultado).toBe("O nome deve ser informado");
})

test("Cadastrar cliente sem email preenchido", () => {
    nome = "Rannielly"
    email = ""
    cpf = "06605757440"
    resultado = cadastrarCliente(nome, email, cpf)
    expect(resultado).toBe("O email deve ser informado");
})

test("Cadastrar cliente sem cpf preenchido", () => {
    nome = "Rannielly"
    email = "ranniellypalves@gmail.com"
    cpf = ""
    resultado = cadastrarCliente(nome, email, cpf)
    expect(resultado).toBe("O CPF deve ser informado");
})

test("Cadastrar cliente com email preenchido inccorretamente", () => {
    nome = "Rannielly"
    email = "ranniellypalvesgmail.com"
    cpf = "06605757440"
    resultado = cadastrarCliente(nome, email, cpf)
    expect(resultado).toBe("E-mail inválido!");
})

test("Cadastrar cliente com CPF preenchido inccorretamente", () => {
    nome = "Rannielly"
    email = "ranniellypalves@gmail.com"
    cpf = "0660575744"
    resultado = cadastrarCliente(nome, email, cpf)
    expect(resultado).toBe("CPF inválido!");
})

test("Cadastrar cliente com CPF preenchido incorretamente", () => {
    nome = "Rannielly"
    email = "ranniellypalves@gmail.com"
    cpf = "0660575744"
    resultado = cadastrarCliente(nome, email, cpf)
    expect(resultado).toBe("CPF inválido!");
})

test("Cadastrar cliente com CPF preenchido com zeros", () => {
    nome = "Rannielly"
    email = "ranniellypalves@gmail.com"
    cpf = "00000000000"
    resultado = cadastrarCliente(nome, email, cpf)
    expect(resultado).toBe("CPF inválido!");
})

test("Cadastrar cliente com CPF inválido", () => {
    nome = "Rannielly"
    email = "ranniellypalves@gmail.com"
    cpf = "25412632541"
    resultado = cadastrarCliente(nome, email, cpf)
    expect(resultado).toBe("CPF inválido!");
})