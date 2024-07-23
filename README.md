# Alura Books Server
![CORS](https://img.shields.io/badge/CORS-blue?logo=cors&logoColor=white)
![Express](https://img.shields.io/badge/Express-green?logo=express&logoColor=white)
![Nodemon](https://img.shields.io/badge/nodemon-blue?logo=nodemon&logoColor=white)

Bem-vindo ao repositório do **Alura Books Server**. Este projeto é uma API backend desenvolvida para fornecer dados e funcionalidades para a aplicação Alura Books.

## Sumário

- [Introdução](#introdução)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Endpoints](#endpoints)
- [Contribuição](#contribuição)

## Introdução

O **Alura Books Server** é uma API RESTful construída com Node.js e Express. Ele fornece endpoints para gerenciar livros, autores e usuários, permitindo a criação, leitura, atualização e exclusão de dados.

## Instalação

Para instalar e rodar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:
    ```bash
    git clone https://github.com/Nic0lasSouza/alura-books-server.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd alura-books-server
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Inicie o servidor:
    ```bash
    npm start
    ```

## Como Usar

Uma vez que o servidor esteja em execução, você pode acessar a API através do endereço `http://localhost:3000`. Utilize ferramentas como Postman ou cURL para interagir com os endpoints da API.

## Endpoints

Abaixo estão alguns dos principais endpoints disponíveis na API:

- **Livros**
  - `GET /books` - Lista todos os livros
  - `POST /books` - Adiciona um novo livro
  - `GET /books/:id` - Obtém um livro específico
  - `PUT /books/:id` - Atualiza um livro específico
  - `DELETE /books/:id` - Remove um livro específico


Para mais detalhes sobre todos os endpoints e seus parâmetros, consulte a documentação da API.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, por favor.

