describe("Test Case 9", () => {
  it("Search Product", () => {
    cy.visit("http://automationexercise.com/");
    cy.title().should("eq", "Automation Exercise");
    cy.get(`a[href="/products"]`).click();
    cy.url().should("eq", "https://automationexercise.com/products");
    cy.get(".title.text-center")
      .should("be.visible")
      .should("contain", "All Products");
    cy.get("#search_product").type("Fancy Green Top");
    cy.get("#submit_search").click();
    cy.get(".productinfo.text-center p").should("contain", "Fancy Green Top");
  });
});
