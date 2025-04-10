# CRUD App

Este é um projeto CRUD (Create, Read, Update, Delete) completo com frontend React e backend Node.js/Express, utilizando MySQL como banco de dados.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

-   [Node.js](https://nodejs.org/) (versão 14 ou superior)
-   [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)
-   [MySQL](https://www.mysql.com/) (instalado e em execução)

# Passo a passo Configuração e Execução do Projeto

## Clonando o repositório

```bash
git clone https://github.com/BrenoOrtiz/Trabalho1
cd Trabalho1
```

## Configuração do Banco de Dados

1. Acesse o MySQL via linha de comando ou ferramenta de sua preferência (MySQL Workbench, etc.)
2. Crie um banco de dados chamado `crud_exp2`:
    ```sql
    CREATE DATABASE crud_exp2;
    USE crud_exp2;
    ```
3. Crie a tabela `usuarios`:
    ```sql
    CREATE TABLE `usuarios` (
      `idusuarios` int NOT NULL AUTO_INCREMENT,
      `nome` varchar(45) DEFAULT NULL,
      `idade` int DEFAULT NULL,
      `cpf` varchar(45) DEFAULT NULL,
      PRIMARY KEY (`idusuarios`)
    );
    ```
4. Insira dados da tabela:
   ```sql
    INSERT INTO `usuarios` VALUES 
      (1,'João',30,'11111111111'),
      (2,'Maria',25,'22222222222'),
      (3,'Carlos',42,'33333333333'),
      (4,'Ana',29,'44444444444'),
      (5,'Pedro',35,'55555555555'),
      (6,'Juliana',31,'66666666666'),
      (7,'Lucas',22,'77777777777'),
      (8,'Marina',28,'88888888888'),
      (9,'Eduardo',40,'99999999999'),
      (10,'Luiza',33,'00000000000'),
      (11,'Roberto',45,'12345678901'),
      (12,'Fernanda',27,'23456789012'),
      (13,'Rafael',39,'34567890123'),
      (14,'Beatriz',26,'45678901234'),
      (15,'Gustavo',50,'56789012345'),
      (16,'Marcela',19,'67890123456'),
      (17,'Anderson',38,'78901234567'),
      (18,'Bianca',24,'89012345678'),
      (19,'Henrique',47,'90123456789'),
      (20,'Aline',34,'01234567891'),
      (21,'Igor',36,'11234567892'),
      (22,'Larissa',32,'21234567893'),
      (23,'Victor',29,'31234567894'),
      (24,'Carolina',23,'41234567895'),
      (25,'Diogo',43,'51234567896');
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

2. Instale as dependências (Instala todas que estão no package.json):

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

# Estrutura do Projeto: Trabalho1

```
Trabalho1/
│
├── backend/               # Código do servidor
│   ├── index.js           # Ponto de entrada da API
│   ├── package.json       # Dependências do backend
│   └── routes/            # Rotas da API
│
└── frontend/              # Código da interface
    ├── public/            # Arquivos estáticos
    ├── src/               # Código fonte React
    │   ├── components/    # Componentes React
    │   ├── App.js         # Componente principal
    │   └── index.js       # Ponto de entrada React
    └── package.json       # Dependências do frontend
```

## Encerrando a Aplicação

Para encerrar a aplicação, pressione `Ctrl+C` nos terminais do frontend e backend.
