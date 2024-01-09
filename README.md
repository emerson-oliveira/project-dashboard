# Teste Técnico: Desenvolvimento de Aplicação em Node.js com Frontend
![Static Badge](https://img.shields.io/badge/Node.js-marker?label=18.19.0)

Este repositório contém o código para uma aplicação de Gerenciamento de Projetos desenvolvida como parte de um teste técnico. A aplicação foi desenvolvida utilizando Node.js e um banco de dados relacional.

## 🎯 Objetivo do Teste

O objetivo deste teste é avaliar as habilidades técnicas do candidato, bem como seu conhecimento das boas práticas de desenvolvimento. O teste envolve o desenvolvimento de uma aplicação que permite aos usuários criar e gerenciar projetos e suas respectivas tarefas.

## 📝 Descrição do Teste

A aplicação é um Gerenciador de Projetos que permite aos usuários criar e gerenciar projetos e suas respectivas tarefas. Esta aplicação é um pouco mais complexa do que uma simples lista de tarefas, pois envolve o gerenciamento de projetos com várias tarefas associadas a eles. As funcionalidades essenciais incluem:

- Criar um novo projeto: Os usuários devem poder adicionar um novo projeto, incluindo um nome, uma descrição e a data de início.
- Listar todos os projetos: Os usuários devem poder listar todos os projetos atualmente na lista.
- Adicionar tarefas a um projeto: Os usuários devem poder adicionar tarefas a um projeto existente, incluindo um título, uma descrição e a data de conclusão da tarefa.
- Listar tarefas de um projeto: Os usuários devem poder listar todas as tarefas associadas a um projeto específico.
- Marcar uma tarefa como concluída: Os usuários devem poder marcar uma tarefa específica como concluída.
- Excluir uma tarefa: Os usuários devem poder excluir uma tarefa de um projeto.

## 📚 Requisitos do Teste

- Utilize Node.js para criar a aplicação.
- Utilize um banco de dados relacional (MySQL, PostgreSQL, etc.) para armazenar projetos e tarefas.
- Crie endpoints RESTful para cada operação descrita acima.
- Desenvolva um frontend para a aplicação utilizando uma tecnologia da sua escolha.
- Integre o frontend com o backend para que os usuários possam interagir com a aplicação por meio de uma interface.
- Utilize uma ferramenta de controle de versão para versionar seu código e forneça o link do repositório.
- Documente o projeto, incluindo a estrutura do banco de dados, as rotas da API e instruções claras de como configurar e executar a aplicação.

## 🚀 Instalar e rodar o projeto

Rodar o projeto em sua máquina local é uma tarefa extremamente simples.

### Clonando o repositório

No terminal, clone o repositório do projeto:

```bash
git clone https://github.com/emerson-oliveira/project-dashboard.git
cd project-dashboard
```

### Dependência global

- Node.js LTS v18 (ou qualquer versão superior)

Utiliza `nvm`? Então pode executar `nvm install` na pasta do projeto para instalar e utilizar a versão mais apropriada do Node.js.

### Dependências locais

Então após baixar o repositório, não se esqueça de instalar as dependências locais do projeto:

Para instalar o back-end

```bash
cd server
npm install
```

Para instalar o front-end

```bash
cd web
npm install
```

### Rodar o projeto

Para rodar o projeto localmente, basta rodar o comando abaixo:

```bash
npm run dev

```

## :books: Tecnologias utilizadas

O projeto utiliza várias tecnologias e bibliotecas, incluindo:

### No back-end

- **Node.js**: Uma plataforma de tempo de execução JavaScript que permite executar JavaScript no servidor.
- **Prisma**: Um ORM (Object-Relational Mapping) de código aberto para JavaScript e TypeScript que permite que você acesse seu banco de dados de uma maneira fácil e segura.
- **PostgreSQL**:  Um poderoso sistema de banco de dados relacional de código aberto com mais de 30 anos de desenvolvimento ativo que ganhou uma forte reputação por sua confiabilidade, robustez de recursos e desempenho.
- **Joi**: Uma poderosa biblioteca de validação de dados em JavaScript.
- **Jest**: Um framework de testes em JavaScript com foco na simplicidade.

### No front-end

- **React**: Uma biblioteca JavaScript para construir interfaces de usuário.
- **Next.js**: Um framework React que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicações web baseadas em React.
- **React Bootstrap**: A versão mais popular do framework de front-end Bootstrap reconstruída para React.
- **Axios**: Uma biblioteca JavaScript muito popular que pode ser usada para enviar solicitações HTTP, funciona tanto no navegador quanto em node.js.
- **React Paginate**: Um componente React para criar paginação.

## 📐 Arquitetura do Projeto

A aplicação segue uma arquitetura de três camadas, composta por uma camada de apresentação (frontend), uma camada de lógica de negócios (backend) e uma camada de dados (banco de dados). A camada de apresentação é responsável por interagir com o usuário e exibir os dados. A camada de lógica de negócios contém toda a lógica de negócios e as regras de validação. A camada de dados é onde os dados são armazenados e recuperados.

## 📝 Padrões de Código

O projeto segue os padrões de código do JavaScript ES6 e utiliza o ESLint para garantir a consistência do código. O arquivo de configuração do ESLint (`.eslintrc`) estende as configurações do `airbnb-base` e `prettier`, que são amplamente reconhecidas na comunidade JavaScript por suas boas práticas de codificação.

Além disso, o projeto utiliza o Prettier para formatar o código e garantir uma aparência consistente. O ambiente de codificação é configurado para o `browser` e `es2021`, e o tipo de origem é definido como `script`. A versão do ECMAScript é definida como a mais recente.

As regras personalizadas podem ser adicionadas ao objeto `rules` no arquivo `.eslintrc` conforme necessário para atender às necessidades específicas do projeto.


## 📁 Estrutura de Pastas

O projeto é dividido em duas partes principais: `server` (back-end) e `web` (front-end). Aqui está uma visão geral da estrutura de pastas:

Cada pasta tem um propósito específico:

- `infra`: Contém arquivos relacionados à infraestrutura do projeto, como o arquivo `docker-compose`.
- `server`: Contém todos os arquivos relacionados ao back-end do projeto.
- `web`: Contém todos os arquivos relacionados ao front-end do projeto.

Dentro da pasta `server`, temos:

- `prisma`: Contém o esquema do banco de dados e as migrações.
- `src`: Contém o código-fonte do back-end.
- `__tests__`: Contém os testes do back-end.
- `controllers`: Contém os controladores, que lidam com a lógica de negócios.
- `db`: Contém tudo relacionado ao banco de dados.
- `middleware`: Contém todos os middlewares usados no projeto.
- `routes`: Define todas as rotas da aplicação.
- `utils`: Contém funções utilitárias que são usadas em todo o projeto.
- `validation`: Contém os esquemas de validação para os dados recebidos nas rotas.

Dentro da pasta `web`, temos:

- `src`: Contém o código-fonte do front-end.
- `components`: Contém todos os componentes React usados na aplicação.
- `pages`: Contém todas as páginas da aplicação.
- `services`: Contém serviços utilizados na aplicação, como a API.

```bash
project-dashboard
├── README.md
├── infra
│   └── docker-compose.development.yml
├── server
│   ├── jest.config.js
│   ├── package-lock.json
│   ├── package.json
│   ├── prisma
│   │   ├── migrations
│   │   │   ├── 20240109161243_create_table_project
│   │   │   │   └── migration.sql
│   │   │   ├── 20240109161423_create_table_task
│   │   │   │   └── migration.sql
│   │   │   └── migration_lock.toml
│   │   └── schema.prisma
│   └── src
│       ├── __tests__
│       │   └── routes
│       │       ├── projectRoutes.test.js
│       │       └── taskRoutes.test.js
│       ├── app.js
│       ├── controllers
│       │   ├── index.js
│       │   ├── projectController.js
│       │   └── taskController.js
│       ├── db
│       │   └── index.js
│       ├── middleware
│       │   ├── index.js
│       │   ├── validate.js
│       │   ├── validatePagination.js
│       │   ├── validateProject.js
│       │   └── validateTask.js
│       ├── routes
│       │   ├── index.js
│       │   ├── projectRoutes.js
│       │   └── taskRoutes.js
│       ├── server.js
│       ├── utils
│       │   └── handleError.js
│       └── validation
│           ├── createProjectValidation.js
│           ├── createTaskValidation.js
│           ├── index.js
│           ├── paginationValidation.js
│           ├── updateProjectValidation.js
│           └── updateTaskValidation.js
└── web
    ├── jsconfig.json
    ├── package-lock.json
    ├── package.json
    └── src
        ├── components
        │   ├── ProjectForm
        │   │   └── index.js
        │   ├── ProjectTable
        │   │   └── index.js
        │   ├── TaskModal
        │   │   ├── RenderTaskTable.js
        │   │   └── index.js
        │   ├── index.js
        │   └── style.js
        ├── pages
        │   ├── _app.js
        │   └── index.js
        └── services
            ├── api.js
            ├── eventHandlers.js
            └── index.js
```
