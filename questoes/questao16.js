/*
Questão 16: Lembra de Dimitri e Monique da questão 5?  Eles foram ao supermercado e estão utilizando um carrinho 
para colocar os produtos… Crie uma array que representa o carrinho, e implemente uma arrow função que adiciona os 
produtos, contudo essa função deve impedir que produtos duplicados sejam inseridos no carrinho.
*/
/*
ARROW FUNCTION
*/

// let carrinho = ['banana', 'abacaxi', 'maçã', 'tomate' ,'morango']
// let novoItem = 'laranja'

const atualizarCarrinho = ((novoItem, carrinho) => {
    if (!carrinho.includes(novoItem)) {
        carrinho.push(novoItem)
    }
    return carrinho
})

module.exports = atualizarCarrinho;