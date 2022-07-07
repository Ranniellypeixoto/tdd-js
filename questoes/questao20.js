/*Questão 20: Cappuccino é um bot bolado no servidor Laboratório de Dev no Discord… Toda segunda-feira às 08:00 ele envia a mensagem 
"Tenha uma ótima semana pessoal”. Implemente um trecho de código que simula esse comportamento.
 Dica pesquise na internet sobre o uso de datas e dias da semana em javascript.*/

const enviarMensagem = (dia, hora) => {

    if (dia == "Segunda" && hora == 8) {
        return "Tenha uma ótima semana pessoal"
    }

}

module.exports = enviarMensagem;