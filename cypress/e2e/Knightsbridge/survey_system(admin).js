/// <reference types="Cypress" />
describe('survey system admin related test cases',()=>{
    before(function(){
        //using fixture for first time
        cy.fixture('knightsbridge_admin').then(function(data){
            globalThis.email=data.email
            globalThis.password=data.password
            })
    })
    beforeEach(()=>{
        //first land to login page
        cy.visit('https://new-qa.knights.app/login')
        //before each of the testcases I need to login as admin right? so doing it
        cy.login_recaptcha_v2(globalThis.email,globalThis.password)
        //now checking the it really signed in
        cy.url().should('include','dashboard')
        // navigate to survey
        cy.get('.navContainer > ul > :nth-child(10) > a').scrollIntoView().click().wait(200)
        cy.url().should('include','survey')
    })
    it('validate survey option is visible to admin',()=>{
        //looking for survey button in navbar
        cy.get('.navContainer > ul > :nth-child(10) > a').scrollIntoView().should('be.visible')

    })
    it('validate survey list is working',()=>{
        cy.get('.table').should('be.visible')
    })

    it('validate create button(add survey) on survey list tab is visible',()=>{
        cy.get('.btn').should('be.visible')
    })

    it('validate create button(Add survey) on survey list is working',()=>{
        //finding the add button
        cy.get('.btn').should('be.visible').click().wait(300)
        cy.url().should('include', 'infoSurvey')
    })

    it('validate edit/view survey from particular link is working',()=>{
        //looking for edit button
        cy.get('tbody> :nth-child(1) > :nth-child(6) > .containerInnerTableCOlumn > [ngbtooltip="Edit"] > .fas').click().wait(200)
        //validating it has opened a particular survey
        cy.url().should('include','624433d8e5e5050023bc1cb5')
    })
    it('validate adding question button for specific survey is visible',()=>{
        // first hit the edit button
        cy.get('tbody> :nth-child(1) > :nth-child(6) > .containerInnerTableCOlumn > [ngbtooltip="Edit"] > .fas').click().wait(200)
        cy.url().should('include','624433d8e5e5050023bc1cb5')
        // now look for add question button
        cy.get('.container-fluid > :nth-child(3) > .col-md-11 > .card > .card-body > .btn').should('be.visible')

        
    })
    it('validate adding question button for specific survey is working',()=>{
        // first hit the edit button
        cy.get('tbody> :nth-child(1) > :nth-child(6) > .containerInnerTableCOlumn > [ngbtooltip="Edit"] > .fas').click().wait(200)
        cy.url().should('include','624433d8e5e5050023bc1cb5')
        // now look for add question button
        cy.get('.container-fluid > :nth-child(3) > .col-md-11 > .card > .card-body > .btn').click().wait(200)
        //verify after clicking the edit it is adding a new modal for new question
        cy.get('.container-fluid > :nth-child(3) > :nth-child(1)').should('be.visible')
    
    })
    it('validate remove question button for specific survey is visible',()=>{
        // first hit the edit button
        cy.get('tbody> :nth-child(1) > :nth-child(6) > .containerInnerTableCOlumn > [ngbtooltip="Edit"] > .fas').click().wait(200)
        cy.url().should('include','624433d8e5e5050023bc1cb5')
        //finiding the remove question button
        cy.get('.container-fluid > :nth-child(2) > :nth-child(2) >  .card > .card-body > .btn').should('be.visible')
    })

    it('validate remove question button for specific survy is working',()=>{
        // first hit the edit button
        cy.get('tbody> :nth-child(3) > :nth-child(6) > .containerInnerTableCOlumn > [ngbtooltip="Edit"] > .fas').click().wait(200)
        cy.url().should('include','61f9489707a7960023a10e9f')
        //finiding and clicking the remove question button
        cy.get('.container-fluid > :nth-child(4) > :nth-child(2) >  .card > .card-body > .btn').should('be.visible').click().wait(200)
        //now check if the modal is gone
        cy.get('.container-fluid > :nth-child(4) > :nth-child(1)').should('not.contain.text','Question Type')

    })
    it('validate save button for updating about survey is visible',()=>{
        // first hit the edit button
        cy.get('tbody> :nth-child(3) > :nth-child(6) > .containerInnerTableCOlumn > [ngbtooltip="Edit"] > .fas').click().wait(200)
        cy.url().should('include','61f9489707a7960023a10e9f')
        // now finding the save button
        cy.get('.container-fluid> :nth-child(6) > .col-md-11 > .card > .card-body > .btn').should('be.visible')
    })
    it('validate export result button is visible',()=>{
       cy.contains('export result') 
    })
    it('validate type selection for specific question in survey is visible',()=>{
        // first hit the edit button
        cy.get('tbody> :nth-child(3) > :nth-child(6) > .containerInnerTableCOlumn > [ngbtooltip="Edit"] > .fas').click().wait(200)
        cy.url().should('include','61f9489707a7960023a10e9f')

        //button for type selection
        cy.get('.container-fluid> :nth-child(3) > :nth-child(1) > .card > .card-body > :nth-child(1) > :nth-child(2) > .d-inline-block > .dropdown-toggle')
        .should('be.visible')
        
    })
    it('validate type selection for specific question in each survey is working(3 types should be here',()=>{
        // first hit the edit button
        cy.get('tbody> :nth-child(3) > :nth-child(6) > .containerInnerTableCOlumn > [ngbtooltip="Edit"] > .fas').click().wait(200)
        cy.url().should('include','61f9489707a7960023a10e9f')

        //button for type selection
        cy.get('.container-fluid> :nth-child(3) > :nth-child(1) > .card > .card-body > :nth-child(1) > :nth-child(2) > .d-inline-block > .dropdown-toggle').click()

        //now check if the length is 3 
        cy.get('.overflow-scroll').should('have.length',3)
    })
   
})