import BasePage from '../pageObjects/basePage'

class SavedPaymentMethodsPage extends BasePage {
  static get url () {
    return '/#/address/saved';
  }

  static get addNewCardBtn(){
    return cy.contains('Add new card');
  }

  static get paymentOptionsList(){
      return cy.get(".mat-table");
  }

  static get nameInput(){
    return cy.get('#mat-input-1');
  }

  static get cardNumberInput(){
    return cy.get('#mat-input-2');
  }

  static get expiryMonthInput(){
    return cy.get('#mat-input-3');
  }

  static get expiryYearInput(){
    return cy.get('#mat-input-4');
  }

  static get submitButton(){
    return cy.get('#submitButton');
  }
}

export default SavedPaymentMethodsPage;
