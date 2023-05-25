/// <reference types="cypress" />

describe("File Upload Page Positive and Negative Scenarios", () => {
  
  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app");
  });

  it("Upload File positive test", () => {
    const fileName = "New-England-Patriots-Fantasy-Football-Preview-1.png";
    
    cy.get('a[href="file-upload.html"]').click();
    cy.get("#file_upload").selectFile(`cypress/fixtures/${fileName}`);
    cy.get("button").contains("Submit").click();
    cy.get("#file_upload_response")
      .should("be.visible")
      .contains(`You have successfully uploaded "${fileName}"`);
  });
});
