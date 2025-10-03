describe("Test Case 5", () => {
  it("Register User with existing email", () => {
    cy.visit("http://automationexercise.com/");
    cy.title().should("eq", "Automation Exercise");
    cy.get(`a[href="/login"]`).click();
    cy.get(".signup-form").contains("New User Signup!").should("be.visible");
    cy.get("[data-qa='signup-name']").type("Sajid");
    cy.get("[data-qa='signup-email']").type("sajidbashirsqae@gmail.com");
    cy.get("[data-qa='signup-button']").click();
    cy.get(".signup-form p")
      .should("be.visible")
      .should("contain", "Email Address already exist!");
  });
});
