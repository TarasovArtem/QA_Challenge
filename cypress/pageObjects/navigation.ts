/// <reference types="cypress" />

import ForBabysItem from './forBabys';
import MainPage from './mainPage';
import WoodenToys from './woodenToys'

class Navigation {

    static mainPage(): MainPage {
        cy.visit('/');
        return new MainPage;
    }

    static forBabysItem(): ForBabysItem {
        cy.visit('/en_DE/c/for-babys--1lmmyo');
        return new ForBabysItem;
    }

    static woodenToys(): WoodenToys {
        cy.visit('/en_DE/c/wooden-toys--o05xg1');
        return new WoodenToys;
    }

}
export default Navigation