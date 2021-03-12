/// <reference types="Cypress" />

import {Navigation, General, MainPage, ForBabysItem, WoodenToys, Cart} from '../../pageObjects/index';



describe('Customer can add any available item to cart', () => {
    
    let forBabys = new ForBabysItem();
    let general = new General();
    let mainPage = new MainPage();
    let cart = new Cart();
    let woodenToys = new WoodenToys();
    
   
    beforeEach(() => {
        mainPage = Navigation.mainPage();
        general.getAllCookies().click();
    })


    it('Add any available items', () => {
        forBabys = Navigation.forBabysItem();
        forBabys.getDanglingFigureFox().click();
        general.getAddToCartButton().click();
        cart.getAdditionalInfoCart().should('have.text', '1');

        woodenToys = Navigation.woodenToys();
        woodenToys.getPeggingGameFish().click();
        general.getAddToCartButton().click();
        cart.getAdditionalInfoCart().should('have.text', '2');       
        
    })
})