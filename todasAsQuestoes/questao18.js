/*Questão 18: Você está criando uma rede social, prepare-se para ganhar muito dinheiro e se tornar o próximo bilionário! 
A funcionalidade que você está trabalhando é a de mostrar amigos em comum entre dois usuários.
O usuário Isadora possui os amigos [“pedro”,”bianca”,”fernanda”] já o usuário Igor possui os seguintes amigos [“pedro”,”bianca”].
Desenvolva uma função que exibe uma lista de amigos em comum entre Isadora e Igor.*/

var amigosDeIzadora = ["pedro", "bianca", "fernanda", "julio"];
var amigosDeIgor = ["pedro", "bianca", "julio"];

/*Minha resposta
function compararAmigos(lista1, lista2) {
    const amigosEmComum = []
    for (var i = 0; i < lista1.length; i++) {
        for (var k = 0; k < lista2.length; k++) {
            if (lista1[i].includes(lista2[k])) {
                amigosEmComum.push(lista2[k]);
            }
        }
    }
    return amigosEmComum
}
const resultado = compararAmigos(amigosDeIzadora, amigosDeIgor)

console.log(resultado)*/


/*for (var i = 0; i < amigosDeIzadora.length; i++){
    for (var k = 0; k < amigosDeIgor.length; k++){
        if(amigosDeIzadora[i].includes(amigosDeIgor[k])) {
            amigosEmComum.push(amigosDeIgor[k]);
          } 
}
}

console.log(amigosEmComum)*/

//Correção
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
const resultado = compararAmigos(amigosDeIzadora, amigosDeIgor)

console.log(resultado)

test("Comparar Amigos de Izadora e Igos", () => {
    const amigosEmComum = []
    amigosDeIzadora = ["pedro", "bianca", "fernanda", "julio"];
    amigosDeIgor = ["pedro", "bianca", "julio"];

    compararAmigos(amigosDeIzadora, amigosDeIgor)
    mock = [amigosDeIzadora, amigosDeIgor]

    
    expect(mock).toEqual(amigosEmComum.sort())
})