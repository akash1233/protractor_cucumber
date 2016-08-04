describe('wehkamp site', function() {
    it('should have a kinderen page', function() {
        browser.get('http://www.wehkamp.com/nlbe');

        element(by.buttonText('Sluiten')).click();
        element(by.linkText('KINDEREN')).click();

        var header = $('h1');

        expect(header.getText()).toEqual('Kinderen');
    });


    it('should have a heren page', function() {
        // Load the AngularJS homepage.
        browser.get('http://www.wehkamp.com/nlbe');

        //element(by.buttonText('Sluiten')).click();
        element(by.linkText('HEREN')).click();

        var header = $('h1');

        expect(header.getText()).Equal('Heren');
    });
});
