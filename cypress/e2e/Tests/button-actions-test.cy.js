/// <reference types="cypress" />

describe("Button Actions Page Scenarios", () => {
  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app");
    cy.get('a[href="#actionsSubmenu"]').click();
  });

  it("Double Click on the Double Click sub-page positive test", () => {
    cy.get("#double-click").click();
    cy.get("button").contains("Double click me").dblclick();
    cy.get("#double-click-result")
      .should("be.visible")
      .contains(`Congrats, you double clicked!`);
  });

  it("Try to just Single Click on the Double Click sub-page negative test", () => {
    cy.get("#double-click").click();
    cy.get("button").contains("Double click me").click();
    cy.get("#double-click-result").should("not.be.visible");
  });

  it("Scrolling sub-page positive test", () => {
    cy.get("#scrolling").click();
    cy.get("#the-end").scrollIntoView().should("be.visible");
  });

  it("Hover the 1st example on the Mouse Hover sub-page positive test", () => {
    cy.get("#mouse-hover").click();
    cy.get("#demo").click();
    cy.get("#demo").should("be.visible").contains(`HOVERED`);
        //not the correct way to verify this scenario because I forced the element to show by clicking, couldnt find a way to hover
  });

  it("Hover the 2nd example on the Mouse Hover sub-page positive test", () => {
    cy.get("#mouse-hover").click();
    cy.get(".hide").invoke("show").click();
    cy.get(".hide").click({ force: true });
    cy.get(".hide")
      .should("be.visible")
      .contains(`I am shown when someone hovers over the text above.`);
    //not the correct way to verify this scenario because I forced the element to show
  });

  it("Hover the 2nd example on the Mouse Hover sub-page positive test", () => {
    cy.get("#mouse-hover").click();
    cy.get(".hide").invoke("show").click();
    cy.get(".hide").click({ force: true });
    cy.get(".hide")
      .should("be.visible")
      .contains(`I am shown when someone hovers over the text above.`);
    //not the correct way to verify this scenario because I forced the element to show
  });

});
