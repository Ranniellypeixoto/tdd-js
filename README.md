
# Banco de questões

**Questão 1:** Um aluno tirou a nota 7.0 no primeiro bimestre, 6.5 no segundo bimestre, 6.0 no terceiro e 6.7 no quarto bimestre. Considerando que a média para ser aprovado é 7, implemente um algoritmo que calcule a média e exiba na tela se o aluno passou foi aprovado ou se foi reprovado.

**Questão 2:** Implemente um algoritmo que dada a idade de um nadador classifica-o em uma das seguintes categorias e imprima-a na tela:

    infantil A = 5 - 7 anos  
    infantil B = 8-10 anos  
    juvenil A = 11-13 anos  
    juvenil B = 14-17 anos  
    adulto = maiores de 18 anos  


**Questão 3:** Implemente um algoritmo que receba a idade de uma pessoa e apresente na tela se ela ainda não tem idade para votar, se ela é obrigada a votar e se o voto dela é opcional.

**Questão 4:** Fulano da Silva Sauro é correntista do Banco do Brasil, ele mora na Rua da Lama, no estado XPTO e na cidade XYZ. O saldo da conta bancária de Fulano é de 100 reais e ele pagou a conta de água no valor de R$ 30,00, a conta de energia no valor de R$ 50,00 e fez um lanche que custou R$ 26,00. Implemente um algoritmo que represente o cenário de Fulano e exiba uma mensagem “Conseguiu pagar a conta na lanchonete” ou “Saldo insuficiente, falta R$ ?,00 para pagar a conta”

**Questão 5:** Dimitri e Monique foram à feira, cada um comprou e colocou na sua respectiva sacola as frutas que mais gostava. Na sacola de Dimitri tinha: 12 bananas que ele comprou por R$ 2,50; 1 abacaxi que custou 2,78; 5 maçãs que custou 6,94. Já na sacola de Monique tinha 10 bananas que custou R$ 2,00; 6 tomates que foi R$ 5,00, 2 abacaxi R$ 5,00 e 10 morangos que custou R $10,00. Implemente um algoritmo que mostre quanto cada um gastou

**Questão 6:** Ainda sobre a questão anterior, Dimitri e Monique colocaram as suas sacolas em um único carrinho de compras. Desenvolva um algoritmo que junte as duas sacolas no carrinho, imprima na tela cada um dos produtos contidos no carrinho da seguinte forma


    Produto: ? Preço: R$ ? Quantidade: ?  


E no final apresente o total a ser pago e a quantidade de frutas adicionadas

**Questão 7:** Chegando ao caixa, Monique e Dimitri verificam se esqueceram de comprar laranjas. Desenvolva o código que imprima na tela se eles esqueceram ou não de comprar laranja.

**Questão 8:** Dado a seguinte array de cores [“Preto”,”Rosa”,”Azul”,”Verde”,”Vermelho”,”Amarelo”,”Branco”], Desenvolva um código que imprima na tela em ordem alfabética cada uma das cores e que apresente a frase Cor favoritas ao lado da sua cor favorita, exemplo:

    Amarelo  
    Azul  
    Branco  
    -> Cor favoritas: Preto  
    -> Cor favoritas: Verde  
    Vermelho  



**Questão 9:** Como desenvolvedor, você recebeu uma tarefa para desenvolver uma função de autenticação de usuário e controle de acesso.

    a) - Crie uma função que receba dois parâmetros: um é o email e o outro é a senha, essa função deve retornar um Boolean (true ou false).  
    b) - Crie outra função que utiliza a função criada anteriormente (A) e exiba a mensagem na tela  “Seja bem vindo” caso o usuário esteja autenticado ou a mensagem “Acesso negado”.  


**Questão 10:** Crie uma função que receba como parâmetro uma array de números e some os valores desta array e retorne o seu resultado. Caso a array seja passada vazia, a função deve retornar 0

**Questão 11:** Dado uma função que tem a finalidade que retorna as funcionalidades que o usuário tem permissão de acessar. Implemente essa função na qual ao receber o seguinte  parâmetro {usuario_id: 1, perfil: “ADMINISTRADOR”} ou {usuario_id: 2, perfil: “NORMAL”}

    a) - Se o perfil é igual ADMINISTRADOR então deve retornar uma array de funcionalidades [“LISTAR”,”CADASTRAR”,”VISUALIZAR”,”ALTERAR”,”EXCLUIR”];  
    b) - Se o perfil é igual ADMINISTRADOR então deve retornar uma array de funcionalidades [“LISTAR”,”VISUALIZAR”]  


**Questão 12:**  Você recebeu uma task de criar um cadastro clientes, Crie uma função que receba como parâmetro o nome, email e cpf do cliente.

    a) - Caso o argumento passado como nome não seja informado, a mensagem “O nome do cliente deve ser informado”;  
    b) - Sua função deve utilizar outra função de validação de email (procure na internet função pronta de validação de email  e utilize-a) e caso o parâmetro de email não seja válido, a mensagem “E-mail inválido” deve ser exibida;  
    c) - Além da validação do e-mail, o parâmetro do CPF deve ser validado (procure na internet uma função pronta para validar CPF e utilize-a) também, caso o argumento passado como CPF não seja válido, a mensagem “CPF inválido deve ser exibida”;  


**Questão 13:** Em alguns modelos de carros com câmbio manual, a partida só pode ser dada quando o motoristas segura a embreagem, Implemente uma função que receba um parâmetro que represente se a embreagem foi pressionada, caso sim a mensagem “Motor ligado” deve ser exibida, em caso contrário nenhuma mensagem deve ser exibida.

**Questão 14:** Crie 4 métodos onde cada um receba dois parâmetros e realize, respectivamente, as seguintes operações aritméticas

    a) - Somar  
    b) - Subtrair  
    c) - Multiplicar  
    d) - Dividir  


**Questão 15:** Judite colocou um recipiente com alimento no micro-ondas, e pressionou a função de 1 minuto, porém, aos 47 segundos após o micro-ondas começar a esquentar sua comida, ela decidiu cancelar pois estava com muita fome. Implemente um algoritmo que representa esse processo e execute a função pararDeAquecer aos 47 segundos, exibindo na tela a mensagem “O botão cancelar foi pressionado, parar de aquecer”.

**Questão 16:** Lembra de Dimitri e Monique da questão 5?  Eles foram ao supermercado e estão utilizando um carrinho para colocar os produtos… Crie uma array que representa o carrinho, e implemente uma arrow função que adiciona os produtos, contudo essa função deve impedir que produtos duplicados sejam inseridos no carrinho.

**Questão 17:**  Você é hacker! Isso mesmo, você possui o nome de usuário da conta do instagram que você deseja acessar, mas não tem a senha, porém, você conhece algumas características que obteve através de engenharia social, e acredita que a senha seja uma dessas palavras “chocolateQuente viajar amoviajar 123456 alterarsenha”.  
a) Desenvolva uma função que receba como parâmetro esse texto inteiro e verifique se a senha do usuário que é amoviajar está contida nessas palavras; Caso sim, a mensagem “Você acessou a conta!”;

**Questão 18:** Você está criando uma rede social, prepare-se para ganhar muito dinheiro e se tornar o próximo bilionário! A funcionalidade que você está trabalhando é a de mostrar amigos em comum entre dois usuários. O usuário Isadora possui os amigos [“pedro”,”bianca”,”fernanda”] já o usuário Igor possui os seguintes amigos [“pedro”,”bianca”]. Desenvolva uma função que exibe uma lista de amigos em comum entre Isadora e Igor.

**Questão 19:** Ainda falando sobre sua rede social incrível! Agora você está desenvolvendo botão curtir. Implemente um algoritmo que simule que os amigos de Isadora, Pedro, Bianca e Fernanda, curtem uma postagem de Isadora. Dica: Crie um objeto que contenha uma array de objetos chamados postagens, e uma dessas postagens vai ter outra array chamada de curtidas, onde serão armazenados os usuários que curtiram.

**Questão 20:** Cappuccino é um bot bolado no servidor Laboratório de Dev no Discord… Toda segunda-feira às 08:00 ele envia a mensagem "Tenha uma ótima semana pessoal”. Implemente um trecho de código que simula esse comportamento. Dica pesquise na internet sobre o uso de datas e dias da semana em javascript.

**Questão 21:** Cappuccino novamente! Implemente um algoritmo que: Quando alguém falar “cappuccino me motiva”, ele deve responder com uma das mensagens de maneira aleatória:

    “Tenha coragem para se tornar aquilo que sonha.”  
    
    “Mudar pode dar medo, mas é uma aventura que pode te levar muito longe.”  
      
    “Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar em você.”
      
    “Os sonhos servem para abrir o caminho e mostrar a direção.”  

**Questão 22:** Instalação e uso de pacotes:  
a) Utilize o yarn ou o npm para instalar o pacote jspdf e o pacote faker-js e gere um PDF contendo as frases da questão 20, e gere dados fake como nome, endereço e telefone utilizando o faker e insira também no PDF;

**Questão 23:** Dado o seguinte objeto, Implemente uma função que receba esse objeto, e retorne APENAS o endereço de entrega (entrega = true):

```js
    const cadastro = {
        idCliente: 47,
        nome: "Cicrano",
        sobrenome: "da Silva Sauro",
        telefone: "8398888888",
        enderecos: [
            {
                id: 1,
                cep: "58108-001",
                logradouro: "Rua de Exemplo 1",
                complemento: "",
                bairro: "Jardim Sao Paulo",
                localidade: "João Pessoa",
                uf: "PB",
                entrega: true
            },
            {
                id: 2,
                cep: "58108-002",
                logradouro: "Av de Exemplo 2",
                complemento: "Apto 4, Bloco A",
                bairro: "Malvinas",
                localidade: "Campina Grande",
                uf: "PB",
                entrega: false
            }
        ]
    }
```

**Questão 24:** Dado o seguinte objeto que representa um objeto, implemente uma função que receba como parametro o produto e retorne apenas a descrição e o preço

```js
    const produto = {
        sku: 123,
        descricao: "Nome do Produto XPTO",
        preco: 1.99,
    }
```

**Questão 25:** Crie um servidor http utilizando o pacote npm expressjs, esse servidor deverá:

    a) Ser acessado através do endereço http://localhost:3001;
    b) Deverá conter um endpoint GET que ao ser acessado retorne a mensagem "Seja Bem vindo"
    c) Deverá conter outro endpoint POST que receba o objeto contido na questão 23 e retorne no response ao usuário, apenas o endereço de entrega (entrega = true)
    d) Deverá conter também, outro endpoint POST, que receba o objeto contido na questão 24, e retorne no response para o usuário a mensagem "O item 'Nome do Produto XPTO' foi cadastrado com sucesso."  
# tdd-js
