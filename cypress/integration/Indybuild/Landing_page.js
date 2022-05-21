/// <reference types="Cypress" />

describe('Testcases for Landing page',()=>{
    before(()=>{
        cy.visit('https://indybuild.com')
    })
    it('validate Login button is visible',()=>{
        cy.get('.nav > :nth-child(1) > .text-center').should('be.visible')
    })
    it('validate login button is working',()=>{
        //look for login button
        cy.get('.nav > :nth-child(1) > .text-center').click()
        //check the url
        cy.url().should('include','signin')
        cy.go('back')
    })
    it('validate signup button is visible',()=>{
        // look for signup button
        cy.get('.nav > :nth-child(2) > .text-center').should('be.visible')
    })
    it('validate watch video button is visible',()=>{
        cy.get('.active > .event-post > .bannerLeftCalloutBox > .IB_Button').should('be.visible')
    })
    it('validate watch video button is working',()=>{
        //Look for watch button
        cy.get('.active > .event-post > .bannerLeftCalloutBox > .IB_Button').click()
        // then validate if the video modal is popping up
        cy.get('#videoModal > .modal-dialog > .modal-content > .modal-body').should('be.visible').wait(1500)
        //Now pausing the video
        //cy.get('.plyr__controls__item plyr__control').click()
        //now lets close it 
        cy.get('.close > span').click()
    })
    it('validate arrow up button is visible', ()=>{
        cy.get('.float-top').should('be.visible') 
    })
    it('arrow up button is working in landing page',()=>{
        // scroll to down
        cy.get('.join-indybuild > .blue').scrollIntoView()
        // Now click on the arrow button
        cy.get('.float-top').click().wait(200)
        // Now in the top of the page watch video should be working
        cy.get('.active > .event-post > .bannerLeftCalloutBox > .IB_Button').should('be.visible') 
    })
    it('validate "join today" buttons are visible in landing page',()=>{
        //look for join today buttons and scroll to view
        cy.get('.col-md-4 > :nth-child(1) > .IB_Button').scrollIntoView().should('be.visible')
        cy.get('.app-content > :nth-child(1) > .IB_Button').scrollIntoView().should('be.visible')

    })
    it('validate join today buttons are working', ()=>{
        //get the first join button and click
        cy.get('.col-md-4 > :nth-child(1) > .IB_Button').scrollIntoView().click()
        cy.url().should('include', 'signup')
        cy.go('back')
        //get the second join button and click
        cy.get('.app-content > :nth-child(1) > .IB_Button').scrollIntoView().click()
        cy.url().should('include', 'signup')
        cy.go('back')
    })
    it('validate IndyBuild for Fans button is visible',()=>{
        //first get the button and check visiblity
        cy.get('.join-indybuild > .blue').should('be.visible')
    })

    it('Validate IndyBuild for Fans button is working ',()=>{
        //first get the button and click
        cy.get('.join-indybuild > .blue').click()
        cy.get('#sel1').should('have.text','Fan')

    })
    it('validate indybuild for artists module is visible', ()=>{
        // now go back
        cy.go('back')
        // now look for the button
        cy.get('.lime').should('be.visible')
    })
    it('validate indybuild for artists button is working',()=>{
        // now look for the button and click
        cy.get('.lime').click()
        // check if the text is previously selected
        cy.get('#sel1').should('have.text','Artist')
    })
    it('validate for pros is visible from landing page',()=>{
        // now go back
        cy.go('back')
        // now look for pros link
        cy.get('[style="padding-left: 30px;"] > a').should('be.visible')
    })
    it('Validate "For Pros" module is working from landing page',()=>{
        //first click on the link
        cy.get('[style="padding-left: 30px;"] > a').click()
        //now check the URL
        cy.url().should('include','indypro')
        // user should see two buttons here
        cy.get('.talent-box > :nth-child(1)').should('be.visible')
        cy.get('.talent-box > :nth-child(2)').should('be.visible')
        //now lets go back
        cy.go('back')
    })
    it('Validate "About Us" module is visible from the landing page',()=>{
        //url should be visible
        cy.get('[style="padding-left: 1px;"] > a').scrollIntoView().should('be.visible')
    })
    it('validate about us is working',()=>{
         //url should be visible
         cy.get('[style="padding-left: 1px;"] > a').scrollIntoView().click()
         //now chech the url
         cy.url().should('include','about_us')
        // now go back
        cy.go('back')
    })
    it('validate contact us module is visible in landing page',()=>{
        cy.get('[style="padding-left: 14px;"] > a').should('be.visible')
    })
    it('validate contact us module is working',()=>{
        //look for contact button and click
        cy.get('[style="padding-left: 14px;"] > a').scrollIntoView().click()
        //now check the URL
        cy.url().should('include','contact_us')
        //now check if message box is visible
        cy.get('#message').should('be.visible')
        //also check wheather its typeable
        cy.get('#message').type('hi')
        //check wheather the user can see submit button 
        cy.get('.col-sm-12 > .btn').should('be.visible')
    })
    it('validate report bugs Link is visible',()=>{
        cy.get('[style="padding-left: 25px;"] > a').should('be.visible')

    })
    it('validate revenue sharing link is visible',()=>{
        cy.get('[style="padding-left: 56px;"] > a').should('be.visible')
    })
    it('IB commision link is visible',()=>{
        cy.get('[style="padding-left: 45px;"] > a').should('be.visible')
    })
    it('validate report bug link is working',()=>{
        cy.get('[style="padding-left: 25px;"] > a').click()
        cy.url().should('include','report-bug')
    })
    it('validate revenue sharing link is working',()=>{
        cy.get('[style="padding-left: 56px;"] > a').scrollIntoView().click()
        //check if the modal is appearing with proper revenue related text
        cy.get('app-revenue-sharing > #revenue > .modal-dialog > .modal-content > .modal-body > .revenue-pop-main').should('be.visible')
        //now close
        cy.get('app-revenue-sharing > #revenue > .modal-dialog > .modal-content > .modal-header > .close-icons').click()

    })
    it('validate IB comission link is working',()=>{
        cy.get('[style="padding-left: 45px;"] > a').click()
        //check if the modal is appearing with proper comission related text
        cy.get('app-ib-commision > #revenue > .modal-dialog > .modal-content > .modal-body').should('be.visible')
        // now close
        cy.get('app-ib-commision > #revenue > .modal-dialog > .modal-content > .modal-header > .close-icons').click()
        cy.go('back')
    })
    it('Terms and conditions are visible',()=>{
        cy.get('[href="/terms"]').should('be.visible')
    })
    it('privacy policy link is visible',()=>{
        cy.get('[href="/policies"]').should('be.visible')
    })
    it('Terms and conditions are working',()=>{
        cy.get('[href="/terms"]').click()
        // now checking the url
        cy.url().should('include','terms')
        //going to bottom of the page
        cy.get('ul > :nth-child(20)').scrollIntoView()
        //go back
        cy.go('back')
    })
    it('privacy policy should be working',()=>{
        cy.get('[href="/policies"]').click()
        // now checking the url
        cy.url().should('include','policies')
        //going to bottom of the page
        cy.get('ul > :nth-child(16)').scrollIntoView()
        //now go back
        cy.go('back')
    })
    it('validate facebook button is visible in landing page',()=>{
        cy.get('.css-sprite-facebook').should('be.visible')
    })
    it('validate Linkedin button is visible',()=>{
        cy.get('.css-sprite-linked-in').should('be.visible')
    })
    it('validate instagram page is visible',()=>{
        cy.get('.css-sprite-instagram').should('be.visible')
    })
    it('validate youtube button is visible',()=>{
        cy.get('.css-sprite-youtube').should('be.visible')
    })
    it('validate twitter button is visible',()=>{
        cy.get('.css-sprite-twitter').should('be.visible')
    })
})