/**
 * Created by weed on 14/12/22.
 */

import async = require('async');
var fileToUpload = require('./FileToUpload.js');

var fu;

async.waterfall([
    (callback) => {
        /*** At first, download image file ***/
        fu = new fileToUpload.FileToUpload('http://weed.cocolog-nifty.com/wzero3es/images/scrn0000_1.jpg', callback);
    },
    (arg, callback) => {
        /*** Secondary, upload the image file to Google Drive ***/
        arg.uploadToGoogleDrive(callback);
    },
    (arg, callback) => {
        console.log(arg);
        callback(null, 'done');
    }
]);
