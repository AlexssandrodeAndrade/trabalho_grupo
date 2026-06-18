# Landing Page - Seleção Brasileira

## Desafio

Este repositório foi criado para o desafio em grupo proposto em aula.

O objetivo é desenvolver uma **landing page**, ou seja, uma página de apresentação, com o tema da **Seleção Brasileira**.

A equipe mais criativa será premiada.

## Objetivo do Projeto

Criar uma página web simples, organizada e visualmente atrativa, apresentando informações sobre a Seleção Brasileira.

## Tema

Seleção Brasileira de Futebol.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- Git
- GitHub

## Plano de Desenvolvimento

### Alexssandro
Responsável por:
- [X] Criar a estrutura inicial do projeto
- [X] Configurar Bootstrap
- [X] Desenvolver o banner principal
- [X] Organizar o README
- [X] Criar linha do tempo das Copas do Mundo
- [ ] Revisar e integrar o trabalho do grupo

### Carlos
Responsável por:
- [ ] Desenvolver o visual da página
- [ ] Aplicar as cores da Seleção Brasileira
- [ ] Ajustar a responsividade
- [ ] Melhorar os cards e seções da página

### Ian
Responsável por:
- [X] Implementação do servidor Node.js para processar as respostas do quiz
- [X] Criar um quiz sobre a Seleção Brasileira
- [X] Implementar funcionalidades em JavaScript
- [X] Exibir mensagens de acerto e erro
- [X] Testar as interações da página

### Alexandro Koch
Responsável por:
- [X] Desenvolver seção de jogadores históricos
- [X] Criar cards dos jogadores
- [X] Adicionar imagens dos jogadores
- [X] Inserir uma pequena descrição de cada jogador

## Estrutura prevista da Landing Page
- [X] Cabeçalho (Navbar)
- [X] Banner principal
- [X] História da Seleção Brasileira
- [X] Títulos conquistados
- [ ] Jogadores históricos
- [ ] Quiz interativo
- [X] Rodapé

## Fluxo de Trabalho com Git

Antes de começar:

```bash
git pull origin main
```

Após concluir uma tarefa:

```bash
git add .
git commit -m "Descrição da alteração"
git push origin main
```

## Commits sugeridos

Alexssandro:

```bash
git commit -m "Cria estrutura inicial da landing page"
```

Ian:

```bash
git commit -m "Adiciona estilos da landing page"
```

Carlos:

```bash
git commit -m "Implementa quiz interativo"
```

## Trabalho em Grupo

Um aluno do grupo criou o repositório no GitHub e os demais integrantes irão clonar o projeto para colaborar com o desenvolvimento.

## Como clonar o repositório

```bash
git clone https://github.com/AlexssandrodeAndrade/trabalho_grupo.git

*EXTRA: Tive que criar um arquivo JavaScript para rodar um servidor Node.js, 
para que o usuário não tenha acesso as respostas

* Separa as alterações feitas para não conflitar com as alterações do servidor
git stash

* Aplica as alterações locais após o pull com o servidor
git stash pop

* Procedimento padrão:
git stash
git pull
git stash pop

