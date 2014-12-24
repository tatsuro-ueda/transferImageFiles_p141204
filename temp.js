/**
 * Created by weed on 14/12/22.
 */
var async = require('async');
var fileToUpload = require('./FileToUpload.js');
var fu;
async.waterfall([
    function (callback) {
        /*** At first, download image file ***/
        fu = new fileToUpload.FileToUpload('http://weed.cocolog-nifty.com/wzero3es/images/scrn0000_1.jpg', callback);
    },
    function (arg, callback) {
        /*** Secondary, upload the image file to Google Drive ***/
        arg.uploadToGoogleDrive(callback);
    },
    function (arg, callback) {
        console.log(arg);
        callback(null, 'done');
    }
]);
//# sourceMappingURL=temp.js.map