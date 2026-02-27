# Estágio 1: Build da aplicação C#
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

# Copia os arquivos de projeto e restaura dependências
COPY ["TaskManager.Api/TaskManager.Api.csproj", "TaskManager.Api/"]
RUN dotnet restore "TaskManager.Api/TaskManager.Api.csproj"

# Copia todo o resto do código da API
COPY ["TaskManager.Api/", "TaskManager.Api/"]

# Copia o frontend para dentro da pasta wwwroot da API (assim a API serve o Front)
COPY ["TaskManager.Web/", "TaskManager.Api/wwwroot/"]

# Define o diretório de trabalho para a API e publica
WORKDIR "/src/TaskManager.Api"
RUN dotnet publish "TaskManager.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Estágio 2: Imagem final enxuta
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

# Para o Cloud Run, usamos a porta 8080 injetada pela variável PORT
ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080

ENTRYPOINT ["dotnet", "TaskManager.Api.dll"]
