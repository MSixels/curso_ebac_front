/// <reference types="cypress" />

describe('Testes de funcionalidades da agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um novo contato', () => {
        cy.get('[type="text"]').type('Adicionado')
        cy.get('[type="email"]').type('Adicionado_contato@gmail.com')
        cy.get('[type="tel"]').type('54 12345678')
        cy.get('.adicionar').click()
    })

    it('Deve modificar um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()

        cy.get('[type="text"]').clear()
        cy.get('[type="email"]').clear()
        cy.get('[type="tel"]').clear()
        cy.get('[type="text"]').type('Modificado')
        cy.get('[type="email"]').type('contao_modificado@gmail.com')
        cy.get('[type="tel"]').type('54 87654321')
        cy.get('.alterar').click()
        cy.wait(2000)
    })

    it('Deve remover um contato', () => {

        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()

    })
})