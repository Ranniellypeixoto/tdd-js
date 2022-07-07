/*
Questão 23: Dado o seguinte objeto, Implemente uma função que receba esse objeto,
e retorne APENAS o endereço de entrega (entrega = true):
*/
const cadastro = {
    idCliente: 47,
    nome: "Cicrano",
    sobrenome: "da Silva Sauro",
    telefone: "8398888888",
    enderecos: [
        {
            id: 1,
            cep: "58108-001",
            logradouro: "Rua de Exemplo 1",
            complemento: "",
            bairro: "Jardim Sao Paulo",
            localidade: "João Pessoa",
            uf: "PB",
            entrega: true
        },
        {
            id: 2,
            cep: "58108-002",
            logradouro: "Av de Exemplo 2",
            complemento: "Apto 4, Bloco A",
            bairro: "Malvinas",
            localidade: "Campina Grande",
            uf: "PB",
            entrega: false
        }
    ]
};



//console.log(checarEnderecoDeEntrega);


function retornarEnderecoDeEntrega() {
    const checarEnderecoDeEntrega = cadastro.enderecos.filter(enderecos => enderecos.entrega === true
        )
    const [{ cep, logradouro, complemento, bairro, localidade, uf }] = checarEnderecoDeEntrega;
    const EnderecoEntrega = [{ cep, logradouro, complemento, bairro, localidade, uf }];

    return EnderecoEntrega
    //return (`${cep},${logradouro}, ${complemento}, ${bairro},${localidade},${uf}`)
}
resultado = retornarEnderecoDeEntrega()
console.log(resultado);

