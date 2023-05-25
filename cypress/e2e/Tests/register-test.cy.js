/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

describe("Register Page Positive and Negative Scenarios", () => {
  const randomFirstName = faker.person.firstName();
  const randomLastName = faker.person.lastName();
  const randomPhoneNumber = faker.phone.number("+48 91 ### ## ##");
  const randomCountry = faker.location.country();
  const randomPassword = faker.internet.password();

  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app");
  });

  it("Register by typing in all information positive test", () => {
    cy.register(
      randomFirstName,
      randomLastName,
      randomPhoneNumber,
      randomCountry,
      randomPassword
    );
    cy.get("#message")
      .should("be.visible")
      .contains(`The account has been successfully created!`);
  });

  it("Register by typing only the required information positive test", () => {
    cy.get("#forms").click();
    cy.get('a[href="register.html"]').click();
    cy.get('input[type="email"]').type(
      faker.internet.email({
        firstName: randomFirstName,
        lastName: randomLastName,
      })
    );
    cy.get('input[type="password"]').type(randomPassword);
    cy.get(".form-check-input").click();
    cy.get("#registerBtn").click();
    cy.get("#message")
      .should("be.visible")
      .contains(`The account has been successfully created!`);
  });

  it("Try to register w/o filling required information negative test", () => {
    cy.get("#forms").click();
    cy.get('a[href="register.html"]').click();
    cy.get("#firstName").type(randomFirstName);
    cy.get("#lastName").type(randomLastName);
    cy.get("#phone").type(randomPhoneNumber);
    cy.get("select").select(randomCountry);
    cy.get("#registerBtn").click();
    cy.get("#message")
      .should("be.visible")
      .contains(`Email Address is required`)
      .contains("Password is required")
      .contains(
        "Generic Error - You have to agree with terms before registering"
      );
  });

  it("Try to register w/o filling Email negative test", () => {
    cy.get("#forms").click();
    cy.get('a[href="register.html"]').click();
    cy.get("#firstName").type(randomFirstName);
    cy.get("#lastName").type(randomLastName);
    cy.get("#phone").type(randomPhoneNumber);
    cy.get("select").select(randomCountry);
    cy.get('input[type="password"]').type(randomPassword);
    cy.get(".form-check-input").click();
    cy.get("#registerBtn").click();
    cy.get("#message")
      .should("be.visible")
      .contains(`Email Address is required`);
  });

  it("Try to register w/o filling Password negative test", () => {
    cy.get("#forms").click();
    cy.get('a[href="register.html"]').click();
    cy.get("#firstName").type(randomFirstName);
    cy.get("#lastName").type(randomLastName);
    cy.get("#phone").type(randomPhoneNumber);
    cy.get("select").select(randomCountry);
    cy.get('input[type="email"]').type(
      faker.internet.email({
        firstName: randomFirstName,
        lastName: randomLastName,
      })
    );
    cy.get(".form-check-input").click();
    cy.get("#registerBtn").click();
    cy.get("#message").should("be.visible").contains("Password is required");
  });

  it("Try to Register by not agreeing with the terms negative test", () => {
    cy.get("#forms").click();
    cy.get('a[href="register.html"]').click();
    cy.get("#firstName").type(randomFirstName);
    cy.get("#lastName").type(randomLastName);
    cy.get("#phone").type(randomPhoneNumber);
    cy.get("select").select(randomCountry);
    cy.get('input[type="email"]').type(
      faker.internet.email({
        firstName: randomFirstName,
        lastName: randomLastName,
      })
    );
    cy.get('input[type="password"]').type(randomPassword);
    cy.get("#registerBtn").click();
    cy.get("#message")
      .should("be.visible")
      .contains(
        `Generic Error - YOu have to agree with terms before registering`
      );
  });
});
