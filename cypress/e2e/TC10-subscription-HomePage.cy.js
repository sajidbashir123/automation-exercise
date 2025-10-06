describe("Test Case 10", () => {
  it("Verify Subscription in home page", () => {
    cy.visit("http://automationexercise.com/");
    cy.title().should("eq", "Automation Exercise");
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
