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
})