const Page = require('./page');

class RegisterPage extends Page {
  
    get inputFname () { return $('#fname') }
    get inputEmail () { return $('#email') }
    get inputPassword () { return $('#pass') }
    get inputPepPassword () { return $('#rpass') }
    get btnSubmit () { return $('button[type="submit"]') }

    open () {
        return super.open('register');
    }

    submit () {
        this.btnSubmit.click()
    }
}

module.exports = new RegisterPage();
