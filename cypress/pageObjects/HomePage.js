import BasePage from "../pageObjects/basePage";

class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get navbarAccountBtn(){
    return cy.get('#navbarAccount');
  }

  static get navbarLoginButton(){
    return cy.get('#navbarLoginButton');
  }
  
  static get userAccountBtn(){
    return cy.get('.mat-menu-content > [aria-label="Go to user profile"]');
  }

  static get searchQueryBtn(){
    return cy.get('#searchQuery');
  }

  static get searchQueryField(){
    return this.searchQueryBtn.find("#mat-input-0");
  }

  static findCardByItemName(text){
    return cy.get(".mat-grid-list").find(".item-name").contains(text).parent();
  }

  static get popUpDialogContainer(){
    return cy.get('#mat-dialog-0');
  }
}

export default HomePage;
