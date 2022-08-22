/// <reference types="Cypress" />

describe('test_cases for sign_up',()=>{
    before(()=>{
        cy.visit('https://indybuild.com/signup')
    })
    it('validate text area is visible and working for firstname',()=>{
        cy.get(':nth-child(1) > .form-control').should('be.visible').type('muj')
    })

    it('validate text area is visible and working for firstname',()=>{
        cy.get(':nth-child(2) > .form-control').should('be.visible').type('taw')
    })

    it('validate text area is visible and working for email',()=>{
        cy.get(':nth-child(3) > .form-control').should('be.visible').type('muj@has.com')
    })
    it('validate textarea is visible and working for password',()=>{
        cy.get('#password').should('be.visible').type('muj')
    })
    it('validate eye button is working in password field',()=>{
        //first type something
        cy.get('#password').type('absc2123')
        // Now check if this is clickable
        cy.get('.showpwd > .fa').click()
        // now check the text
        cy.get('#password').invoke('attr','type').should('equal','text')
    })

    it('validate re-enter password is visible and working',()=>{
        cy.get(':nth-child(5) > .form-control').should('be.visible').type('muj')
    })
    it('validate register button is visible',()=>{
        cy.get(':nth-child(8) > .btn').should('be.visible')
    })

    it('validate facebook signup is visible',()=>{
        cy.get('.btn-primary').should('be.visible')
    })

    it('validate google signup is visible',()=>{
        cy.get('.btn-primray').should('be.visible')
    })

    it('validate gender options are visible',()=>{
        //male checkbox is visible
        cy.get(':nth-child(7) > :nth-child(1)').should('be.visible')
        //female checkbox is visible
        cy.get(':nth-child(7) > :nth-child(2)').should('be.visible')
        //other option is visible
        cy.get(':nth-child(7) > :nth-child(3)').should('be.visible')
    })
})