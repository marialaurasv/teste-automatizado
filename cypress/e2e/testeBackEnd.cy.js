describe('Testes BackEnd no GitHub', () => {
    const token = 'SEU_TOKEN_AQUI'; //INSIRA SEU TOKEN DE ACESSO AQUI
    const usuario = 'SEU_USUARIO_AQUI'; //INSIRA SEU USUARIO DO GITHUB AQUI  
    const repoName = 'teste-automatizado-narwal';
    let issueNumber;

    it('Criar um repositório', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.github.com/user/repos',
            headers: { 
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: {
                name: repoName,
                description: "Repositório criado via API no Cypress para Teste automatizado Narwal",
                private: false
            }
        }).then((res) => {
            expect(res.status).to.eq(201);
        });
    });

    it('Consultar o repositório criado', () => {
        cy.request({
            method: 'GET',
            url: `https://api.github.com/repos/${usuario}/${repoName}`,
            headers: { 
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            expect(res.status).to.eq(200);
        });
    });

    it('Criar uma issue no repositório', () => {
        cy.request({
            method: 'POST',
            url: `https://api.github.com/repos/${usuario}/${repoName}/issues`,
            headers: { 
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: { title: 'Teste Issue Cypress' }
        }).then((res) => {
            expect(res.status).to.eq(201);
            issueNumber = res.body.number;
        });
    });

    it('Consultar a issue criada', () => {
        cy.request({
            method: 'GET',
            url: `https://api.github.com/repos/${usuario}/${repoName}/issues/${issueNumber || 1}`,
            headers: { 
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            expect(res.status).to.eq(200);
        });
    });

    it('Excluir o repositório', () => {
        cy.request({
            method: 'DELETE',
            url: `https://api.github.com/repos/${usuario}/${repoName}`,
            headers: { Authorization: `Bearer ${token}` }
        }).then((res) => {
            expect(res.status).to.eq(204);
        });
    });

    it('Confirmar que o repositório foi excluído', () => {
        cy.request({
            method: 'GET',
            url: `https://api.github.com/repos/${usuario}/${repoName}`,
            headers: { Authorization: `Bearer ${token}` },
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).to.eq(404);
        });
    });
});
