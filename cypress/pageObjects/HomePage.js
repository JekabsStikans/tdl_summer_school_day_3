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

  static get itemCardList(){
    return cy.get(".mat-grid-list");
  }

  static findCardByItemName(text){
    return this.itemCardList.find(".item-name").contains(text).parent().parent().parent();
  }

  static get popUpDialogContainer(){
    return cy.get('.ng-trigger-dialogContainer');
  }

  static get closePopUpDialogBtn(){
    return this.popUpDialogContainer.find('.close-dialog');
  }

  static get popUpDialogReviewDropdownBtn(){
    return this.popUpDialogContainer.find('[aria-label="Expand for Reviews"]');
  }

  static get popUpDialogReviewDropdownList(){
    return this.popUpDialogReviewDropdownBtn.find('.mat-expansion-panel-content');
  }

  static get popUpDialogReviewInput(){
    return cy.get('[aria-label="Text field to review a product"]');
  }

  static get submitButton(){
    return cy.get('#submitButton');
  }

  static get itemsPerPageDropdown(){
    return cy.get('[aria-label="Items per page:"]');
  }

  static addItemToBasketBtn(text){
    return this.findCardByItemName(text).find('[aria-label="Add to Basket"]');
  }

  static get navbarBasketBtn(){
    return cy.get('[aria-label="Show the shopping cart"]');
  }
  
  static get ordersAndPaymentBtn(){
    return cy.get('.mat-menu-content > [aria-label="Show Orders and Payment Menu"]');
  }
  
  static get savedAddressesBtn(){
    return cy.get('.mat-menu-content > [aria-label="Go to saved address page"]');
  }
}

export default HomePage;
