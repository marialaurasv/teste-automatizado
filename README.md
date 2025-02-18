Documentação \- Teste Narwal Sistemas  
Maria Laura dos Santos Vieira

O Framework escolhido foi o Cypress, visto que já possuo conhecimento sobre e acredito ser o mais prático para testes de FrondEnd e API.

**Testes FrontEnd**  
**Cenário 1**   
Feature: Solicitação de demonstração   
Scenario: Envio de solicitação de demonstração com sucesso   
Dado que o usuário acessa a página de solicitação de demonstração   
Quando ele preenche corretamente todos os campos obrigatórios do formulário   
E clica no botão de envio   
Então a página de confirmação de envio deve ser apresentada

**Cenário 2**  
Feature: Consulta de matéria no Blog   
Scenario: Pesquisa e acesso a matéria "Por Que o Rastreamento de Contêiner É Essencial para a Logística Internacional"   
Dado que o usuário está na página de pesquisa do Blog   
Quando ele insere o título "Por Que o Rastreamento de Contêiner É Essencial para a Logística Internacional" na barra de busca   
E seleciona a matéria correspondente nos resultados exibidos   
Então o sistema deve redirecioná-lo para a página da matéria selecionada

**Testes Automatizados de API no Github**  
**Sobre o projeto**  
	Este repositório contém os testes automatizados para a API do GitHub, utilizando o framework Cypress validar a criação, consulta e exclusão de repositório e issue.

**Requisitos**
- Node.js instalado  
- Cypress instalado  
- Conta no GitHub

**Download e Configuração**  
	**1 \-** Clone o repositório:   
		git clone https://github.com/marialaurasv/teste-automatizado.git  
	**2 \-** Acesse a pasta do projeto  
	**3 \-** Instale as dependências na pasta do projeto com o comando abaixo:  
		npm install cypress

**Execução dos Testes**  
	Para abrir a interface do Cypress, utilize o comando "npx cypress open” e selecione o arquivo testeBackEnd.cy.js na pasta e2e.
