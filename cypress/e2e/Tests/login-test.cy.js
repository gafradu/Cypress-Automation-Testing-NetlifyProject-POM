/// <reference types="cypress" />

describe("Login Page Positive and Negative Scenarios", () => {
  const correctEmail = "admin@admin.com";
  const correctPassword = "admin123";
  const incorrectEmail = "rgafton@4mayo.com";
  const incorrectPassword = "owuehguegyqhig";

  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app");
  });

  it("Try to Login w/o credentials negative test", () => {
    cy.get("#forms").click();
    cy.get('a[href="login.html"]').click();
    cy.get("#submitLoginBtn").click();
    cy.get("#message")
      .should("be.visible")
      .contains(
        `Bad credentials! Please try again! Make sure that you've registered.`
      );
  });

  it("Try to Login with w/o Email negative test", () => {
    cy.get("#forms").click();
    cy.get('a[href="login.html"]').click();
    cy.get("#password").type(correctPassword);
    cy.get("#submitLoginBtn").click();
    cy.get("#message")
      .should("be.visible")
      .contains(
        `Bad credentials! Please try again! Make sure that you've registered.`
      );
  });

  it("Try to Login w/o Password negative test", () => {
    cy.get("#forms").click();
    cy.get('a[href="login.html"]').click();
    cy.get("#email").type(correctEmail);
    cy.get("#submitLoginBtn").click();
    cy.get("#message")
      .should("be.visible")
      .contains(
        `Bad credentials! Please try again! Make sure that you've registered.`
      );
  });

  it("Try to Login with incorrect email negative test", () => {
    cy.login(incorrectEmail, correctPassword);
    cy.get("#message")
      .should("be.visible")
      .contains(
        `Bad credentials! Please try again! Make sure that you've registered.`
      );
  });

  it("Try to Login with incorrect password negative test", () => {
    cy.login(correctEmail, incorrectPassword);
    cy.get("#message")
      .should("be.visible")
      .contains(
        `Bad credentials! Please try again! Make sure that you've registered.`
      );
  });

  it("Login with correct credentials positive test", () => {
    cy.login(correctEmail, correctPassword);
    cy.get("#message")
      .should("be.visible")
      .contains(`${correctEmail}, you have successfully logged in!`);
  });
});
