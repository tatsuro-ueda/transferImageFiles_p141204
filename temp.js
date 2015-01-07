/**
* Created by weed on 14/12/22.
*/
///<reference path='Scripts/typings/async/async.d.ts' />
///<reference path='Scripts/typings/node/node.d.ts' />
var async = require('async');
var fileToUpload = require('./FileToUpload.js');

var fu;

async.waterfall([
    function (callback) {
        /*** At first, download image file ***/
        fu = new fileToUpload.FileToUpload('http://weed.cocolog-nifty.com/wzero3es/images/scrn0000_1.jpg', callback);
    },
    function (argFu, callback) {
        /*** Secondary, upload the image file to Google Drive ***/
        argFu.uploadToGoogleDrive(callback);
    },
    function (argFu, callback) {
        console.log(argFu.newUrl);
        callback(null, 'done');
    }
]);
//# sourceMappingURL=temp.js.map
