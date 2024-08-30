import chartPage from 'library/pages/saucedemo/chart.page';
import { iItem } from 'library/pages/saucedemo/interfaces';
import inventoryPage from 'library/pages/saucedemo/inventory.page';
import loginPage from 'library/pages/saucedemo/login.page';

const chart: Partial<iItem>[] = [];

describe('add item to chart and check about page', () => {
  it('add 1 item to cart and verify that item is added to cart', () => {
    cy.visit('/');
    loginPage.login('standard_user');
    cy.url().should('include', '/inventory.html');
    inventoryPage.addItemToCart('Sauce Labs Backpack').then((price) => {
      const item: iItem = { name: 'Sauce Labs Backpack', price, currency: '$' };
      chart.push(item);

      inventoryPage.chartBadge().should('have.text', '1');
      inventoryPage.chartLink().click();
      chartPage.validateItemInChart(item);
      chartPage.removeButton(item.name).should('exist');
    });
  });
  it('click on hamburger button (top left), navigate to "About" and verify if it successfully navigated or not', () => {
    cy.visit('/');
    loginPage.login('standard_user');
    cy.url().should('include', '/inventory.html');

    cy.intercept({ // intercepting the request to the about page
      method: 'GET',
      url: 'https://visitor.reactful.com/config/**',
    }).as('aboutPageLoad');

    // Click on the hamburger button and about menu
    inventoryPage.hamburgerButton().click();
    inventoryPage.sideMenu('About').click();

    // validate if the about page is loaded successfully
    cy.wait('@aboutPageLoad').its('response.statusCode').should('eq', 200);
  });
});
