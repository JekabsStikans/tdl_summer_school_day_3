import BasePage from '../pageObjects/basePage'

class CreateAddressPage extends BasePage {
  static get url () {
    return '/#/address/create';
  }

  static get countryInput(){
    return cy.get('#mat-input-1');
  }

  static get nameInput(){
    return cy.get('#mat-input-2');
  }

  static get mobileNumberInput(){
    return cy.get('#mat-input-3');
  }

  static get ZIPcodeInput(){
    return cy.get('#mat-input-4');
  }

  static get addressInput(){
    return cy.get('#address');
  }

  static get cityInput(){
    return cy.get('#mat-input-6');
  }

  static get stateInput(){
    return cy.get('#mat-input-7');
  }

  static get submitButton(){
    return cy.get('#submitButton');
  }
}

export default CreateAddressPage;
