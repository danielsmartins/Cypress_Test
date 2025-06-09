describe('form test', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })
    it('Test subscribe form', () => {
        cy.contains(/Testing forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input') // kinda a reference

        cy.get('@subscribe-input').type('danielsmartins19@gmail.com')
        cy.contains(/Successfully subbed: danielsmartins19@gmail.com!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed: danielsmartins19@gmail.com!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed: danielsmartins19@gmail.com!/i).should('not.exist')

        cy.get('@subscribe-input').type('danielsmartins19@gmail.io')
        cy.contains(/invalid email: danielsmartins19@gmail.io!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/invalid email: danielsmartins19@gmail.io!/i).should('exist')
        cy.wait(3000)
        cy.contains(/invalid email: danielsmartins19@gmail.io!/i).should('not.exist')

        cy.contains(/fail!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/fail!/i).should('exist')
    })
})