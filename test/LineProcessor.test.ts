/**
* Created by weed on 14/12/05.
*/

var expect = require('expect.js');
var lineProcessor = require('../LineProcessor.js');

var lp;

describe('LineProcessor', () => {
    before(() => {
        var sampleLine = '<img title="Scrn0000_1" height="320" alt="Scrn0000_1" src="http://weed.cocolog-nifty.com/wzero3es/images/scrn0000_1.jpg" width="240" border="0" />'
            + '< img title = "Scrn0001" height = "320" alt = "Scrn0001" src = "http://weed.cocolog-nifty.com/wzero3es/images/scrn0001.jpg" width = "240" border ="0" / >'
            + '< img title = "Scrn0002" height = "320" alt = "Scrn0002" src = "http://weed.cocolog-nifty.com/wzero3es/images/scrn0002.jpg" width = "240" border ="0" / > ';
        lp = new lineProcessor.LineProcessor(sampleLine);
    });

    it('インスタンス化できる', () => {
        expect(lp).not.to.be(undefined);
    });
});