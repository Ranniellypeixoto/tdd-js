/*Questão 18: Você está criando uma rede social, prepare-se para ganhar muito dinheiro e se tornar o próximo bilionário! 
A funcionalidade que você está trabalhando é a de mostrar amigos em comum entre dois usuários.
O usuário Isadora possui os amigos [“pedro”,”bianca”,”fernanda”] já o usuário Igor possui os seguintes amigos [“pedro”,”bianca”].
Desenvolva uma função que exibe uma lista de amigos em comum entre Isadora e Igor.*/


function compararAmigos(lista1, lista2) {
    const amigosEmComum = []
    for (let i = 0; i < lista1.length; i++) {
        let nome = lista1[i]
        if (lista2.includes(nome)) {
            amigosEmComum.push(nome);
        }

    }

    return amigosEmComum
}

module.exports = compararAmigos;