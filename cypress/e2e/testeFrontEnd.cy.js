import { locTesteNarwal } from "../pageLoc/testeNarwalLoc";

describe('Teste Front End no Site da Narwal', () => {
  
    beforeEach(() => {
      cy.visit('https://www.narwalsistemas.com.br/'); 
    });
  
    it('Solicita demonstração', () => {
      cy.get(locTesteNarwal.btnSolicitarDemonstracao).contains("SOLICITE UMA DEMONSTRAÇÃO").click();
      cy.get(locTesteNarwal.campoName).type("Teste Automatizado Narwal").wait(500).should('have.value', 'Teste Automatizado Narwal');
      cy.get(locTesteNarwal.campoEmail).type("testeAutomatizado@narwal.com").wait(500).should('have.value', 'testeAutomatizado@narwal.com');
      cy.get(locTesteNarwal.campoCargo).type("Cargo Teste Automatizado").wait(500).should('have.value', 'Cargo Teste Automatizado');
      cy.get(locTesteNarwal.campoTelefone).type("99999999").wait(500).should('have.value', '99999999');
      cy.get(locTesteNarwal.campoEmpresa).type("Empresa Narwal Teste Automatizado").wait(500).should('have.value', 'Empresa Narwal Teste Automatizado');
      cy.get(locTesteNarwal.comboSegmento).select('Importação').contains("Importação");
    //LINHAS COMENTADAS PARA NÃO FICAR ENVIANDO O FORMULÁRIO SEMPRE
    //cy.get(locTesteNarwal.btnEnviar).contains('Enviar').click().wait(500);
    //cy.url('https://www.narwalsistemas.com.br/obrigado-inscricao/').should('eq', 'https://www.narwalsistemas.com.br/obrigado-inscricao/'); 

    });

    it('Consulta matéria "Por Que o Rastreamento de Contêiner É Essencial para a Logística Internacional" no Blog', () => {
      cy.get(locTesteNarwal.paginaBlog).contains('Blog').click().wait(500);
      cy.get(locTesteNarwal.campoPesquisa).type('Por Que O Rastreamento De Contêiner É Essencial Para A Logística Internacional{enter}').wait(500);
      cy.get(locTesteNarwal.selecionaMateria).contains('Por Que o Rastreamento de Contêiner É Essencial para a Logística Internacional').click().wait(500);
      cy.url('https://www.narwalsistemas.com.br/blog/rastreamento-de-conteineres/').should('eq', 'https://www.narwalsistemas.com.br/blog/rastreamento-de-conteineres/');
    });
  
  
  });
  