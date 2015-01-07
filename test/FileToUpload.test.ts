/**
 * Created by weed on 14/12/18.
 */

///<reference path='../Scripts/typings/jasmine/jasmine.d.ts' />
///<reference path='../Scripts/typings/node/node.d.ts' />
///<reference path='../Scripts/typings/expect.js/expect.js.d.ts' />

'use strict';

var expect = require('expect.js');
var async = require('async');
var fileToUpload = require('../FileToUpload.js');

var ftu;

describe('FileToUpload', () => {
    beforeEach((done) => {
        var callback = () => {};
        ftu = new fileToUpload.FileToUpload('http://weed.cocolog-nifty.com/wzero3es/images/scrn0001.jpg', callback, done);
    });

    it('インスタンス化することができる', () => {
        expect(ftu).not.to.be(undefined);
    });

    it('ファイルをアップロードすることができる', (done) => {
        var callback = () => {};
        expect(ftu.uploadToGoogleDrive(callback, done)).to.be.a('string');
    });

    it('アップロードしたファイルのURLを取得できる', (done) => {
        ftu.uploadToGoogleDrive(null, done);
        console.log(ftu.newUrl);
        expect(ftu.newUrl).to.be.a('string');
    })
});