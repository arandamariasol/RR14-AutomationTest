const LoginPage = require('../pageobjects/login.page');

describe('Login form', () => {

    describe('Login with valid data', () => {
        
        it('Should access with valid credentials', () => {
            LoginPage.open()
            LoginPage.inputEmail.setValue('cami123@gmail.com')
            LoginPage.inputPassword.setValue('abcd1234')
            LoginPage.submit()
    
            LoginPage.verifResults.waitForExist()
            expect(LoginPage.verifResults).toBeDisplayed()
        })

    })
    
    describe('Login with invalid data', () => {

         it('Should deny access with wrong email', () => {
            LoginPage.open()
            LoginPage.inputEmail.setValue('cami123')
            LoginPage.inputPassword.setValue('abcd1234')
            LoginPage.submit()
    
            expect(LoginPage.inputEmailError).toHaveText('Invalid email format')
        })
    
        it('Should deny access with wrong pass', () => {
            LoginPage.open()
            LoginPage.inputEmail.setValue('cami123@gmail.com')
            LoginPage.inputPassword.setValue('12345')
            LoginPage.submit()
    
            expect(LoginPage.inputPassError).toHaveText('Your password must contain at least 8 characters and it must content letters and numbers')
        })
    })

    describe('Redirection to Register Page', () => {

        it('Link redirects correctly to Register Page', () => {
            LoginPage.linkReg.click();
            expect(browser).toHaveUrl('https://arandamariasol.github.io/RR9-Javascript-DOM/register.html');
        })
    });
})