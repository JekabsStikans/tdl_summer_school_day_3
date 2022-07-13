import BasePage from '../pageObjects/basePage'

class PaymentOptionsPage extends BasePage {
  static get url () {
    return '/#/payment/shop';
  }

  static get cardsList(){
    return cy.get('.mat-table');
  }

  static selectedCardButton(text){
      return this.cardsList.contains(text).parent().find(".mat-radio-button");
  }

  static get continueButton(){
    return cy.get('.nextButton');
  }
}

export default PaymentOptionsPage;
