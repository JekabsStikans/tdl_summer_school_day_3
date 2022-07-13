import BasePage from '../pageObjects/basePage'

class RegistrationPage extends BasePage {
  static get url () {
    return '/#/register';
  }

  static get emailControlField(){
    return cy.get('#emailControl');
  }

  static get passwordControlField(){
    return cy.get('#passwordControl');
  }

  static get repeatPasswordControlField(){
    return cy.get('#repeatPasswordControl');
  }

  static get securityQuestionDropdownBtn(){
    return cy.get('[aria-label="Selection list for the security question"]');
  }

  static get securityQuestionDropdownList(){
    return cy.get('[aria-label="Selection list for the security question"]');
  }

  static get securityAnswerControlField(){
    return cy.get('#securityAnswerControl');
  }

  static get registerButton(){
    return cy.get('#registerButton');
  }
}

export default RegistrationPage;
