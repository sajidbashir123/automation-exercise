describe("Test Case 8", () => {
  it("Verify All Products and product detail page", () => {
    cy.visit("http://automationexercise.com/");
    cy.title().should("eq", "Automation Exercise");
    cy.get(`a[href="/products"]`).click();
    cy.url().should("eq", "https://automationexercise.com/products");
    cy.get(".title.text-center")
      .should("be.visible")
      .should("contain", "All Products");
    cy.get("a[href='/product_details/1']").click();
    cy.url().should("eq", "https://automationexercise.com/product_details/1");
    cy.get(".product-information")
      .should("be.visible")
      .should("contain", "Blue Top");
    cy.get(".product-information p")
      .should("be.visible")
      .should(
        "contain",
        "Category: Women > Tops",
        "Availability:",
        "Condition:",
        "Brand:"
      );
  });
});
