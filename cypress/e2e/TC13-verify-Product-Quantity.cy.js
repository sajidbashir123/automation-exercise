describe("Test Case 13", () => {
  it("Verify Product quantity in Cart", () => {
    cy.visit("http://automationexercise.com/");
    cy.title().should("eq", "Automation Exercise");
    cy.get(`a[href="/products"]`).click();
    cy.url().should("eq", "https://automationexercise.com/products");
    cy.get(".title.text-center")
      .should("be.visible")
      .should("contain", "All Products");
    cy.get("a[href='/product_details/1']").click();
    cy.url().should("eq", "https://automationexercise.com/product_details/1");
    cy.get("#quantity").clear().type("4");
    cy.get(".btn.btn-default.cart").click();
    cy.get(".modal-content a").click();
    cy.get(".disabled").should("have.text", "4");
  });
});
