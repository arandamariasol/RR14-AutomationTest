const Page = require('./page');

class LoginPage extends Page {
  
    get inputEmail () { return $('#email') }
    get inputPassword () { return $('#pass') }
    get btnSubmit () { return $('button[type="submit"]') }
    get inputEmailError () { return $('#email-err') }
    get inputPassError () { return $('#pass-err') }
    get verifResults () { return $('#val-res') }
    get linkReg () { return $('#hrefok') }

    open () {
        return super.open('login');
    }

    submit () {
        this.btnSubmit.click()
    }
}

module.exports = new LoginPage();
