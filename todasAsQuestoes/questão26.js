/*
Questão 26: Na empresa em que você trabalha, você recebeu a tarefa de criar a funcionalidade
de exibir uma lista de municípios baseada na UF enviada pelo usuário.

a) Utilizando o servidor express criado na questão 25, crie um novo endpoint do tipo POST chamado http://localhost:3001/listarMunicipios que receba o parámetro UF
b) No seu endpoint (listarMunicipios), você deverá fazer um request ao endpoint "Municípios por UF" descrito na API do IBGE https://servicodados.ibge.gov.br/api/docs/localidades#api-_
c) Ao acessar o seu endpoint o usuário receberá o resnponse em json conforme o exemplo abaixo.

[
  {
    "id": "2500106",
    "nome": "Água Branca"
  },
  {
    "id": "2500205",
    "nome": "Aguiar"
  }
  // ...
]
*/