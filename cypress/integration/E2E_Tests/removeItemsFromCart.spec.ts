/// <reference types="Cypress" />


import {Navigation, General, MainPage, Cart, ForBabysItem, WoodenToys} from '../../pageObjects/index';



describe('Customer can remove item from cart', () => {
    
   
    let general = new General();
    let mainPage = new MainPage();
    let cart = new Cart();
    let forBabys = new ForBabysItem();
    let woodenToys = new WoodenToys();
    
    
   
    beforeEach(() => {
        mainPage = Navigation.mainPage();
        general.getAllCookies().click();
    })


    it('Remove item from cart with selecting value', () => {
        forBabys = Navigation.forBabysItem();
        forBabys.getDanglingFigureFox().click();
        general.getAddToCartButton().click();
        cart.getCart().click();
        cart.getUpdateEntryQuantity().select('0');
        cart.getAdditionalInfoCart().should('have.text', '0');
    })

    it('Remove item from cart with remove button', () => {
        woodenToys = Navigation.woodenToys(); 
        woodenToys.getPeggingGameFish().click();
        general.getAddToCartButton().click();
        cart.getCart().click();
        cart.getRemoveBtn().click();
        cart.getAdditionalInfoCart().should('have.text', '0');
    })
})