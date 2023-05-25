import { faker } from "@faker-js/faker";

Cypress.Commands.add("login", (email, password) => {
  cy.get("#forms").click();
  cy.get('a[href="login.html"]').click();
  cy.get("#email").type(email);
  cy.get("#password").type(password);
  cy.get("#submitLoginBtn").click();
});

Cypress.Commands.add(
  "register",
  (firstName, lastName, phoneNumber, country, password) => {
    cy.get("#forms").click();
    cy.get('a[href="register.html"]').click();
    cy.get("#firstName").type(firstName);
    cy.get("#lastName").type(lastName);
    cy.get("#phone").type(phoneNumber);
    cy.get("select").select(country);
    cy.get('input[type="email"]').type(
      faker.internet.email({
        firstName: firstName,
        lastName: lastName,
      })
    );
    cy.get('input[type="password"]').type(password);
    cy.get(".form-check-input").click();
    cy.get("#registerBtn").click();
  }
);

Cypress.Commands.add("recoverPassword", (email) => {
    cy.get("#forms").click();
    cy.get('a[href="recover-password.html"]').click();
    cy.get("#email").type(email);
    cy.get("button[id='recover-password']").click();
  });
  