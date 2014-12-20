/**
 * Created by weed on 14/12/18.
 */
'use strict';
var expect = require('expect.js');
var fileUploader = require('../FileUploader.js');
var fu;
describe('FileUploader', function () {
    beforeEach(function () {
        fu = new fileUploader.FileUploader('hoge.jpg');
    });
    it('インスタンス化することができる', function () {
        expect(fu).not.to.be(undefined);
    });
    it('ファイルをアップロードすることができる', function () {
        fu.upload();
    });
});
//# sourceMappingURL=FileUploader.test.js.map