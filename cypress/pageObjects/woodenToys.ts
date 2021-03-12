/// <reference types="cypress" />

class WoodenToys {

    getPeggingGameFish() {
        return cy.get('[data-article-number="304907"]');
    }
}
export default WoodenToys