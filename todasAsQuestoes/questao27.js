/* Questão 27: Implemente uma classe Pessoa que possua os atributos nome, idade, estado,
crie também os getters e setters desses atributos, por fim, instancie a classe pessoa
criada. */

class Pessoa {
    nome
    idade
    estado
    constructor(nome, idade, estado) {
        this.nome = nome;
        this.idade = idade;
        this.estado = estado
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