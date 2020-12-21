// https://docs.cypress.io/api/introduction/api.html

describe("Not Found Page Test", () => {
  it("Visits the not found page", () => {
    cy.visit("/batatinha");
    cy.contains("h1", "Nothing to see here");
  });
});
