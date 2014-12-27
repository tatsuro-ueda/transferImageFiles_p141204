/**
 * Created by weed on 14/12/18.
 */
///<reference path='../Scripts/typings/jasmine/jasmine.d.ts' />
///<reference path='../Scripts/typings/node/node.d.ts' />
///<reference path='../Scripts/typings/expect.js/expect.js.d.ts' />
'use strict';
var expect = require('expect.js');
var fileToUpload = require('../FileToUpload.js');
var fu;
describe('FileToUpload', function () {
    beforeEach(function (done) {
        var callback = function () {
        };
        fu = new fileToUpload.FileToUpload('http://weed.cocolog-nifty.com/wzero3es/images/scrn0001.jpg', callback, done);
    });
    it('インスタンス化することができる', function () {
        expect(fu).not.to.be(undefined);
    });
    it('ファイルをアップロードすることができる', function (done) {
        var callback = function (arg, id) {
            console.log(id, '\n');
        };
        expect(fu.uploadToGoogleDrive(callback, done)).to.be.a('string');
    });
});
//# sourceMappingURL=FileToUpload.test.js.map