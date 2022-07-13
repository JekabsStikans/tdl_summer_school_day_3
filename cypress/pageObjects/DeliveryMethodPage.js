import BasePage from '../pageObjects/basePage'

class DeliveryMethodPage extends BasePage {
  static get url () {
    return '/#/delivery-method';
  }

  static get deliverySpeedsList(){
    return cy.get('.mat-table');
  }

  static get continueButton(){
    return cy.get('.nextButton');
  }
}

export default DeliveryMethodPage;
