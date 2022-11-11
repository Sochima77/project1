
class LoginPage{

    elements = {
    usernameInput: () => cy.get('#username'),
    passwordInput: () => cy.get('#password'),
    loginButton: () => cy.get('.icon-2x.icon-signin'),
    displayMsg: () => cy.get("div[class='example'] h2")
    }

    typeUsername(username){
        this.elements.usernameInput().type(username);
    }
    
    typePassword(password){
        this.elements.passwordInput().type(password)
    }

    clickLogin(){
        this.elements.loginButton().click()
    }

    confirmlogin(){
        this.elements.displayMsg()
    }

}

module.exports = new LoginPage();