describe("Test Case 12", () => {
  it("Add Products in Cart", () => {
    cy.visit("http://automationexercise.com/");
    cy.title().should("eq", "Automation Exercise");
    cy.get(`a[href="/products"]`).click();
    cy.url().should("eq", "https://automationexercise.com/products");
    cy.get(".title.text-center")
      .should("be.visible")
      .should("contain", "All Products");
    //
    cy.get(".productinfo.text-center").eq(0).find(".add-to-cart").click();
    cy.get(".btn.btn-success.close-modal.btn-block")
      .should("be.visible")
      .click();
    cy.get(".productinfo.text-center").eq(1).find(".add-to-cart").click();
    cy.get(".modal-content a").click();
    //i want to apply soft assertion
    cy.get("#cart_info_table tbody tr").should("have.length", 2);
    cy.get(".cart_price").eq(0).should("contain.text", "Rs. 500");
    cy.get(".cart_price").eq(1).should("contain.text", "Rs. 400");
    cy.get(".cart_quantity button").eq(0).should("contain.text", "1");
    cy.get(".cart_quantity button").eq(1).should("contain.text", "1");
    cy.get(".cart_total_price").eq(0).should("contain.text", "Rs. 500");
    cy.get(".cart_total_price").eq(1).should("contain.text", "Rs. 400");
  });
});
