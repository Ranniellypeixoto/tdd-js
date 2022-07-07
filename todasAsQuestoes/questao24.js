/*
Questão 24: Dado o seguinte objeto que representa um objeto, implemente uma
função que receba como parametro o produto e retorne apenas a descrição e o preço
*/
const produto = 
  {
    sku: 123,
    descricao: "Nome do Produto XPTO",
    preco: 1.99,

  }

//const [{descricao, preco }] = produto;
//const produtos2 = [{descricao, preco }];

function retornarDescricao() {
  
  const [{ descricao, preco }] = produto;
  const produtos2 = [{ descricao, preco }];
  
  return produtos2
}

resultado = retornarDescricao()
console.log(resultado);