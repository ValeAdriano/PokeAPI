# Leany PokéAPI - Backend NestJS

Bem-vindo ao desafio técnico para a vaga de **Desenvolvedor Backend Júnior na Leany**!  
Este projeto consiste em uma **API RESTful** construída com **NestJS**, integrando-se à **PokéAPI** para gerenciamento de times de Pokémon criados por treinadores.

---

## 🔗 Link do Swagger

Acesse a documentação completa da API em:



[http://localhost:3000/api](http://localhost:3000/api)


---

## 📌 Tecnologias

- [NestJS](https://nestjs.com/) (Framework principal)
- [TypeORM](https://typeorm.io/) (ORM)
- [PostgreSQL](https://www.postgresql.org/) (Banco de dados relacional)
- [Docker](https://www.docker.com/)
- [PokéAPI](https://pokeapi.co/) (Integração externa)
- [Swagger/OpenAPI](https://swagger.io/)

---

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/leany-poke-api.git
cd leany-poke-api
````

### 2. Instale as dependências

```bash
npm install
```

### 3. Suba o banco de dados com Docker

```bash
docker-compose up -d
```

### 4. Configure o `.env`

Crie um arquivo `.env` na raiz com:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=leany_poke_db
PORT=3000
```

> Altere conforme seu ambiente local, caso necessário.

---

## ▶️ Executando a aplicação

```bash
npm run start
```

---

## 📘 Endpoints principais

### 🔹 Treinadores (`/trainers`)

* `POST /trainers` → Cria um novo treinador
* `GET /trainers` → Lista todos os treinadores
* `GET /trainers/:id` → Busca treinador por ID
* `PUT /trainers/:id` → Atualiza treinador
* `DELETE /trainers/:id` → Deleta treinador

### 🔹 Times (`/teams`)

* `POST /teams` → Cria um time vinculado a um treinador
* `GET /teams` → Lista todos os times
* `GET /teams/:id` → Detalha um time específico
* `GET /teams/trainer/:trainerId` → Lista todos os times de um treinador
* `DELETE /teams/:id` → Remove um time

### 🔹 Pokémon nos Times (`/teams/:teamId/pokemons`)

* `POST` → Adiciona um Pokémon (usando ID ou nome da PokéAPI)
* `GET` → Lista Pokémons de um time (enriquecido com nome, tipo, imagem da PokéAPI)
* `DELETE /teams/:teamId/pokemons/:id` → Remove um Pokémon do time

---

## 🧠 Decisões de Arquitetura

* **Camadas separadas**: Controllers, Services, DTOs e Entidades isolados.
* **Validações**: Usando `class-validator` em todos os DTOs.
* **Integração com PokéAPI**: Implementada via `PokeapiService`, que valida e enriquece os dados.
* **Relacionamentos**:

  * 1\:N → Treinador → Times
  * N\:N (implícita) → Time ↔ Pokémons da PokéAPI

---

## 📂 Estrutura de Diretórios

```
src/
├── trainers/
├── teams/
├── team-pokemons/
├── pokeapi/
├── common/
└── main.ts
```

---

## 🧪 Melhorias futuras (não obrigatórias)

* Paginação e filtros nos endpoints
* Testes unitários e e2e (Playwright / Jest)
* Autenticação com JWT
* Cache para chamadas à PokéAPI

---

## 📝 Autor

Desenvolvido por **Adriano Vale** para o desafio técnico da Leany.
[GitHub](https://github.com/ValeAdriano)

---

## 🛠 Comandos úteis

```bash
# Criar entidade + módulo + serviço + controller com CLI Nest
nest g resource trainers
nest g resource teams
nest g resource team-pokemons

# Gerar migrations com TypeORM
npm run typeorm:generate -- -n NomeDaMigration
npm run typeorm:run
```

---

## 📄 Licença

MIT

```

---

Se quiser, posso personalizar o conteúdo com base em detalhes do seu repositório público. Deseja que eu adicione os links reais do GitHub?
```
