// https://docs.cypress.io/api/introduction/api.html

describe("Home Page Test", () => {
  it("Visits the home page, with no results", () => {
    cy.visit("/");
    cy.contains("h1", "No results found");
  });
});
