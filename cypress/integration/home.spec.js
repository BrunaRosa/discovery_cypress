import signupPage from '../pages/SignupPage'

describe('home page', ()=> {

    it("App  should be online", ()=>{

        signupPage.go()

        cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')

    })

})