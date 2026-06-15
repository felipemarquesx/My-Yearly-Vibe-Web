# 🎵 MusicEra (Projeto AV2 - Códigos de Alta Performance)

Este repositório contém o **MusicEra**, um projeto (MVP/POC) desenvolvido para a avaliação AV2 da disciplina de Códigos de Alta Performance.

O objetivo do projeto é apresentar um catálogo musical interativo, com foco na experiência do usuário e na entrega de uma aplicação ágil e de fácil execução. A plataforma permite a navegação por décadas e gêneros musicais, fornecendo curiosidades sobre as faixas e integração direta com o YouTube para reprodução.

## 🚀 Requisitos e Arquitetura

O desenvolvimento do projeto seguiu rigorosamente os requisitos estabelecidos para a avaliação:

- **Frontend com React e Vite:** Utilização do React para a criação de uma interface baseada em componentes, garantindo modularidade e performance.
- **Estilização com Bootstrap 5:** Adoção do Bootstrap 5 como framework CSS base, aliado a estilizações customizadas para definir a identidade visual e garantir a responsividade.
- **Arquitetura (MVC / 3 Camadas):** Implementação baseada em separação de responsabilidades. A aplicação conta com camadas lógicas de visualização (componentes React), controle e dados. Para assegurar a estabilidade durante a apresentação e eliminar a dependência de APIs externas, foram utilizados **dados mockados** (`musicData.ts`), atuando de forma equivalente à nossa camada de Model.
- **Infraestrutura com Docker:** O projeto foi totalmente conteinerizado utilizando Docker, garantindo um ambiente isolado, reprodutível e independente da máquina local.
- **Controle de Versão e Colaboração:** O código-fonte foi versionado no GitHub, com colaboração ativa da equipe e adoção de um padrão rigoroso de commits convencionais.

## 🛠️ Tecnologias Utilizadas
- React (TypeScript) + Vite
- Bootstrap 5
- Docker
- Git / GitHub

## 🐳 Como executar a aplicação via Docker

Siga as instruções abaixo para inicializar a aplicação via contêiner:

1. Certifique-se de que o Docker esteja instalado e em execução no seu ambiente.
2. Clone este repositório e acesse a pasta raiz do projeto via terminal.
3. Construa a imagem Docker com o comando:
   ```bash
   docker build -t ots-web .
   ```
4. Inicie o contêiner mapeando a porta 8080:
   ```bash
   docker run -d -p 8080:80 --name musicera-app ots-web
   ```
5. Acesse a aplicação no navegador através do endereço: `http://localhost:8080`

*(Para interromper e remover o contêiner posteriormente, utilize: `docker stop musicera-app && docker rm musicera-app`)*

## 💻 Como executar localmente (Ambiente de Desenvolvimento)

Para executar o projeto localmente via Node.js:

```bash
npm install
npm run dev
```

## 📝 Padrão de Commits
Pra não virar bagunça e seguir as boas práticas de colaboração que o professor pediu no GitHub, a gente tá usando o esquema de Commits Convencionais. Sempre que for enviar algo, usa essas tags antes da mensagem:

- `feat:` Quando criar uma funcionalidade nova
- `fix:` Quando resolver algum bug ou erro
- `refactor:` Pra quando melhorar o código sem mudar o que ele faz (tipo dar uma organizada)
- `style:` Quando mexer no visual ou formatação
- `docs:` Pra atualizar documentação (como esse README)
- `test:` Pra mexer na parte de testes
- `chore:` Pra tarefas gerais (atualizar pacotes, Docker, etc)
