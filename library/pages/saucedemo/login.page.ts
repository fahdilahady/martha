class LoginPage {
  login(username?: string, password: string = 'secret_sauce') {
    if (username) cy.get('#user-name').type(username);
    if (password) cy.get('#password').type(password);
    cy.get('#login-button').click();
  }

  validateErrorMessage(message: string) {
    cy.get('.error-message-container').should('have.text', message);
  }
}

export default new LoginPage();
