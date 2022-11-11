

export class SwaglabLoginPage{
    elements = {

        usernameInput: () => cy.get('#username'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('#log-in')
    }

    typeUsernamee(username){
        this.elements.usernameInput().type(username)
    }    

    typePasswordd(password){
        this.elements.passwordInput().type(password);
    }

    clickLoginn(){
        this.elements.loginButton.click()
    }

}

