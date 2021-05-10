
describe ('Google Page - Find Wikipedia', () => {

    it('Open Google page', () => {
        browser.url('https://www.google.com/')
    });

    it('Find input, complete it with the word "wikipedia" and press Enter', () => {
        let input = $('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input');
        input.addValue('wikipedia');
        browser.keys('Enter')
    });

    it('Find Wikipedia link page, click on it, and check the correct opened Page', () => {
        let linkWiki = $('#rso > div:nth-child(1) > div:nth-child(1) > div > div > div.yuRUbf > a');
        linkWiki.click();
        expect(browser).toHaveUrl('https://es.wikipedia.org/wiki/Wikipedia:Portada');
    });
})