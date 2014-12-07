/**
* Created by weed on 14/12/05.
*/
'use strict';
var expect = require('expect.js');
var stringLine = require('../StringLine.js');
var sl;
describe('StringLine', function () {
    before(function () {
        var sampleLine = 'hoge' + '<img title="Scrn0000_1" height="320" alt="Scrn0000_1" src="http://weed.cocolog-nifty.com/wzero3es/images/scrn0000_1.jpg" width="240" border="0" />' + 'geho' + '< img title = "Scrn0001" height = "320" alt = "Scrn0001" src = "http://weed.cocolog-nifty.com/wzero3es/images/scrn0001.jpg" width = "240" border ="0" / >' + 'gohu' + '< img title = "Scrn0002" height = "320" alt = "Scrn0002" src = "http://weed.cocolog-nifty.com/wzero3es/images/scrn0002.jpg" width = "240" border ="0" / > ' + 'gyoe';
        sl = new stringLine.StringLine(sampleLine);
    });
    it('インスタンス化できる', function () {
        expect(sl).not.to.be(undefined);
    });
    it('imgタグを見つける', function () {
        var expectedImageTagBefore = '<img title="Scrn0000_1" height="320" alt="Scrn0000_1" src="http://weed.cocolog-nifty.com/wzero3es/images/scrn0000_1.jpg" width="240" border="0" />';
        var expectedLineBefore = 'geho< img title = "Scrn0001" height = "320" alt = "Scrn0001" src = "http://weed.cocolog-nifty.com/wzero3es/images/scrn0001.jpg" width = "240" border ="0" / >gohu< img title = "Scrn0002" height = "320" alt = "Scrn0002" src = "http://weed.cocolog-nifty.com/wzero3es/images/scrn0002.jpg" width = "240" border ="0" / > gyoe';
        sl.findImageTag();
        expect(sl.lineAfter).to.be('hoge');
        expect(sl.imageTagBefore).to.be(expectedImageTagBefore);
        expect(sl.lineBefore).to.be(expectedLineBefore);
    });
    it('imgタグからimgのアドレスを見つける', function () {
        var expectedAddress = 'http://weed.cocolog-nifty.com/wzero3es/images/scrn0000_1.jpg';
        sl.findImageTag();
        sl.findImageAddress();
        expect(sl.imageAddressBefore).to.be(expectedAddress);
    });
});
//# sourceMappingURL=StringLine.test.js.map