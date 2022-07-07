/*Questão 1: Um aluno tirou a nota 7.0 no primeiro bimestre, 6.5 no segundo bimestre, 6.0 no terceiro e 6.7 no quarto bimestre.
Considerando que a média para ser aprovado é 7, implemente um algoritmo que calcule a média e exiba na tela se o aluno passou 
foi aprovado ou se foi reprovado.
*/
nota1 = 7.0
nota2 = 6.5
nota3 = 6.0
nota4 = 6.7

const media = ((nota1 + nota2 + nota3 + nota4) / 4)
console.log(`media do aluno: ${media}`)

if (media >= 7) {
    console.log('Aluno Aprovado!')
} else {
    console.log('Aluno reprovado!')
}