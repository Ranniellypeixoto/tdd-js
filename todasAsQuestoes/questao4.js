//Questão 4: Fulano da Silva Sauro é correntista do Banco do Brasil, ele mora na Rua da Lama, no estado XPTO e na cidade XYZ. O saldo da conta bancária de Fulano é de 100 reais e ele pagou a conta de água no valor de R$ 30,00, a conta de energia no valor de R$ 50,00 e fez um lanche que custou R$ 26,00. Implemente um algoritmo que represente o cenário de Fulano e exiba uma mensagem “Conseguiu pagar a conta na lanchonete” ou “Saldo insuficiente, falta R$ ?,00 para pagar a conta”

nome = "Fulano da Silva Sauro";
/*endereco = {
  rua: "Rua da Lama",
  estado: "XPTO", 
  cidade: "XYZ", 
}*/
saldoemconta = 500
agua = 30.00
energia = 50.00
lanche = 26.00

const despesas = (agua + energia + lanche)
const saldo = (saldoemconta - despesas)

if (saldo >= 0) {
  console.log(`${nome}, conta paga com sucesso, seu saldo é R$${saldo}`)
} else {
  console.log(`${nome}, seu saldo é insuficiente, falta 
  ${saldo}R$ para conseguir efetuar o pagamento`)
}