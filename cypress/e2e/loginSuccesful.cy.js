
import LoginPage from '../../Pages/LoginPage'
//import Homepage from '../../Pages/Homepage'



describe('Login', ()=>{

    it('login su',() => {
        cy.visit('https://soraia.herokuapp.com/login')

        LoginPage.typeUsername('tomsmith')
        LoginPage.typePassword('SuperSecretPassword!')
        LoginPage.clickLogin()
       

    

    })
    it('if succesful display', () =>{
    LoginPage.elements.displayMsg().should('have.text',' Secure Area')
    })

})