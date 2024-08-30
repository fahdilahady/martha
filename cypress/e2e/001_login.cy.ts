import loginPage from 'library/pages/saucedemo/login.page';

describe('empty spec', () => {
  it('empty test', () => {
    cy.visit('/');
    loginPage.login(); // no username and password
    loginPage.validateErrorMessage('Epic sadface: Username is required');
  });
  it('login with locked user', () => {
    cy.visit('/');
    loginPage.login('locked_out_user',);
    loginPage.validateErrorMessage('Epic sadface: Sorry, this user has been locked out.');
  });
  it.skip('login with problem users', () => {
    cy.visit('/');
    loginPage.login('problem_user'); // the API return 401 however the user is logged in
  });
  it.skip('login with performance_glitch_user', () => {
    cy.visit('/');
    loginPage.login('performance_glitch_user'); // the API return 401 however the user is logged in
  });
  it.skip('login with error_user', () => { // this is example of failing test
    cy.visit('/');
    loginPage.login('error_user');
    loginPage.validateErrorMessage('Epic sadface: Something went wrong.');
  });
  it('login with standard_user', () => {
    cy.visit('/');
    loginPage.login('standard_user');
    cy.url().should('include', '/inventory.html');
  });
});
