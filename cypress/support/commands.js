// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login_recaptcha_v2', (email, password) => { 
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('.radioButton').click()
    cy.get('[style="width: 304px; height: 78px;"] > div > iframe')
    .first()
    .then((recaptchaIframe) => {
    const body = recaptchaIframe.contents()
    cy.wrap(body).find('.recaptcha-checkbox-border').should('be.visible').click()
    })
    cy.get('.submitForm').wait(500).click()
 })
Cypress.Commands.add('login_for_indybuild',(email, password)=>{
    cy.get(':nth-child(1) > .form-control').type(email)
    cy.get('#password').type(password)
    cy.get(':nth-child(4) > .btn').click()
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
