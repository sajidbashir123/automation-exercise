describe("Test Case 4", () => {
  it("Logout User", () => {
    cy.visit("http://automationexercise.com/");
    cy.title().should("eq", "Automation Exercise");
    cy.get(`a[href="/login"]`).click();
    cy.get(".login-form")
      .contains("Login to your account")
      .should("be.visible");
    cy.get("[data-qa='login-email']").type("sajidbashirsqae@gmail.com");
    cy.get("[data-qa='login-password']").type("Test#123");
    cy.get("[data-qa='login-button']").click();
    cy.get("a b").should("have.text", "Sajid");
    cy.get(`a[href="/logout"]`).click();
    cy.url().should("eq", "https://automationexercise.com/login");
  });
});
