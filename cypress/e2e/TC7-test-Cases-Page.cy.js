describe("Test Case 7", () => {
  it("Verify Test Cases Page", () => {
    cy.visit("http://automationexercise.com/");
    cy.title().should("eq", "Automation Exercise");
    cy.get(`.nav.navbar-nav a[href="/test_cases"]`).click();
    cy.get(".title.text-center b")
      .should("be.visible")
      .should("contain", "Test Cases");
  });
});
