/// <reference types="Cypress" />

describe('Test_cases for Login',()=>{
    before(()=>{
        cy.visit('https://indybuild.com/signin')
    })

    it('validate Text area is visible and working in email',()=>{
        cy.get(':nth-child(1) > .form-control').should('be.visible').type('amra@vis.com')
    })

    it('validate Text area is visible and working in password',()=>{
        cy.get('#password').should('be.visible').type('jaduu')
    })
    
    it('validate eye button is visible in password field to view password',()=>{
        cy.get('.showpwd > .fa').should('be.visible')
    })

    it('validate eye button is working in password field',()=>{
        //first type something
        cy.get('#password').type('absc2123')
        // Now check if this is clickable
        cy.get('.showpwd > .fa').click()
        // now check the text
        cy.get('#password').invoke('attr','type').should('equal','text')
    })

    it('validate remember me is visible',()=>{
        cy.get('.custom-radio').should('be.visible')
    })

    it('validate login button is visible in login page',()=>{
        cy.get(':nth-child(4) > .btn ').should('be.visible')
    })
    it('validate forgot password link is visible',()=>{
        cy.get(':nth-child(4) > p > a').should('be.visible')
    })

    it('validate forgot password is working',()=>{
        cy.get(':nth-child(4) > p > a').click()
        // now check the if the URL is changed
        cy.url().should('include','forgot_password')
        //now go back
        cy.go('back')
    })
    it('validate facebook login is visible',()=>{
        cy.get('.btn-primary').should('be.visible')
    })
    it('validate google login is visible',()=>{
        cy.get('.btn-primray').should('be.visible')
    })
    it('validate register now button is visible',()=>{
        cy.get('[style="float: left;"] > p > a').should('be.visible')
    })
    it('validate register now button is working',()=>{
        cy.get('[style="float: left;"] > p > a').click()
        // validate signup links should be working
        cy.url().should('include', 'signup')
    })

})