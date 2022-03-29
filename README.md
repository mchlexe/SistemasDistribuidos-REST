# Sistemas Distribuídos 2021.2 - REST

<p align="center">
<img src="https://user-images.githubusercontent.com/57498887/134352674-9837ff29-10ff-44f7-8c46-cb517767be49.png" width="175" height="250">
</p>

O projeto é comporto por 3 aplicações diferentes que precisam ser instaladas e depois executadas simultaneamente.  

### Executando o projeto
Antes de executar o projeto crie um arquivo .env com as variáveis do banco de dados necessárias (DATABASE_URL).

Para rodar a aplicação é necessário realizar o clone do repositório e executar os seguintes comandos:
***
Na pasta raiz do projeto:
* npm install
* npm start

Estes comandos irão instalar e executar a API de comentários que estará disponível em `localhost:3000`.

A API possui uma documentação feita com Swagger que estará disponível em `localhost:3000/docs`.
***
Na pasta "gateway":
* npm install
* node index.js

Estes comandos irão instalar e executar o API Gateway, o que tornará a API de comentários e a Google Books API disponíveis em `localhost:3030/comentarios` e `localhost:3030/books` respectivamente.
***
Na pasta "svelte":
* npm install
* npm start

Estes comandos irão instalar e executar um aplicativo SVELTE que funciona como o front-end da aplicação. Este estará disponível em `localhost:8080`
***

#### Desenvolvedores
- [Amanda Simões](https://github.com/Amanda-Simoes)
- [Michel Moreira](https://github.com/mchlexe)

#### Professor
- [Diogo Moreira](https://github.com/diogomoreiran)
