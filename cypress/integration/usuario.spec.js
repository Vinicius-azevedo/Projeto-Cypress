/// <reference types="cypress" />


describe('Usuario', () => {
    it('deve realizar o cadastro', () => {
        cy.visit('https://front.serverest.dev/cadastrarusuarios');
        cy.get('[data-testid=nome]').type('NovoUsuario');
        cy.get('[data-testid=email]').type('novousuario@gmail.com');
        cy.get('[data-testid=password]').type('123456');
        
    });
    it('deve realizar o login', () => {
        cy.visit('https://front.serverest.dev/cadastrarusuarios');
        cy.get('[data-testid=nome]').type('NovoUsuario');
        cy.get('[data-testid=email]').type('novousuario@gmail.com');
        cy.get('[data-testid=password]').type('123456');

        cy.get('[data-testid=entrar]').click();

        cy.visit('https://front.serverest.dev/login');
        cy.get('[data-testid=email]').type('novousuario@gmail.com');
        cy.get('[data-testid=senha]').type('123456');

        cy.get('[data-testid=entrar]').click();
    });
});