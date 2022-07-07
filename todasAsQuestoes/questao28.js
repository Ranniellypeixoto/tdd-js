/* Questão 28: Para representar melhor o mundo real, implemente o método correr, dormir,
olharParaDireita, pular no objeto pessoa criado na questão anterior. */


class Pessoa {
    nome
    idade
    estado
    constructor(nome, idade, estado) {
        this.nome = nome;
        this.idade = idade;
        this.estado = estado 
        
    }

    correr(){
        return ("correndo")
    }

    dormir(){
        return ("Zzzzzz")
    }

    olharParaDireita(){
        return ("Olhando para direita")
    }

    Pular(){
        return ("pulando")
    }

    getNome() {
        return this.nome
    }

    setNome(nomeDaPessoa) {
        this.nome = nomeDaPessoa
    }

    getIdade() {
        return this.idade
    }

    setIdade(idadeDaPessoa) {
        this.idade = idadeDaPessoa
    }

    getEstado() {
        return this.estado
    }

    setEstado(estadoDaPessoa) {
        this.estado = estadoDaPessoa
    }


};


 // Forma 1: Utilizando construtor
const pessoa = new Pessoa('Amanda', 22, 'Paraíba')
console.log(pessoa)

// Forma 2: Utilizando setter
const pessoa2 = new Pessoa()
pessoa2.setNome("João")
pessoa2.setIdade(27)
pessoa2.setEstado("São Paulo")
console.log(pessoa2); 

console.log(pessoa2.correr())
console.log(pessoa2.dormir())
console.log(pessoa2.olharParaDireita())
console.log(pessoa2.Pular())