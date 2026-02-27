# Como Salvar no GitHub e Fazer Deploy no Google Cloud Run

Como esse é um projeto Fullstack para apresentar como portfólio, acabei de **preparar os arquivos do seu projeto** para facilitar a vida nos dois cenários! 

Fiz duas alterações fundamentais na sua estrutura de agora:
1. **Adicionei as rotas de Front-end direto na sua API C#**: Graças ao `app.UseStaticFiles()` e `app.UseDefaultFiles()`, sua API do .NET agora irá conseguir servir o HTML, CSS e JS, precisando apenas de uma máquina ao invés de duas!
2. Modifiquei os caminhos em Javascript (`app.js`) para suportarem isso, e também criei um `.gitignore` e um `Dockerfile` mágico no projeto!

Como proceder agora no terminal:

## Etapa 1: Subindo no GitHub

Abra o seu terminal na pasta do projeto (`TaskManager`) e execute os comandos em ordem:

1. **Iniciar o repositório:**
   ```bash
   git init
   ```
2. **Adicionar os arquivos:** (o arquivo `.gitignore` criado por mim impedirá as pastas bin/obj lixo de subirem)
   ```bash
   git add .
   ```
3. **Commit inicial:**
   ```bash
   git commit -m "First commit - Gerenciador de Tarefas Júnior"
   ```
4. **Vá no GitHub pelo site**, clique no botão para criar um Novo Repositório (sem Readme, sem nada).
5. **Vincule o repositório da nuvem à sua máquina** copiando e colando os comandos dados pelo GitHub. Geralmente são:
   ```bash
   git remote add origin https://github.com/SeuUsuario/TaskManager.git
   git branch -M main
   git push -u origin main
   ```

---

## Etapa 2: Deploy no Google Cloud Run 🚀

O Cloud Run da Google adora contêineres e é de graça (cota generosa) para projetos pessoais. O incrível aqui é que basta ter o **Google Cloud SDK** instalado e você não precisa entender as camadas do Docker se usar um atalho!

1. Certifique-se de estar logado na sua conta Google pelo terminal (caso tenha o glcoud/sdk instalado):
   ```bash
   gcloud auth login
   ```
2. Escolha/Crie um ID de Projeto no Google Cloud (aqui estou usando exemplo `meu-projeto-portifolio`):
   ```bash
   gcloud config set project meu-projeto-portifolio
   ```
3. **Mágica do Cloud Run**: dentro da pasta do projeto (`TaskManager`) onde está o meu arquivo especial `Dockerfile`, execute apenas:
   ```bash
   gcloud run deploy taskmanager-api --source . --region us-central1 --allow-unauthenticated
   ```

*Pressione "Y" se ele perguntar para baixar APIs ou empacotar a aplicação.*

> [!CAUTION] 
> **Banco de Dados:** O SQLite local roda em arquivo, o que significa que se aplicarmos isso perfeitamente na nuvem as suas tarefas não persistirão por semanas caso o serviço do Cloud durma "Container Reiniciado". Para portfólio júnior **mostrar o sistema funcionando costuma ser suficiente**, mas em ambientes enterprise esse `.db` estaria no SQL Server do Azure / Google SQL.

Ao final do comando do Cloud Run, ele vai lhe devolver **um Link bonitão com "https"**. E pronto! Seu site estará público na nuvem para mandar em entrevistas!
