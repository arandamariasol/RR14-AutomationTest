const LoginPage = require('../pageobjects/login.page');

describe('Login form', () => {
    it('should deny access with wrong creds', () => {
        LoginPage.open()
        LoginPage.inputEmail.setvalue('cami123')
        LoginPage.inputPassword.setvalue('abcd1234')
        LoginPage.submit()

        expect(LoginPage.inputEmailError).toHaveText('Invalid email format')
    })

    it('should deny access with wrong creds', () => {
        LoginPage.open()
        LoginPage.inputEmail.setvalue('cami123@gmail.com')
        LoginPage.inputPassword.setvalue('12345')
        LoginPage.submit()

        expect(LoginPage.inputEmailError).toHaveText('Your password must contain at least 8 characters and it must content letters and numbers')
    })


})