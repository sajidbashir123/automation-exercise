describe("Test Case 6", () => {
  it("Contact Us Form", () => {
    cy.visit("http://automationexercise.com/");
    cy.title().should("eq", "Automation Exercise");
    cy.get(`a[href="/contact_us"]`).click();
    cy.get(".contact-form h2")
      .should("be.visible")
      .should("contain", "Get In Touch");
    cy.get("[data-qa='name']").type("Sajid");
    cy.get("[data-qa='email']").type("Test@gmail.com");
    cy.get("[data-qa='subject']").type("Test Subject");
    cy.get("[data-qa='message']").type("Test Message");

    const fileName = "sample.pdf";
    cy.get('input[type="file"]').attachFile(fileName);
    cy.get("[data-qa='submit-button']").click();
    cy.get(".status.alert.alert-success")
      .should("be.visible")
      .should(
        "contain",
        "Success! Your details have been submitted successfully."
      );
    cy.get(".btn.btn-success").click();
    cy.url().should("eq", "https://automationexercise.com/");
  });
});
