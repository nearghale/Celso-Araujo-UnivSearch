# App Cashback

Este repo se trata de um desafio frontend, onde crio uma aplicação de cashback. 

Foram criadas as seguintes features: 

- Criação de api fake com node e express autenticada. 
- Criação das telas de: 
    - Login, 
    - Registro de novo usuário **, 
    - Lista de compras do usuário ****,
    - Cadastro de nova compra **,
    - Visualização do total do cashback ***


** A api não esta preparada para receber cadastros, por isso, as telas somente são estáticas com os campos validados com Yup.*

*** O total do cashback também é um valor estático*

**** Lista de compras do usuário: Esta tela recebe os dados da API FAKE*

---

## Rodando a aplicação
Primeiro rode a aplicação seguindo o passo a passo abaixo: 

### Para rodar o front
Acesse a pasta: cashback/src e execute no terminal, os seguintes passos: 

```jsx
yarn install
yarn run dev
```

O front irá rodar na porta 3000: http://localhost:3000.


### Para rodar a api
Acesse a pasta: cashback/src/api/jwt e execute no terminal: 
```jsx
node index
```

O backend irá rodar na porta 3001: http://localhost:3001.


#### Rotas da aplicação

- ROTA: localhost:3001 (GET)

```jsx
{
    "message": "Tudo ok por aqui!"
}
```

- LOGIN: localhost:3001/login (POST, params: user e pwd)

Se user e pwd estiverem corretas:
```jsx
{
    "auth": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYxMDMwMzQ4MiwiZXhwIjoxNjEwMzAzNzgyfQ.y0yAk-2FvKSsetpUlP_zqbfr8QE4TLUfzyasB4pIWNg"
}
```

Se user e senha estiverem incorreto: 
```jsx
{
    "message": "Login inválido!"
}
```

- REVENDEDORES: localhost:3001/resellers (GET, token)

Se token estiver expirado ou for inválido: 
```jsx
{
    "auth": false,
    "message": "Failed to authenticate token."
}
```

Se token estiver ok:
```jsx
{
  "status": "sucesso",
  "resultado": {
    "users": [...]
}
```

### Para fazer login , acesse com os dados abaixo: 

```jsx
    user: tata@gmail.com
    senha: asd1234@
```

---

### Observação!

- Esta aplicação foi a primeira experiência que tive com backend 🤗
- Dessa forma, não consegui criar a parte de cadastro da api por falta de conhecimento :(
- Logo mais vou fazer um novo commit com esta parte, assim que eu aprender a criar o cadastro na api =) 
- Estudei como fazer uma api fake para este desafio em um final de semana, por isso, peço desculpas se o código backend não estiver muito bom 🙈
- Amei realizar este desafio!!! 👩‍💻💙
- Agora vou decolar 🚀  continuando com estudos sobre NODE, EXPRESS, TDD e muito mais 🤗
- Vou desvendar os mistérios do BACKEND uhuuulll!!!! 🚀


### Telas do projeto

Já deu para notar que eu amo design também neh? rs...
As telas foram desenhadas com todo carinho, utilizando linear no bg e seguindo as cores do logo 💙

Veja o resultado final neste link: [https://www.notion.so/Telas-Cashback-2fabf70a0ab94077b411eb1b27337f95](https://www.notion.so/Telas-Cashback-2fabf70a0ab94077b411eb1b27337f95)
