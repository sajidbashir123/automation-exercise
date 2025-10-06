describe("Test Case 3", () => {
  it("Login User with incorrect email and password", () => {
    cy.visit("http://automationexercise.com/");
    cy.title().should("eq", "Automation Exercise");
    cy.get(`a[href="/login"]`).click();
    cy.get(".login-form")
      .contains("Login to your account")
      .should("be.visible");
    cy.get("[data-qa='login-email']").type("Test@gmail.com");
    cy.get("[data-qa='login-password']").type("Test");
    cy.get("[data-qa='login-button']").click();
    cy.get(".login-form p")
      .should("be.visible")
      .should("contain", "Your email or password is incorrect!");
  });
});
