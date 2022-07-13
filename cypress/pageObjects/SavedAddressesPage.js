import BasePage from '../pageObjects/basePage'

class SavedAddressesPage extends BasePage {
  static get url () {
    return '/#/address/saved';
  }

  static get addNewAddressBtn(){
    return cy.get('[aria-label="Add a new address"]');
  }

  static get addressesList(){
      return cy.get(".mat-table");
  }
}

export default SavedAddressesPage;
