/// <reference types="cypress" />

class General {

    getAllCookies() {
        return cy.get('#onetrust-accept-btn-handler');
    }

    getAddToCartButton() {
        return cy.get('#addToCartButton');
    }
}
export default General