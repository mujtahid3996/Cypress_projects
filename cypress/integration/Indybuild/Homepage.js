/// <reference types="Cypress" />

describe('Testcases for Homepage',()=>{
    beforeEach(()=>{
        cy.visit('https://indybuild.com/signin')
        cy.login_for_indybuild('nabil44th@gmail.com','test1234');
    })
    it('Validate "Search field" is visible from the navbar',()=>{
        cy.get('.search-people > .form-control').should('be.visible')
    })
    it('Validate "Search field" basic functionality is working from the navbar',()=>{
        cy.get('.search-people > .form-control').type('naim')
    })
    it('validate indymarket is visible from navbar',()=>{
        cy.get(':nth-child(2) > .icon-holder').should('be.visible');
    })
    it('validate indymarket is working from navbar',()=>{
        cy.get(':nth-child(2) > .icon-holder').click()
        cy.get('#album > .owl-stage-outer > .owl-stage').should('be.visible')
    })
    it('validate events module is visible from navbar',()=>{
        cy.get(':nth-child(3) > .icon-holder').should('be.visible');
    })
    it('Notifications module is visible from navbar',()=>{
        cy.get(':nth-child(4) > .icon-holder').should('be.visible')
    })
    it('Notifications module is working from navbar',()=>{
        cy.get(':nth-child(4) > .icon-holder').click()
        cy.get('.active > .dropdown-menu > :nth-child(2) > .pointer').should('be.visible')
    })
    it('')
})