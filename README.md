# Boilerplate Node.js

Boilerplate com:

- Express
- TypeScript
- Sequelize com MySQL
- Validação com Yup
- Arquitetura em camadas: Controller, Model, Repository e Service

## Estrutura

```text
src/
  app.ts
  server.ts
  config/
  modules/
    users/
      controllers/
      models/
      repositories/
      services/
      validators/
  shared/
    errors/
    http/
    middlewares/
```

## Como usar

1. Instale as dependências:

```bash
npm install
```

2. Crie o arquivo `.env` com base em `.env.example`.

3. Rode em desenvolvimento:

```bash
npm run dev
```

## Rotas de exemplo

- `GET /health`
- `POST /api/users`

### Payload `POST /api/users`

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "123456"
}
```
