/*Questão 20: Cappuccino é um bot bolado no servidor Laboratório de Dev no Discord… Toda segunda-feira às 08:00 ele envia a mensagem 
"Tenha uma ótima semana pessoal”. Implemente um trecho de código que simula esse comportamento.
 Dica pesquise na internet sobre o uso de datas e dias da semana em javascript.*/

const enviarMensagem = () => {
    data = new Date();
    horas = data.getHours();
    minutos = data.getMinutes();
    diaSem = data.getDay();
    dias = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado");
    dia = dias[diaSem];

    if (dia == "Domingo" && horas == 17 && minutos == 46) {
        console.log("Tenha uma ótima semana pessoal")
    }

}

enviarMensagem();
