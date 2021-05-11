const Page = require('./page');

class RegisterPage extends Page {
  
    get inputFname () { return $('#fname') }
    get inputEmail () { return $('#email') }
    get inputPassword () { return $('#pass') }
    get inputRepPassword () { return $('#rpass') }
    get inputFnameError () { return $('#name-err') }
    get inputEmailError () { return $('#email-err') }
    get inputPassError () { return $('#pass-err') }
    get inputRepPassError () { return $('#rpass-err') }
    get btnSubmit () { return $('button[type="submit"]') }
    get verifResults () { return $('#val-res') }
    get linkLog () { return $('a') }


    open () {
        return super.open('register');
    }

    submit () {
        this.btnSubmit.click()
    }


}

module.exports = new RegisterPage();


