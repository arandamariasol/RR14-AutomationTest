const RegisterPage = require('../pageobjects/register.page');

describe('Register form', () => {
    describe('Regiter with valid data', () => {
        it('Should access with valid credentials', () => {
            RegisterPage.open()
            RegisterPage.inputFname.setValue('camila perez')
            RegisterPage.inputEmail.setValue('cami123@gmail.com')
            RegisterPage.inputPassword.setValue('abcd1234')
            RegisterPage.inputRepPassword.setValue('abcd1234')
            RegisterPage.submit()
    
            RegisterPage.verifResults.waitForExist()
            expect(RegisterPage.verifResults).toBeDisplayed()
            
        })
    })

    describe('Register with invalid data', () => {

        it('Should deny access with wrong name', () => {
            RegisterPage.open()
            RegisterPage.inputFname.setValue('12')
            RegisterPage.inputEmail.setValue('cami123@gmail.com')
            RegisterPage.inputPassword.setValue('abcd1234')
            RegisterPage.inputRepPassword.setValue('abcd1234')
            RegisterPage.submit()
    
            expect(RegisterPage.inputFnameError).toHaveText('Your full name must contain at least 6 characters and a space')
        })
    
        it('Should deny access with wrong email', () => {
            RegisterPage.open()
            RegisterPage.inputFname.setValue('camila perez')
            RegisterPage.inputEmail.setValue('cami123')
            RegisterPage.inputPassword.setValue('abcd1234')
            RegisterPage.inputRepPassword.setValue('abcd1234')
            RegisterPage.submit()
    
            expect(RegisterPage.inputEmailError).toHaveText('Invalid email format')
        })

        it('Should deny access with wrong password', () => {
            RegisterPage.open()
            RegisterPage.inputFname.setValue('camila perez')
            RegisterPage.inputEmail.setValue('cami123@gmail.com')
            RegisterPage.inputPassword.setValue('1234')
            RegisterPage.inputRepPassword.setValue('1234')
            RegisterPage.submit()
    
            expect(RegisterPage.inputPassError).toHaveText('Your password must contain at least 8 characters and it must content letters and numbers')
        })

        it('Should deny access with wrong password repeated', () => {
            RegisterPage.open()
            RegisterPage.inputFname.setValue('camila perez')
            RegisterPage.inputEmail.setValue('cami123@gmail.com')
            RegisterPage.inputPassword.setValue('abcd1234')
            RegisterPage.inputRepPassword.setValue('ab12')
            RegisterPage.submit()
    
            expect(RegisterPage.inputRepPassError).toHaveText('Passwords do not match')
        })
        
    })

    describe('Redirection to Login Page', () => {

        it('Link redirects correctly to Login Page', () => {
            RegisterPage.linkLog.click();
            expect(browser).toHaveUrl('https://arandamariasol.github.io/RR9-Javascript-DOM/login.html');
        })
    })
})