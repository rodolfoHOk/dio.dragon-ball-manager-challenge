/// <reference types="cypress" />

// Important: do not change the test order
context('Testing shenlong invocation', () => {
  before(() => {
    cy.visit('http://localhost:3000/dragon-ball-manager');
  });

  it('Should filter my balls', () => {
    cy.get('[data-testid="filter"]')
      .select('Minhas esferas')
      .invoke('val')
      .should('eq', 'me');

    cy.get('[data-testid="card"]').should('have.length', 4);
  });

  it('Should filter not founded balls', () => {
    cy.get('[data-testid="filter"]')
      .select('Não tenho')
      .invoke('val')
      .should('eq', 'notme');

    cy.get('[data-testid="card"]').should('have.length', 3);
  });

  it('Should no filter balls if all is selected', () => {
    cy.get('[data-testid="filter"]')
      .select('Todas as esferas')
      .invoke('val')
      .should('eq', 'all');

    cy.get('[data-testid="card"]').should('have.length', 7);
  });

  it('Should not invoke if user does not have 7 dragon balls', () => {
    cy.get('[data-testid="card-shenlong"]').should('exist');
    cy.get('[data-testid="invoke-button"]').click();
    cy.get('[data-testid="modaltext"]').should(
      'contain.text',
      'Você não tem todas as esferas para invocar o shenlong'
    );
    cy.get('[data-testid="back"]').click();
  });

  it('Should invoke if user has 7 dragon balls', () => {
    cy.get('[data-testid="card-button-2"]').click();
    cy.get('[data-testid="validate-button-2"]').click();

    cy.get('[data-testid="card-button-3"]').click();
    cy.get('[data-testid="validate-button-3"]').click();

    cy.get('[data-testid="card-button-4"]').click();
    cy.get('[data-testid="validate-button-4"]').click();

    cy.get('[data-testid="invoke-button"]').click();

    cy.get('[data-testid="shenlong"]').should('exist');
  });
});
