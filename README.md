# Gerenciador de Tarefas (Task Manager) - Projeto Fullstack

Este é um projeto de nível júnior desenvolvido como caso de estudo para demonstrar a criação de uma aplicação web separando as responsabilidades de **Back-end** e **Front-end**.

## 🛠 Tecnologias Utilizadas

### Back-end (`TaskManager.Api`)
Uma API RESTful limpa e objetiva construída com C#.
- **.NET 10** e **ASP.NET Core Web API**
- **Entity Framework Core** para o mapeamento objeto-relacional (ORM).
- **SQLite**: Banco de dados relacional embutido e leve (sem necessidade de instalações complexas conectando via `DefaultConnection`).
- **CORS Configurado**: Para permitir o consumo da API pelo nosso front-end local.

### Front-end (`TaskManager.Web`)
Uma interface desacoplada desenhada com estilo visual moderno (Dark Mode).
- **HTML5 e CSS3** puro utilizando boas práticas como CSS Variables.
- **JavaScript (Vanilla JS)**: Comunicação direta com a API utilizando a `Fetch API` nativa dos navegadores.

---

## 🚀 Como Executar Localmente

Você precisará do SDK do .NET instalado em sua máquina. Para executar a aplicação, siga as etapas em **dois terminais/processos separados**.

### 1. Iniciar a API (Back-end)
Navegue pelo seu terminal até a pasta do back-end e inicie a API:

```bash
cd TaskManager.Api
dotnet run
```
A API será iniciada na porta `5009` (ou na exposta no seu terminal/console de execução). O Front-end já está preparado para conectá-la.

### 2. Abrir a Interface (Front-end)
Como trata-se de um front statics simples (sem bundlers ou node), basta abrir o arquivo `index.html` disponível dentro da pasta `TaskManager.Web` em qualquer navegador:

```bash
# Se estiver no Prompt do Windows ou PowerShell:
start TaskManager.Web/index.html
```

## 📝 Funcionalidades
- **Criar Tarefa**: Adicionar novos itens a lista.
- **Listar Tarefas**: Ao abrir o sistema, as tarefas são consultadas diretamente do banco de dados na ordem de criação (decrescente).
- **Concluir Tarefas**: Marcar/Desmarcar a tarefa atualizando automaticamente o status delas na persistência do sistema (Operações PUT RESTful).
- **Apagar Tarefas**: Remover tarefas permanentemente (Operações DELETE RESTful) e manter a tela limpa.

> *Projeto desenvolvido para fins de estudos e portfólio.*
