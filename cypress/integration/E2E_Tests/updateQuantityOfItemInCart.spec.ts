/// <reference types="Cypress" />

import {Navigation, General, MainPage, Cart, ForBabysItem} from '../../pageObjects/index';

describe('Customer can update quantity of item in cart', () => {
       
    let general = new General();
    let mainPage = new MainPage();
    let cart = new Cart();
    let forBabys = new ForBabysItem();
       
    beforeEach(() => {
        mainPage = Navigation.mainPage();
        general.getAllCookies().click();
    })

    it('Update quantity of item in cart', () => {
        forBabys = Navigation.forBabysItem();
        forBabys.getClutchingToyFreddytheFrog().click();
        general.getAddToCartButton().click();
        cart.getCart().click();

        // checking values 0 => 10
        cart.getUpdateEntryQuantity().select('5').should('have.value', '5');
        cart.getAdditionalInfoCart().should('have.text', '5');

        cart.getUpdateEntryQuantity().select('10').should('have.value', '10');
        cart.getAdditionalInfoCart().should('have.text', '10');         
    
        cart.getUpdateEntryQuantity().select('0').should('have.value', '0');
        cart.getAdditionalInfoCart().should('have.text', '0');
    })
})