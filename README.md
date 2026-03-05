# 🚀 Task Manager API - Cloud Native Backend

<p align="center">
  <img src="https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" alt=".NET" />
  <img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" alt="C#" />
  <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" alt="Google Cloud" />
</p>

## 🎯 Sobre o Projeto

Este projeto é uma aplicação **Fullstack Web** desenvolvida com o foco em demonstrar princípios sólidos de **Engenharia de Software no Back-end**. Trata-se de uma API RESTful completa construída com C# e ASP.NET Core, servindo uma interface Front-end totalmente desacoplada.

Para simular um ambiente de produção real e aplicar conceitos modernos de DevOps, a aplicação foi **containerizada com Docker** e o deploy foi realizado na nuvem através do **Google Cloud Run**, com integração via GitHub. O Front-end estático também é servido de forma nativa pela API dentro do mesmo ecossistema Cloud.

## �‍💻 Sobre o Autor

**Daniel Rodrigues**
*Estudante de Desenvolvimento de Software | Focado em Back-end (C# / .NET)*

Sou estudante de Ensino Superior no curso de **Desenvolvimento de Software Multiplataforma na FATEC Itaquera**. Desenvolvi este projeto como um caso de estudo prático para apresentar aos recrutadores e consolidar meus conhecimentos em arquitetura de APIs, persistência de dados (Entity Framework) e práticas modernas de deploy na nuvem (Containerização e Serverless computing/Cloud Run). Estou buscando uma oportunidade no mercado de tecnologia como Desenvolvedor Júnior / Trainee para agregar valor ao time e continuar minha evolução técnica.

🔗 [Meu Perfil no GitHub](https://github.com/danielvor)

---

## 🛠️ Stack Tecnológica e Habilidades Demonstradas

### Back-end (Core & API)
*   **C# & .NET 10:** Domínio da linguagem, tipagem forte e desenvolvimento orientado a objetos.
*   **ASP.NET Core Web API:** Criação e roteamento eficiente de endpoints RESTful.
*   **Entity Framework Core (ORM):** Mapeamento objeto-relacional seguro e abstração do acesso a dados.
*   **SQLite:** Banco de dados relacional embarcado lidando com operações transacionais integradas.
*   **Static Files Middleware:** Configuração do pipeline do ASP.NET para servir as páginas do Front-end em conjunto com a API.

### DevOps, Infraestrutura & Cloud
*   **Docker:** Criação de `Dockerfile` limpo utilizando *Multi-stage builds* (Build & Publish) para imagens mais leves e empacotamento da aplicação.
*   **Google Cloud Run:** Deploy em ambiente Serverless garantindo escalabilidade automática e resiliência, abstraindo a infraestrutura.
*   **GitHub:** Versionamento contínuo e repositório remoto para entrega de código.

### Front-end (Interface Nativa)
*   **JavaScript (Vanilla JS) & Fetch API:** Consumo assíncrono para os métodos HTTP (GET, POST, PUT, DELETE) e manipulação do DOM.
*   **HTML5 & CSS3:** Design minimalista e responsivo (Dark Mode) focando exclusivamente na UX do usuário para interagir com o sistema.

---

## ⚙️ Arquitetura e Funcionalidades REST

O sistema segue os padrões de comunicação HTTP estabelecidos, onde os serviços REST fornecem uma resposta JSON leve.

- `GET /api/tasks`: Recupera a lista de todas as tarefas cadastradas, ordenadas de forma decrescente pela criação.
- `POST /api/tasks`: Registra um novo *TaskItem* no contexto do banco de dados (Status inicial padronizado).
- `PUT /api/tasks/{id}`: Promove atualizações seguras de dados (Toggle de Conclusão).
- `DELETE /api/tasks/{id}`: Remove permanentemente uma tarefa específica.

---

## 🚀 Como Executar Localmente

### Opção 1: Usando Docker (Recomendado)
Apenas o [Docker Desktop](https://www.docker.com/) é necessário para simular totalmente o ambiente de produção local.

```bash
# Construa a imagem Docker com a tag "taskmanager"
docker build -t taskmanager .

# Inicie um container mapeado na porta 8080
docker run -d -p 8080:8080 taskmanager
```
Acesse `http://localhost:8080` no navegador para observar o sistema instanciado.

### Opção 2: Pelo Terminal / .NET CLI
Requer o SDK do .NET 10 na máquina local.

```bash
# Acesse o diretório da API
cd TaskManager.Api

# Rode a aplicação
dotnet run
```
Como configuramos o middleware de *Static Files*, o front-end carregará automaticamente acessando o localhost pelo `.NET SDK`!

---
*Este é um projeto-modelo que reflete minhas habilidades para construir e fazer deploy de software moderno que entrega valor de ponta a ponta. Feedbacks técnicos de recrutadores e colegas engenheiros são muito bem-vindos!*
