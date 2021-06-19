// https://docs.cypress.io/api/table-of-contents

describe('Not Found Page Test', () => {
  it('Visits the not found page', () => {
    cy.visit('/batatinha');
    cy.contains('h1', 'Nothing to see here');
  });
});
