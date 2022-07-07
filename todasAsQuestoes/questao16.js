/*Questão 16: Lembra de Dimitri e Monique da questão 5?  Eles foram ao supermercado e estão utilizando um carrinho para colocar os produtos…
Crie uma array que representa o carrinho, e implemente uma arrow função que adiciona os produtos, contudo essa função deve impedir que 
produtos duplicados sejam inseridos no carrinho.*/

carrinho = []

const adicionar = (produto) => {
  if (!carrinho.includes(produto)) {
    carrinho.push(produto)
  }

}

adicionar("banana")
adicionar("laranja")
adicionar("abacaxi")
adicionar("laranja")
console.log(carrinho)
