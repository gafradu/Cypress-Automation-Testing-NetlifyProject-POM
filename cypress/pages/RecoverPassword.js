class RecoverPassword {
  getEmailAddress() {
    return cy.get("#email");
  }

  getRecoverPasswordButton() {
    return cy.get("#recover-password");
  }
}
export default new RecoverPassword();
