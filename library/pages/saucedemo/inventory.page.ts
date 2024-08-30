import { BasePage } from './base.Page';

class InventoryPage extends BasePage {
  addToCartButton = (itemName: string, cardLocator: ()=> Cypress.Chainable<any>) => {
    const locator = itemName.toLowerCase().replaceAll(' ', '-');
    return cardLocator().contains(`[data-test=add-to-cart-${locator}]`, 'Add to cart');
  };

  removeFromChartButton = (itemName: string, cardLocator: ()=> Cypress.Chainable<any>) => {
    const locator = itemName.toLowerCase().replaceAll(' ', '-');
    return cardLocator().contains(`[data-test=remove-${locator}]`, 'Remove');
  };

  chartLink = () => cy.get('[data-test=shopping-cart-link]');

  chartBadge = () => cy.get('[data-test=shopping-cart-badge]');

  addItemToCart(itemName: string) {
    const item = () => cy.contains('.inventory_item_description', itemName);

    this.addToCartButton(itemName, item).click();
    this.removeFromChartButton(itemName, item).should('exist');

    return item().find('.inventory_item_price').invoke('text').then((price) => {
      return parseFloat(price.replace('$', '')); // remove dollar sign
    });
  }
}

export default new InventoryPage();
