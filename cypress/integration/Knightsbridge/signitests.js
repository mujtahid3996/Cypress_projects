/// <reference types="Cypress" />
describe('Automating the test cases for signin',() =>{
    beforeEach(()=>{
        cy.visit('https://new-qa.knights.app/login')
    })
    it('Validate the sign in form visibility',()=>{
       
        cy.get('.formContainer').should('be.visible')
    })

    it('validate signin logo visiblity',()=>{
        cy.visit('https://new-qa.knights.app/login')
        cy.get('.logoContainerLogin > img').should('be.visible')
    })

    it('validate knigtsbridge text visiblity',()=>{
        //cy.visit('https://new-qa.knights.app/login')
       cy.get('.logoContainerLogin > img').should('have.attr','alt').invoke('text')
    })

    it('Validate Sign in to continue text visibility',()=>{
        //firstway to validate
        //cy.get('.submitForm').contains('Sign in to continue')
        //I will stick to this
        cy.get('.submitForm').invoke('text').then((text)=>{
            expect(text).to.be.equal('Sign in to continue')
        })

    })

    it('validate welcome back text is visible',()=>{
        cy.get('.formContainer').contains('Welcome Back');
    }) 
    
    it('email field should be visible', ()=>{
        cy.get('#email').should('be.visible') 
    })

    it('it is possible to fill email',()=>{
        cy.get('#email').type('asdfsaffds').should('have.value','asdfsaffds')
    })

    it('it is possible to fill password',()=>{
        cy.get('#password').type('aasdfdf').should('have.value','aasdfdf')
    })

    it('validate remember me visiblity',()=>{
        cy.get('.radioButton').should('be.visible')
    })

    it('validate remember me works',()=>{
        //so basically here clicking the remember me and then logging
        cy.get('#email').type('unidevgo.qa1+mttest1@gmail.com')
        cy.get('#password').type('@mujtahiD3996')
        cy.get('.radioButton').click()
        cy.get('[style="width: 304px; height: 78px;"] > div > iframe')
        .first()
        .then((recaptchaIframe) => {
          const body = recaptchaIframe.contents()
          cy.wrap(body).find('.recaptcha-checkbox-border').should('be.visible').click()
        })
        cy.get('.submitForm').wait(500).click()

        //now logging out
        cy.get('.containerInnerAvatar > a > img').should('be.visible').click()
        cy.get('.swal2-confirm').should('be.visible').click()

        //alright moment of truth,now checking if remember me working fine

        cy.get('#email').should('have.value','unidevgo.qa1+mttest1@gmail.com')
        cy.get('#password').should('have.value','@mujtahiD3996')
    })

    it('signin button visiblity',() =>{
        cy.get('.submitForm').should('be.visible')
    })

    it('validate signin feature logic',()=>{
        //this code block just signs in
            cy.get('#email').type('unidevgo.qa1+mttest1@gmail.com')
            cy.get('#password').type('@mujtahiD3996')
            cy.get('.radioButton').click()
            cy.get('[style="width: 304px; height: 78px;"] > div > iframe')
            .first()
            .then((recaptchaIframe) => {
            const body = recaptchaIframe.contents()
            cy.wrap(body).find('.recaptcha-checkbox-border').wait(200).should('be.visible').click()
            })
            cy.get('.submitForm').wait(500).click()
        //now checking the it really signed in
            cy.url().should('include','Dashboard')
        //this code block just signs out
            cy.get('.containerInnerAvatar > a > img').should('be.visible').click()
            cy.get('.swal2-confirm').should('be.visible').click()

    })

    it('Validate Forgot Password link inside sign in page',()=>{
        cy.get('.forgotPassword').should('be.visible')
    })

    it('Verify Forgot Password link on Sign In screen brings the user to Forgot Password screen',()=>{
        cy.get('.forgotPassword').click()
        cy.url().should('include','forgotPassword')
    })
})