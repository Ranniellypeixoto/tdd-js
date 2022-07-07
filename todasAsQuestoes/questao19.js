/*Questão 19: Ainda falando sobre sua rede social incrível! Agora você está desenvolvendo botão curtir.
 Implemente um algoritmo que simule que os amigos de Isadora, Pedro, Bianca e Fernanda, curtem uma postagem de Isadora.
 Dica: Crie um objeto que contenha uma array de objetos chamados postagens, e uma dessas postagens vai ter outra array
 chamada de curtidas, onde serão armazenados os usuários que curtiram. */

posts = {
    postagens: [
        {
            titulo: "Desenvolvimento de software",
            curtidas: []
        },
        {
            titulo: "Padroes de projeto",
            curtidas: []
        },
        {
            titulo: "Engenharia de Software",
            curtidas: []
        },
    ]
}

meuPost = posts.postagens[2]
meuPost.curtidas.push("Isadora")
meuPost.curtidas.push("Pedro")
meuPost.curtidas.push("Bianca")
meuPost.curtidas.push("Fernanda")

posts.postagens[0].curtidas.push("Bianca")
posts.postagens[0].curtidas.push("Fernanda")

console.table(posts.postagens)