const retornarEnderecoDeEntrega = require('../questoes/questao23')

test("Verificar se o endereço de retorno é o esperado", () => {
    c = "ok"
    mock = [
        {
          cep: '58108-001',
          logradouro: 'Rua de Exemplo 1',
          complemento: '',
          bairro: 'Jardim Sao Paulo',
          localidade: 'João Pessoa',
          uf: 'PB'
        }
      ]
    resultado = retornarEnderecoDeEntrega(c)
    
    expect(resultado).toEqual(mock);
})