import BasePage from '../pageObjects/basePage'

class BasketPage extends BasePage {
  static get url () {
    return '/#/basket';
  }

  static get checkoutButton(){
    return cy.get('#checkoutButton');
  }
}

export default BasketPage;
