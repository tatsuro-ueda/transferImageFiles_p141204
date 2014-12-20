/**
 * Created by weed on 14/12/18.
 */

'use strict';

var expect = require('expect.js');
var fileUploader = require('../FileUploader.js');

var fu;

describe('FileUploader', () => {
    beforeEach(() => {
        fu = new fileUploader.FileUploader('hoge.jpg');
    });

    it('インスタンス化することができる', () => {
        expect(fu).not.to.be(undefined);
    });

    it('ファイルをアップロードすることができる', () => {
        fu.upload();
    });
});