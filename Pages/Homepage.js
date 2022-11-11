

class Homepage {

    elements = {
        displayMsg: () => cy.get("div[class='example'] h2")
    }

}

module.exports = new Homepage();
