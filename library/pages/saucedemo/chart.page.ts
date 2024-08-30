import { iItem } from './interfaces';

class ChartPage {
  itemCard = (itemName: string) => cy.contains('.cart_item', itemName);

  removeButton = (itemName: string) => {
    const locator = itemName.toLowerCase().replaceAll(' ', '-');
    return this.itemCard(itemName).find(`[data-test=remove-${locator}]`);
  };

  validateItemInChart(item: iItem) {
    const currency = item.currency || '$';
    this.itemCard(item.name).should('exist')
      .find('.inventory_item_price')
      .should('have.text', `${currency}${item.price}`);
  }
}

export default new ChartPage();
