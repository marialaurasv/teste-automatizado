# Teste Narwal Sistemas

## Autor
Maria Laura dos Santos Vieira

## Sobre o Projeto
O Framework escolhido foi o **Cypress**, visto que já possuo conhecimento sobre ele e acredito ser o mais prático para testes de FrontEnd e API.

---

## Testes FrontEnd

### Cenário 1
**Feature:** Solicitação de demonstração

**Scenario:** Envio de solicitação de demonstração com sucesso

- **Dado** que o usuário acessa a página de solicitação de demonstração
- **Quando** ele preenche corretamente todos os campos obrigatórios do formulário
- **E** clica no botão de envio
- **Então** a página de confirmação de envio deve ser apresentada

### Cenário 2
**Feature:** Consulta de matéria no Blog

**Scenario:** Pesquisa e acesso à matéria "Por Que o Rastreamento de Contêiner É Essencial para a Logística Internacional"

- **Dado** que o usuário está na página de pesquisa do Blog
- **Quando** ele insere o título "Por Que o Rastreamento de Contêiner É Essencial para a Logística Internacional" na barra de busca
- **E** seleciona a matéria correspondente nos resultados exibidos
- **Então** o sistema deve redirecioná-lo para a página da matéria selecionada

---

## Testes Automatizados de API no GitHub

### Sobre o projeto
Este repositório contém os testes automatizados para a **API do GitHub**, utilizando o framework **Cypress** para validar a criação, consulta e exclusão de repositório e issue.

### Requisitos
- Node.js instalado
- Conta no GitHub

### Download e Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/marialaurasv/teste-automatizado.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd teste-automatizado
   ```
3. Instale as dependências na pasta do projeto com o comando abaixo:
   ```bash
   npm install cypress
   ```

---

## Gerando um Token de Acesso no GitHub
Para autenticar a API do GitHub, é necessário gerar um **Personal Access Token**. Siga os passos abaixo:

1. Acesse [GitHub - Configurações de Token](https://github.com/settings/tokens)
2. Clique em **Generate new token**
3. Defina um nome para o token e selecione a duração desejada
4. Marque as permissões necessárias, como:
   - `repo` (para acessar repositórios públicos e privados)
   - `admin:repo_hook` (para gerenciar webhooks, se necessário)
   - `issues` (para manipular issues)
5. Clique em **Generate token** e copie o valor gerado
6. Use esse token na autenticação da API do GitHub:
   ```bash
   Altere a variável 'SEU_TOKEN_AQUI' no arquivo testeBackEnd.cy.js
   ```
---

### Execução dos Testes
Para abrir a interface do Cypress, utilize o seguinte comando:
```bash
npx cypress open
```
Em seguida, selecione o arquivo `testeBackEnd.cy.js` na pasta `e2e`.

Para rodar os testes em modo Headless, utilize o seguinte comando:
```bash
npx cypress run
```
