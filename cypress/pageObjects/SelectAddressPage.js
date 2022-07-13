import BasePage from '../pageObjects/basePage'

class SelectAddressPage extends BasePage {
  static get url () {
    return '/#/address/select';
  }

  static get adressList(){
    return cy.get('.mat-table');
  }

  static get continueButton(){
    return cy.get('.btn-next');
  }
}

export default SelectAddressPage;
