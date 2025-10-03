describe("Test Case 1", () => {
  it("Register User", () => {
    cy.visit("http://automationexercise.com/");
    cy.title().should("eq", "Automation Exercise");
    cy.get(`a[href="/login"]`).click();
    cy.get(".signup-form").contains("New User Signup!").should("be.visible");
    cy.get("[data-qa='signup-name']").type("Sajid");
    cy.get("[data-qa='signup-email']").type("sajid.bashir@kwanso.com");
    cy.get("[data-qa='signup-button']").click();
    cy.get("[data-qa='name']")
      .should("be.visible")
      .should("have.value", "Sajid");
    cy.get("[data-qa='email']")
      .should("be.visible")
      .should("have.value", "sajid.bashir@kwanso.com");
    cy.get("#id_gender1").click();
    cy.get("#password").type("Test#123");
    cy.get("#days").select("10");
    cy.get("#months").select("January");
    cy.get("#years").select("1996");
    cy.get("#newsletter").click();
    cy.get("#optin").click();
    cy.get("#first_name").type("Sajid");
    cy.get("#last_name").type("Bashir");
    cy.get("#company").type("Automation Exercise");
    cy.get("#address1").type("Johar Town, Lahore");
    cy.get("#address2").type("Lahore");
    cy.get("#country").select("United States");
    cy.get("#state").type("Punjab");
    cy.get("#city").type("Lahore");
    cy.get("#zipcode").type("5400");
    cy.get("#mobile_number").type("1234567890");
    cy.get("[data-qa='create-account']").click();
    cy.get("h2").should("be.visible").should("contain", "Account Created!");
    cy.get("[data-qa='continue-button']").click();
    cy.get("a b").should("have.text", "Sajid");
    cy.get(".fa.fa-trash-o").click();
    cy.get("b").should("contain", "Account Deleted!");
    cy.get("[data-qa='continue-button']").click();
  });
});
