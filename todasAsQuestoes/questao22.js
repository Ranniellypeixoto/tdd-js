/*Questão 22: Instalação e uso de pacotes: 
a)	Utilize o yarn ou o npm para instalar o pacote jspdf e o pacote 
faker-js e gere um PDF contendo as frases da questão 21,
 e gere dados fake como nome, endereço e telefone utilizando 
 o faker e insira também no PDF;*/

const { faker } = require('d:/Documentos/Programação/questoes atividade js/node_modules/@faker-js/faker/dist/cjs/locale/pt_BR');
const { jsPDF } = require("jspdf");
faker.locale = 'pt_BR';
const doc = new jsPDF();

function consultarCadastroDeCliente() {
  const clientes = [];
  for (let index = 0; index < 8; index++) {
    const nome = faker.name.findName();
    const email = faker.internet.email(nome);
    const telefone = faker.phone.number();
    const rua = faker.address.streetAddress();
    const bairro = faker.address.street();
    const cep = faker.address.zipCode();
    const cidade = faker.address.city();
    const estado = faker.address.state();

    cliente = {
      nome,
      email,
      telefone,
      rua,
      bairro,
      cep,
      cidade,
      estado,
    }

    clientes.push(cliente);

  }
  return cliente

}

resultado = consultarCadastroDeCliente()
console.log(resultado);

const frases = [
  "Tenha coragem para se tornar aquilo que sonha.",
  "Mudar pode dar medo, mas é uma aventura que pode te levar muito longe.",
  "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar em você.",
  "Os sonhos servem para abrir o caminho e mostrar a direção."
]

doc.text("PDF", 10, 10);
for (let index = 0; index < frases.length; index++) {
  const f = frases[index];
  
  doc.text(`${f}`,10,10)
}


doc.save("programador-viking.pdf");