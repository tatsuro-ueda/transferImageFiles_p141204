/**
* Created by weed on 14/12/05.
*/
///<reference path='../Scripts/typings/jasmine/jasmine.d.ts' />
///<reference path='../Scripts/typings/node/node.d.ts' />
///<reference path='../Scripts/typings/expect.js/expect.js.d.ts' />
'use strict';
var expect = require('expect.js');
var stringLine = require('../StringLine.js');
var fileToUpload = require('../FileToUpload.js');
var sl;
describe('StringLine', function () {
    beforeEach(function () {
        var sampleLine = 'hoge' + '<img title="Scrn0000_1" height="320" alt="Scrn0000_1" ' + 'src="http://weed.cocolog-nifty.com/wzero3es/images/scrn0000_1.jpg" width="240" border="0" />' + 'geho' + '< img title = "Scrn0001" height = "320" alt = "Scrn0001" ' + 'src = "http://weed.cocolog-nifty.com/wzero3es/images/scrn0001.jpg" width = "240" border ="0" / >' + 'gohu' + '< img title = "Scrn0002" height = "320" alt = "Scrn0002" ' + 'src = "http://weed.cocolog-nifty.com/wzero3es/images/scrn0002.jpg" width = "240" border ="0" / >' + 'gyoe';
        sl = new stringLine.StringLine(sampleLine);
    });
    it('インスタンス化できる', function () {
        expect(sl).not.to.be(undefined);
    });
    it('imgタグを見つける', function () {
        sl.findImageTag();
        expect(sl.lineAfter).to.be('hoge');
        var expectedString = '<img title="Scrn0000_1" height="320" alt="Scrn0000_1" ' + 'src="http://weed.cocolog-nifty.com/wzero3es/images/scrn0000_1.jpg" width="240" border="0" />';
        expect(sl.imageTagBefore).to.be(expectedString);
        var expectedLineBefore = 'geho< img title = "Scrn0001" height = "320" alt = "Scrn0001" ' + 'src = "http://weed.cocolog-nifty.com/wzero3es/images/scrn0001.jpg" width = "240" border ="0" / >' + 'gohu< img title = "Scrn0002" height = "320" alt = "Scrn0002" ' + 'src = "http://weed.cocolog-nifty.com/wzero3es/images/scrn0002.jpg" width = "240" border ="0" / >gyoe';
        expect(sl.lineBefore).to.be(expectedLineBefore);
        sl.findImageTag();
        var expectedString2 = '< img title = "Scrn0001" height = "320" alt = "Scrn0001" ' + 'src = "http://weed.cocolog-nifty.com/wzero3es/images/scrn0001.jpg" width = "240" border ="0" / >';
        expect(sl.imageTagBefore).to.be(expectedString2);
    });
    it('imgタグからimgのアドレスを見つける', function () {
        var expectedAddress = 'http://weed.cocolog-nifty.com/wzero3es/images/scrn0000_1.jpg';
        sl.findImageTag();
        sl.findImageAddress();
        expect(sl.imageAddressBefore).to.be(expectedAddress);
    });
    it('画像のアドレスから画像をダウンロードする', function (done) {
        sl.findImageTag();
        sl.findImageAddress();
        var callback = function () {
        };
        var fu = new fileToUpload.FileToUpload(sl.imageAddressBefore, callback, done);
    });
});
//# sourceMappingURL=StringLine.test.js.map