# API P2 - DevSecOps (Integração e Entrega Contínua)

Projeto de API Node.js com vulnerabilidades intencionais para demonstração de ferramentas SAST (Static Application Security Testing), integrado com PostgreSQL, CI/CD e deploy automatizado.

**⚠️ AVISO**: Esta API contém vulnerabilidades intencionais para fins educacionais. **NÃO USE EM PRODUÇÃO!**

## 🎯 Objetivo

Demonstrar um pipeline completo de DevSecOps incluindo:
- ✅ API REST com Node.js + Express
- ✅ Vulnerabilidades intencionais para SAST
- ✅ CRUD funcional com PostgreSQL
- ✅ Documentação automática com Swagger
- ✅ Containerização com Docker
- ✅ Gitflow e versionamento semântico
- 🔄 CI/CD com GitHub Actions
- 🔄 Análise de segurança com SonarCloud
- 🔄 Deploy automático no Render

## � Documentação

- **Swagger/OpenAPI**: http://localhost:3000/api-docs
- **Repositório**: https://github.com/Adejarbas/api-p2
- **Guia de Contribuição**: [CONTRIBUTING.md](CONTRIBUTING.md)

## �🚀 Como Rodar Localmente

### Pré-requisitos

- Node.js >= 18.0.0
- npm >= 6.0.0
- Conta no Render (para banco PostgreSQL)

### Instalação

```bash
# Clonar repositório
git clone https://github.com/Adejarbas/api-p2.git
cd api-p2

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env
# Edite o .env com suas credenciais do PostgreSQL

# Iniciar servidor
npm start
```

O servidor estará disponível em: http://localhost:3000

## �️ Banco de Dados

### PostgreSQL no Render (Gratuito)

O projeto usa PostgreSQL hospedado no Render. Para configurar:

1. Crie uma conta em [render.com](https://render.com)
2. Crie um banco PostgreSQL (plano Free)
3. Copie as credenciais para o arquivo `.env`

**Estrutura da tabela `users`:**

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 📝 Endpoints

### CRUD de Usuários (Funcional)

- `GET /api/users` - Listar todos os usuários
- `GET /api/users/:id` - Buscar usuário por ID
- `POST /api/users` - Criar novo usuário
- `PUT /api/users/:id` - Atualizar usuário
- `DELETE /api/users/:id` - Deletar usuário

### Endpoints Vulneráveis (Para SAST)

- `GET /users/:id` - SQL Injection
- `POST /execute` - Command Injection
- `GET /download` - Path Traversal
- `GET /search` - XSS
- `POST /encrypt` - Weak Cryptography

**Veja todos os endpoints na documentação Swagger!**

## 🧪 Testes

```bash
# Executar testes
npm test

# Executar testes com cobertura
npm run test:coverage

# Verificar cobertura mínima
npm run coverage:check
```

## 🐳 Docker

```bash
# Build da imagem
docker build -t api-p2:latest .

# Rodar container
docker run -p 3000:3000 \
  -e DB_HOST=seu-host \
  -e DB_USER=seu-usuario \
  -e DB_PASSWORD=sua-senha \
  -e DB_NAME=api_p2 \
  -e DB_SSL=true \
  api-p2:latest
```

## 📊 Progresso do Projeto

### ✅ Concluído (8/10 tópicos - 80%)

**Tópico 1: Estrutura Base da API**
- [x] API Node.js com Express
- [x] 18 endpoints vulneráveis
- [x] Swagger/OpenAPI configurado
- [x] CRUD de usuários

**Tópico 2: Docker**
- [x] Dockerfile multi-stage otimizado
- [x] .dockerignore configurado
- [x] Health check e segurança

**Tópico 3: PostgreSQL + CRUD**
- [x] Banco PostgreSQL no Render
- [x] CRUD funcional testado
- [x] Integração completa

**Tópico 4: Swagger**
- [x] Documentação automática
- [x] Interface interativa
- [x] Todos endpoints documentados

**Tópico 5: Git e Gitflow**
- [x] Repositório configurado
- [x] Branches main e develop
- [x] Conventional Commits

**Tópico 6: GitHub Actions - CI**
- [x] Workflow de CI
- [x] Testes automatizados
- [x] Cobertura de código
- [x] SonarCloud configurado

**Tópico 7: Versionamento e Build Docker**
- [x] Versionamento semântico automático
- [x] Build automatizado com GitHub Actions
- [x] Publicação no Docker Hub
- [x] Tags automáticas (latest, sha, versão)

**Tópico 8: Deploy Render - CD**
- [x] Deploy automático configurado
- [x] Variáveis de ambiente
- [x] Aplicação em produção
- [x] URL pública: https://api-p2-latest.onrender.com

### 🔄 Próximos (2/10 tópicos)

**Tópico 9: Monitoramento e Logs**
- [ ] Configurar logs estruturados
- [ ] Métricas de performance
- [ ] Alertas de erro

**Tópico 10: Documentação Final**
- [ ] Guias completos
- [ ] Walkthrough do projeto
- [ ] Apresentação para o professor

## �️ Tecnologias

- **Runtime**: Node.js 18
- **Framework**: Express.js
- **Banco**: PostgreSQL (Render)
- **Docs**: Swagger/OpenAPI
- **Container**: Docker
- **CI/CD**: GitHub Actions
- **SAST**: SonarCloud
- **Deploy**: Render
- **Registry**: Docker Hub

## 🔒 Vulnerabilidades Intencionais

1. SQL Injection
2. Command Injection
3. XSS
4. Path Traversal
5. XXE
6. Hardcoded Credentials
7. Weak Cryptography
8. SSRF
9. Code Injection
10. ReDoS
11. Insecure Random
12. Prototype Pollution
13. Mass Assignment
14. Timing Attack

**Todas detectadas pelo SonarCloud!**

## 👥 Contribuindo

Veja [CONTRIBUTING.md](CONTRIBUTING.md) para guia completo de Gitflow e Conventional Commits.

## � Links

- [Repositório](https://github.com/Adejarbas/api-p2)
- [Render](https://render.com)
- [SonarCloud](https://sonarcloud.io)
- [Docker Hub](https://hub.docker.com)
