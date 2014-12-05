﻿/**
* Created by weed on 14/12/05.
*/
var expect = require('expect.js');
var stringLine = require('../StringLine.js');

var line;

describe('StringLine', function () {
    before(function () {
        var sampleLine = '<img title="Scrn0000_1" height="320" alt="Scrn0000_1" src="http://weed.cocolog-nifty.com/wzero3es/images/scrn0000_1.jpg" width="240" border="0" />' + '< img title = "Scrn0001" height = "320" alt = "Scrn0001" src = "http://weed.cocolog-nifty.com/wzero3es/images/scrn0001.jpg" width = "240" border ="0" / >' + '< img title = "Scrn0002" height = "320" alt = "Scrn0002" src = "http://weed.cocolog-nifty.com/wzero3es/images/scrn0002.jpg" width = "240" border ="0" / > ';
        line = new stringLine.StringLine(sampleLine);
    });

    it('インスタンス化できる', function () {
        expect(line).not.to.be(undefined);
    });

    it('imgタグを見つける', function () {
        var imageTag = line.findImage();
        var expectedString = '<img title="Scrn0000_1" height="320" alt="Scrn0000_1" src="http://weed.cocolog-nifty.com/wzero3es/images/scrn0000_1.jpg" width="240" border="0" />';
        expect(imageTag).to.be(expectedString);
    });
});
//# sourceMappingURL=StringLine.test.js.map