# API P2 - DevSecOps Project

Projeto de Integração e Entrega Contínua (DevSecOps) com CI/CD, SAST, Docker e deploy automatizado.

## 📋 Sobre o Projeto

Este projeto demonstra a implementação completa de um pipeline DevSecOps, incluindo:
- ✅ API Node.js com Express
- ✅ Endpoints vulneráveis para análise SAST
- ✅ CRUD completo com MySQL
- ✅ Documentação Swagger
- ✅ Docker containerization
- ✅ CI/CD com GitHub Actions
- ✅ Análise SAST com SonarCloud
- ✅ Deploy automatizado no Render

## 🚀 Como Rodar Localmente

### Pré-requisitos
- Node.js >= 14.0.0
- npm >= 6.0.0
- MySQL (local ou online)

### Instalação

1. **Clone o repositório**
```bash
git clone <seu-repositorio>
cd api-sast
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
# Copie o arquivo de exemplo
cp .env.example .env

# Edite o .env com suas credenciais de banco de dados
```

4. **Inicie a aplicação**
```bash
npm start
```

A API estará rodando em `http://localhost:3000`

## 📚 Endpoints Disponíveis

### Health Check
- `GET /` - Status da API

### CRUD de Usuários
- `GET /api/users` - Listar todos os usuários
- `GET /api/users/:id` - Buscar usuário por ID
- `POST /api/users` - Criar novo usuário
- `PUT /api/users/:id` - Atualizar usuário
- `DELETE /api/users/:id` - Deletar usuário

### Endpoints Vulneráveis (para SAST)
- `POST /api/vulnerable/sql-injection` - SQL Injection demo
- `POST /api/vulnerable/command-injection` - Command Injection demo
- `POST /api/vulnerable/xxe` - XXE demo
- `GET /api/vulnerable/path-traversal` - Path Traversal demo
- `GET /api/vulnerable/hardcoded-credentials` - Hardcoded Credentials demo
- `POST /api/vulnerable/weak-crypto` - Weak Cryptography demo

## 🧪 Testes

```bash
# Rodar testes
npm test

# Rodar testes com coverage
npm run test:coverage
```

## 🐳 Docker

```bash
# Build da imagem
docker build -t api-p2 .

# Rodar container
docker run -p 3000:3000 --env-file .env api-p2
```

## 📖 Documentação

Mais documentação será adicionada conforme avançamos nos tópicos:
- [ ] Swagger/OpenAPI (Tópico 4)
- [ ] Guia de contribuição com Gitflow (Tópico 5)
- [ ] Configuração do SonarCloud (Tópico 6)
- [ ] Configuração do Docker Hub (Tópico 8)
- [ ] Configuração do Render (Tópico 9)

## 📝 Status do Projeto

**Tópico 1: Estrutura Base da API** ✅ CONCLUÍDO
- [x] API Node.js com Express
- [x] 18 endpoints vulneráveis implementados
- [x] Swagger/OpenAPI configurado
- [x] CRUD de usuários implementado
- [x] Configuração de banco de dados

**Tópico 2: Docker** ✅ CONCLUÍDO
- [x] Dockerfile multi-stage otimizado
- [x] .dockerignore configurado
- [x] Usuário não-root e health check
- [ ] Teste de build (pendente - Docker Desktop)

**Próximos Passos:**
- [ ] Tópico 3: Banco de Dados MySQL + CRUD (criar conta no Render)
- [ ] Tópico 4: Swagger/OpenAPI (já está funcionando!)
- [ ] Tópico 5: Git e Gitflow
- [ ] Tópico 6: GitHub Actions - CI
- [ ] Tópico 7: Versionamento e Build Docker
- [ ] Tópico 8: Docker Hub - CD
- [ ] Tópico 9: Render - Deploy
- [ ] Tópico 10: Documentação Final

## 👨‍💻 Autor

Projeto desenvolvido para a P2 de Integração e Entrega Contínua (DevSecOps)

## 📄 Licença

MIT
