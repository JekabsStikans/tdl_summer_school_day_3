import BasketPage from "../pageObjects/BasketPage";
import CreateAddressPage from "../pageObjects/CreateAddressPage";
import DeliveryMethodPage from "../pageObjects/DeliveryMethodPage";
import HomePage from "../pageObjects/HomePage";
import LoginPage from "../pageObjects/LoginPage";
import OrderCompletionPage from "../pageObjects/OrderCompletionPage";
import OrderSummaryPage from "../pageObjects/OrderSummaryPage";
import PaymentOptionsPage from "../pageObjects/PaymentOptionsPage";
import RegistrationPage from "../pageObjects/RegistrationPage";
import SavedAddressesPage from "../pageObjects/SavedAddressesPage";
import SavedPaymentMethodsPage from "../pageObjects/SavedPaymentMethodsPage";
import SelectAddressPage from "../pageObjects/SelectAddressPage";



describe("Juice-shop without auto login", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
    HomePage.meWantItButton.click();
  });

  it("Login", () => {
    // Click Account button
    HomePage.navbarAccountBtn.click();
    // Click Login button
    HomePage.navbarLoginButton.click();
    // Set email value to "demo"
    LoginPage.emailField.type("demo");
    // Set password value to "demo"
    LoginPage.passwordField.type("demo");
    // Click Log in
    LoginPage.loginButton.click();
    // Click Account button
    HomePage.navbarAccountBtn.click();
    // Validate that "demo" account name appears in the menu section
    HomePage.userAccountBtn.find(" > span").should("have.text", " demo ");
  });


  it("Registration", () => {
    // Click Account button
    HomePage.navbarAccountBtn.click();
    // Click Login button
    HomePage.navbarLoginButton.click();
    // Click "Not yet a customer?"
    LoginPage.newCustomerLink.click();

    // Find - how to generate random number in JS
    // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
    // Save that email address to some variable
    const fakeEmail = "email_" + Math.trunc(Math.random()*100000).toString() + "@ebox.com";
    const fakePassword = "NotPassword54321$";
    // Fill in email field with the generated email
    RegistrationPage.emailControlField.type(fakeEmail);
    // Fill in password field and repeat password field with same password
    RegistrationPage.passwordControlField.type(fakePassword);
    RegistrationPage.repeatPasswordControlField.type(fakePassword);
    // Click on Security Question menu
    RegistrationPage.securityQuestionDropdownBtn.click();
    // Select  "Name of your favorite pet?"
    RegistrationPage.securityQuestionDropdownList.contains("Name of your favorite pet?").click();
    // Fill in answer
    RegistrationPage.securityAnswerControlField.type("Unreal");
    // Click Register button
    RegistrationPage.registerButton.click();

    // Set email value to previously created email
    LoginPage.emailField.type(fakeEmail);
    // Set password value to previously used password value
    LoginPage.passwordField.type(fakePassword);
    // Click login button
    LoginPage.loginButton.click();
    // Click Account button
    HomePage.navbarAccountBtn.click();
    // Validate that account name (with previously created email address) appears in the menu section
    HomePage.userAccountBtn.find(" > span").should("have.text", ' ' + fakeEmail + ' ');
  });
});



describe("Juice-shop with Auto login", () => {
  beforeEach(() => {
    cy.login("demo", "demo");
    HomePage.visit();
  });

  it("Search and validate Lemon", () => {
    // Click on search icon
    HomePage.searchQueryBtn.click();
    // Search for Lemon
    HomePage.searchQueryField.type("Lemon{enter}");
    // Select a product card - Lemon Juice (500ml)
    HomePage.findCardByItemName("Lemon Juice (500ml)").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.popUpDialogContainer.contains("Sour but full of vitamins.").should("exist");
  });


  // Create scenario - Search 500ml and validate Lemon, while having multiple cards
  it("Search and validate lemon 2", () => {
    // Click on search icon
    HomePage.searchQueryBtn.click();
    // Search for 500ml
    HomePage.searchQueryField.type("500ml{enter}");
    // Select a product card - Lemon Juice (500ml)
    HomePage.findCardByItemName("Lemon Juice (500ml)").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.popUpDialogContainer.contains("Sour but full of vitamins.").should("exist");
  });


  // Create scenario - Search 500ml and validate cards
  it("Search and validate juices", () => {
    // Click on search icon
    HomePage.searchQueryBtn.click();
    // Search for 500ml
    HomePage.searchQueryField.type("500ml{enter}");
    // Select a product card - Eggfruit Juice (500ml)
    HomePage.findCardByItemName("Eggfruit Juice (500ml)").click();
    // Validate that the card (should) contains "Now with even more exotic flavour."
    HomePage.popUpDialogContainer.contains("Now with even more exotic flavour.").should("exist");
    // Close the card
    HomePage.closePopUpDialogBtn.click();
    // Select a product card - Lemon Juice (500ml)
    HomePage.findCardByItemName("Lemon Juice (500ml)").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.popUpDialogContainer.contains("Sour but full of vitamins.").should("exist");
    // Close the card
    HomePage.closePopUpDialogBtn.click();
    // Select a product card - Strawberry Juice (500ml)
    HomePage.findCardByItemName("Strawberry Juice (500ml)").click();
    // Validate that the card (should) contains "Sweet & tasty!"
    HomePage.popUpDialogContainer.contains("Sweet & tasty!").should("exist");
  });


  // Create scenario - Read a review
  it("Read and validate a review", () => {
    // Click on search icon
    HomePage.searchQueryBtn.click();
    // Search for King
    HomePage.searchQueryField.type("King{enter}");
    // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
    HomePage.findCardByItemName("OWASP Juice Shop \"King of the Hill\" Facemask").click();
    // Click expand reviews button/icon (wait for reviews to appear)
    cy.wait(500);
    HomePage.popUpDialogReviewDropdownBtn.click();
    // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
    HomePage.popUpDialogReviewDropdownList.contains("K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!").should("exist");
  });


  // Create scenario - Add a review
  it("Add and validate a review", () => {
    // Click on search icon
    HomePage.searchQueryBtn.click();
    // Search for Raspberry
    HomePage.searchQueryField.type("Raspberry{enter}");
    // Select a product card - Raspberry Juice (1000ml)
    HomePage.findCardByItemName("Raspberry Juice (1000ml)").click();
    // Type in review - "Tastes like metal"
    HomePage.popUpDialogReviewInput.click();
    cy.wait(200);
    HomePage.popUpDialogReviewInput.click().type("Tastes like metal").then( () => {
      // Click Submit
      HomePage.submitButton.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      cy.wait(500);
      HomePage.popUpDialogReviewDropdownBtn.click();
      // Validate review -  "Tastes like metal"
      HomePage.popUpDialogReviewDropdownList.contains("Tastes like metal").should("exist");
    });
  });


  // Create scenario - Validate product card amount
  it("Change and validate displayed product card amount", () => {
    // Validate that the default amount of cards is 12
    HomePage.itemCardList.find(".mat-grid-tile").should("have.lengthOf", 12);
    cy.wait(500);

    // Change items per page (at the bottom of page) to 24
    HomePage.itemsPerPageDropdown.click();
    HomePage.itemsPerPageDropdown.contains("24").parent().click();
    // Validate that the amount of cards is 24
    HomePage.itemCardList.find(".mat-grid-tile").should("have.lengthOf", 24);
    cy.wait(500);

    // Change items per page (at the bottom of page) to 36
    HomePage.itemsPerPageDropdown.click();
    HomePage.itemsPerPageDropdown.contains("36").parent().click();
    // Validate that the amount of cards is 35
    HomePage.itemCardList.find(".mat-grid-tile").should("have.lengthOf", 35);
  });


  // Create scenario - Buy Girlie T-shirt
  it("Buy a t-shirt", () => {
    // Click on search icon
    HomePage.searchQueryBtn.click();
    // Search for Girlie
    HomePage.searchQueryField.type("Girlie{enter}");
    // Add to basket "Girlie"
    HomePage.addItemToBasketBtn("Girlie").click();
    // Click on "Your Basket" button
    HomePage.navbarBasketBtn.click();

    // Create page object - BasketPage
    // Click on "Checkout" button
    BasketPage.checkoutButton.click();

    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
    SelectAddressPage.adressList.contains("United Fakedom").click();
    // Click Continue button
    SelectAddressPage.continueButton.click();

    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
    DeliveryMethodPage.deliverySpeedsList.contains("Standard Delivery").click();
    // Click Continue button
    DeliveryMethodPage.continueButton.click();

    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
    PaymentOptionsPage.selectedCardButton("5678").click();
    // Click Continue button
    PaymentOptionsPage.continueButton.click();

    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    OrderSummaryPage.checkoutButton.click();
    
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"
    cy.contains("Thank you for your purchase!").should("exist");
    
  });


  // Create scenario - Add address
  it("Add a new address", () => {
    // Click on Account
    HomePage.navbarAccountBtn.click();
    // Click on Orders & Payment
    HomePage.ordersAndPaymentBtn.click();
    // Click on My saved addresses
    HomePage.savedAddressesBtn.click();

    // Create page object - SavedAddressesPage
    // Click on Add New Address
    SavedAddressesPage.addNewAddressBtn.click();

    // Create page object - CreateAddressPage
    // Fill in the necessary information
    CreateAddressPage.countryInput.type("Imagistan");
    CreateAddressPage.nameInput.type("Demo");
    CreateAddressPage.mobileNumberInput.type("123435678");
    CreateAddressPage.ZIPcodeInput.type("9999");
    CreateAddressPage.addressInput.type("Dummy street 33");
    CreateAddressPage.cityInput.type("Big town");
    CreateAddressPage.stateInput.type("Region of exist");
    CreateAddressPage.submitButton.click();
    // Click Submit button
    // Validate that previously added address is visible
    SavedAddressesPage.addressesList.contains("Dummy street 33").should("exist");
  });


  // Create scenario - Add payment option
  it("Add a new payment option", () => {
    // Click on Account
    HomePage.navbarAccountBtn.click();
    // Click on Orders & Payment
    HomePage.ordersAndPaymentBtn.click();
    // Click on My payment options
    HomePage.myPaymentOptionsBtn.click();

    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    SavedPaymentMethodsPage.addNewCardBtn.click();
    // Fill in Name
    SavedPaymentMethodsPage.nameInput.type("Demo");
    // Fill in Card Number
    SavedPaymentMethodsPage.cardNumberInput.type("4125 6785 9990 6578");
    // Set expiry month to 7
    SavedPaymentMethodsPage.expiryMonthInput.select("7");
    // Set expiry year to 2090
    SavedPaymentMethodsPage.expiryYearInput.select("2090");
    // Click Submit button
    SavedPaymentMethodsPage.submitButton.click();
    // Validate that the card shows up in the list
    SavedPaymentMethodsPage.paymentOptionsList.contains("Demo").should("exist");
  });
});
