/// <reference types="cypress" />


class Cart {

    getAdditionalInfoCart() {
        return cy.get('.additional-info');
    }

    getCart() {
        return cy.get('[data-mini-cart-name="Cart"]');
    }

    getUpdateEntryQuantity() {
        return cy.get('#quantity_0');
    }

    getRemoveBtn() {
        return cy.get('#removeEntry_0');
    }
}
export default Cart