

export class Signup{

    elements = {

        HomeRegisterbutton: () => cy.get("nav[class='jsx-59bc8da4669877c8'] li:nth-child(4) a:nth-child(1)"),
        FirstnameInput: () => cy.get("input[placeholder='Enter First Name']"),
        LastnameInput: () => cy.get("input[placeholder='Enter Last Name']"),
        EmailAddressInput: () => cy.get("input[placeholder='Enter Email Address']"),
        PhonenumberInput: () => cy.get("input[placeholder='Enter Phone Number']"),
        PasswordInput: () => cy.get("input[placeholder='Enter Password']"),
        Registerbutton: () => cy.get('.jsx-525decfa2746f01')

    }

    clickHomeRegister(){
        this.elements.HomeRegisterbutton().click();
    }
    
    typefirstname(Firstname){
        this.elements.FirstnameInput().type(Firstname);
    }

    typelastname(Lastname){
        this.elements.LastnameInput().type(Lastname);
    }

    typeemailaddress(email){
        this.elements.EmailAddressInput().type(email);
    }

    typephoneno(PhoneNO){
        this.elements.PhonenumberInput().type(PhoneNO);
    }

    typepassword(password){
        this.elements.PasswordInput().type(password);
    }

    clickregister(){
        this.elements.Registerbutton().click;
    }

}

//module.exports = new Signup();