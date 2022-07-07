/*Questão 8: Dado a seguinte array de cores [“Preto”,”Rosa”,”Azul”,”Verde”,”Vermelho”,”Amarelo”,”Branco”], Desenvolva um código que imprima na tela em ordem alfabética cada uma das cores e que apresente a frase Cor favoritas ao lado da sua cor favorita, exemplo:
Amarelo
Azul
Branco
-> Cor favoritas: Preto
-> Cor favoritas: Verde
Vermelho
*/
var cores =
    ["Preto", "Rosa", "Azul", "Verde", "Vermelho", "Amarelo", "Branco"]
cores.sort()
/*
for (i = 0; i < cores.length; i++) {
    if (cores[i] == "Preto") {
        console.log("-> Cor favorita: " + cores[i])
    }

    if (cores[i] == "Verde") {
        console.log("-> Cor favorita: " + cores[i])
    }
    console.log(cores[i]);
}


console.log("==================")
*/
for (i = 0; i < cores.length; i++) {
    switch (cores[i]) {
        case "Preto":
            console.log("-> Cor favorita: " + cores[i])
            break;
        case "Verde":
            console.log("-> Cor favorita: " + cores[i])
            break;
        default:
            console.log(cores[i])

    }
}








