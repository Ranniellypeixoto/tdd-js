/*Questão 4: Fulano da Silva Sauro é correntista do Banco do 
Brasil, ele mora na Rua da Lama, no estado XPTO e na cidade XYZ.
O saldo da conta bancária de Fulano é de 100 reais e ele pagou a
conta de água no valor de R$ 30,00, a conta de energia no valor
de R$ 50,00 e fez um lanche que custou R$ 26,00. Implemente
um algoritmo que represente o cenário de Fulano e exiba uma 
mensagem “Conseguiu pagar a conta na lanchonete” ou “Saldo 
insuficiente, falta R$ ?,00 para pagar a conta”
*/

/*endereco = {
  rua: "Rua da Lama",
  estado: "XPTO", 
  cidade: "XYZ", 
}*/
//saldoEmConta = 500

function pagarConta(nome, agua, energia, lanche, saldoEmConta) {
  const despesas = (agua + energia + lanche)
  const saldo = (saldoEmConta - despesas)

  if (saldo >= 0) {
    return `${nome}, conta paga com sucesso, seu saldo é R$ ${saldo}`
  } else {
    return `${nome}, seu saldo é insuficiente, falta R$ ${saldo} para conseguir efetuar o pagamento`
  }
}

module.exports = pagarConta;