describe("Test Case 11", () => {
  it("Verify Subscription in Cart page", () => {
    cy.visit("http://automationexercise.com/");
    cy.title().should("eq", "Automation Exercise");
    cy.get('a[href="/view_cart"]:visible').click();
    cy.get(".single-widget").scrollIntoView();
    cy.get(".single-widget")
      .should("be.visible")
      .and("contain", "Subscription");
    cy.get("#susbscribe_email").type("test@gmail.com");
    cy.get("#subscribe").click();
    cy.on("window:alert", (alertText) => {
      expect(alertText)
        .to.equal("You have been successfully subscribed!")
        .should("be.visible");
    });
  });
});
