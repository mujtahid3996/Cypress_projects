import user_impersonate_PO from '../../support/pageobjects/user_impersonate'
/// <reference types="Cypress" />

describe('here I will try to autmate testcases for user impesonate',()=>{
    before(function(){
        //using fixture for first time
        cy.fixture('knightsbridge_admin').then(function(data){
            globalThis.email=data.email
            globalThis.password=data.password
            })
    })
    beforeEach(()=>{
            //landing on this page
            cy.visit('https://new-qa.knights.app/login')
             //before each of the testcases I need to login as admin right? so doing it
            cy.login_recaptcha_v2(globalThis.email,globalThis.password)
            //now checking the it really signed in
            cy.url().should('include','dashboard') 
    })

    it('Validate Admin can see the option for switching to customer view',()=>{
        cy.get(':nth-child(1) > :nth-child(9) > .containerInnerTableCOlumn > [ngbtooltip="View Detail"]').click()
        cy.get('.col-auto > .btn').should('be.visible')

    })
    it('Validate switching the customer view from admin',()=>{
        cy.get(':nth-child(1) > :nth-child(9) > .containerInnerTableCOlumn > [ngbtooltip="View Detail"]').click()
        cy.get('.col-auto > .btn').click()
        //successful impersonation test
        cy.url().should('include','clientDashboard')
    })
    it('validate admin is performing action in customer view',()=>{
        //searching  a user
        cy.get('#searchInput').type('mujtahid.tawhid@unidevgo')
        cy.get('.flaticon-381-search-2').click()
        //impersonating
        cy.get('#onHoverDetails').click()
        cy.get('.col-auto > .btn').should('be.visible').click()
        //successful impersonation test
        cy.url().should('include','clientDashboard')
         //now perform a click on portfolio to see his portfolio
        cy.get(':nth-child(3) > a > .iconsideBar > img').should('be.visible').click()
        cy.url().should('include','portfolio')
        

    }) 
    it('Validate UI top navigation is shown red when admin is in the customer view',()=>{
        //searching a user
        cy.get('#searchInput').type('mujtahid.tawhid@unidevgo')
        cy.get('.flaticon-381-search-2').click()
        //now impersonating 
        cy.get('#onHoverDetails').click()
        cy.get('.col-auto > .btn').should('be.visible').click()
        //successful impersonation test
        cy.url().should('include','clientDashboard')
        // now checking color 
        cy.get('#headerMainWrapperClientDashobaord').should('have.css','background-color','rgb(217, 43, 43)')
    })
  
    it('Verify it is possible to view impersonate log of a specific user',()=>{
        cy.get('.navContainer > ul > :nth-child(13) > a').scrollIntoView().click().wait(200)
        cy.url().should('include','impersonateLogs')
        cy.get('#searchInput')
        
    })
    it('do multiple impersonate for mujtahid',()=>{
        //first search
        cy.get('#searchInput').type('mujtahid')
        cy.get('.flaticon-381-search-2').click().wait(500)
        //now impersonate one by one
        cy.get('tbody').children().each(()=>{
            //for each user try impersonate
            cy.get('#onHoverDetails').click()
            cy.get('.col-auto > .btn').should('be.visible').click().wait(200)
            //successful impersonation test
            cy.url().should('include','clientDashboard')
            // now going back to admin view
            cy.get('.classicWhite').click()
    
        })
    })
    it('do multiple impersonate for munna',()=>{
        //first impersonate
        cy.get('#searchInput').type('munna')
        cy.get('.flaticon-381-search-2').click().wait(500)
        cy.get('tbody').children().each(()=>{
            //for each user try impersonate
            cy.get('#onHoverDetails').click()
            cy.get('.col-auto > .btn').should('be.visible').click().wait(200)
            //successful impersonation test
            cy.url().should('include','clientDashboard')
            // now going back to admin view
            cy.get('.classicWhite').click()
    
        })
    })
    after(()=>{
        //now logging out after each test case execution
        cy.get('.containerInnerAvatar > a > img').should('be.visible').click()
        cy.get('.swal2-confirm').should('be.visible').click({force:true})
    })

})