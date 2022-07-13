import BasePage from '../pageObjects/basePage'

class OrderCompletionPage extends BasePage {
  static get url () {
    return '/#/order-completion';
  }

  static get completionCard(){
    return cy.get('.mat-card');
  }
}

export default OrderCompletionPage;
