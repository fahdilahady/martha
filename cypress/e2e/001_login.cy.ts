describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/')
  })
  it('login with locked user', () => {});
  it('login with problem users', () => {});
  it('login with performance_glitch_user', () => {});
  it('login with error_user', () => {});
  it('login with standard_user', () => {});
})