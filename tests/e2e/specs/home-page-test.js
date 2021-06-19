// https://docs.cypress.io/api/table-of-contents

describe('Home Page Visit Test', () => {
  it('Visits the home page, verify with get results', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.get('#GridImages').should('be.visible');
    cy.get('#GridImages')
      .find('figure')
      .should($item => {
        if ($item.length === 0) {
          throw new Error('Did not find 1 element');
        }
      });
  });
});

describe('Home Page Search Test', () => {
  it('Visits the home page, search and verify with get results', () => {
    cy.visit('/');
    cy.get('.search')
      .find('input')
      .type('Batman');
    cy.get('.search')
      .find('button')
      .click();
    cy.wait(1000);
    cy.get('#GridImages').should('be.visible');
    cy.get('#GridImages')
      .find('figure')
      .should($item => {
        if ($item.length === 0) {
          throw new Error('Did not find 1 element');
        }
      });
  });
});
