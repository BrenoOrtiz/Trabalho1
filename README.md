# CRUD App - Sistema de Gerenciamento de Usuários

Este é um projeto CRUD (Create, Read, Update, Delete) completo com frontend React e backend Node.js/Express, utilizando MySQL como banco de dados.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

-   [Node.js](https://nodejs.org/) (versão 14 ou superior)
-   [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)
-   [MySQL](https://www.mysql.com/) (instalado e em execução)

## Configuração do Banco de Dados

1. Acesse o MySQL via linha de comando ou ferramenta de sua preferência (MySQL Workbench, etc.)
2. Crie um banco de dados chamado `crud_exp2`:
    ```sql
    CREATE DATABASE crud_exp2;
    USE crud_exp2;
    ```
3. Crie a tabela `usuarios`:
    ```sql
    CREATE TABLE usuarios (
      idusuarios INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      idade INT NOT NULL,
      cpf VARCHAR(14) NOT NULL
    );
    ```

## Instalação do Backend

1. Abra um terminal e navegue até a pasta do backend:

    ```bash
    cd backend
    ```

2. Instale as dependências (Instala todas que estão no package.json):

    ```bash
    npm install
    ```

    Dependências do Backend:

    ```json
    "dependencies": {
       "cors": "^2.8.5",
       "express": "^4.21.2",
       "mysql": "^2.18.1",
       "mysql2": "^3.13.0",
       "nodemon": "^3.1.9"
     }
    ```

### Caso não funcione instale individualmente cada uma

```bash
npm install express mysql mysql2 cors nodemon
```

3. Verifique e ajuste as credenciais do banco de dados no arquivo `db.js` se necessário:
    ```javascript
    const db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "SuaSenha", // Altere para sua senha do MySQL
        database: "crud_exp2",
    });
    ```

## Instalação do Frontend

1. Abra outro terminal e navegue até a pasta do frontend:

    ```bash
    cd frontend
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

    Dependências do Frontend:

    ```json
    "dependencies": {
       "@testing-library/dom": "^10.4.0",
       "@testing-library/jest-dom": "^6.6.3",
       "@testing-library/react": "^16.2.0",
       "@testing-library/user-event": "^13.5.0",
       "react": "^19.0.0",
       "react-dom": "^19.0.0",
       "react-router-dom": "^6.15.0",
       "react-scripts": "5.0.1",
       "web-vitals": "^2.1.4"
    }
    ```

## Executando o Projeto

### Backend

1. Na pasta `backend`, execute:
    ```bash
    npm start
    ```
    O servidor estará disponível em http://localhost:8800

### Frontend

1. Na pasta `frontend`, execute:
    ```bash
    npm start
    ```
    A aplicação estará disponível em http://localhost:3000

## Funcionalidades

-   Listagem de usuários
-   Visualização detalhada de usuário
-   Adição de novos usuários
-   Edição de usuários existentes
-   Exclusão de usuários
-   Paginação de resultados

## Solução de Problemas

### Erro de conexão com o banco de dados

-   Verifique se o MySQL está em execução
-   Confirme as credenciais no arquivo `db.js`
-   Certifique-se de que o banco de dados `crud_exp2` foi criado

### Problemas com o frontend

-   Certifique-se de que todas as dependências foram instaladas (`npm install`)
-   Verifique se o backend está em execução
-   Confira se as versões do React e outras dependências são compatíveis

### Erro de CORS

-   Verifique se o backend está configurado corretamente para aceitar requisições do frontend
-   Confirme se as URLs estão configuradas corretamente

## Estrutura do Projeto

-   `frontend/` - Aplicação React
-   `backend/` - API REST com Node.js/Express
    -   `Controllers/` - Controladores para operações CRUD
    -   `Routes/` - Rotas da API

## Encerrando a Aplicação

Para encerrar a aplicação, pressione `Ctrl+C` nos terminais do frontend e backend.
