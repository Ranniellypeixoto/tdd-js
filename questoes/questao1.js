/* Questão 1: Um aluno tirou a nota 7.0 no primeiro bimestre, 6.5 
no segundo bimestre, 6.0 no terceiro e 6.7 no quarto bimestre. 
Considerando que a média para ser aprovado é 7. Implemente um 
algoritmo que calcule a média e exiba na tela se o aluno passou
foi aprovado ou se foi reprovado. */

function calcularMedia(nota1, nota2, nota3, nota4){
    const media = (nota1 + nota2 + nota3 + nota4) / 4
    if(media >= 7){
        return "Aprovado"
    }

    return "Reprovado"
}

module.exports = calcularMedia;