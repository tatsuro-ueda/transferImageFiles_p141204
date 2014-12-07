'use strict';

import fileUploader = require('FileUploader.js');

export class StringLine {
    lineBefore: string;
    lineAfter: string = '';
    imageTagBefore: string;
    imageAddressBefore: string;

    constructor(line) {
        this.lineBefore = line;
    }
    
    findImageTag = () => {
        var reTag = new RegExp('^(.*)(<\s?img .*src="http://weed.cocolog-nifty.com/.*\.(jpg|png|gif)" .* />)(.*)');
        this.lineAfter += this.lineBefore.replace(reTag, '$1');
        this.imageTagBefore = this.lineBefore.replace(reTag, '$2');
        this.lineBefore = this.lineBefore.replace(reTag, '$4');
    }

    findImageAddress = () => {
        var reAddress = new RegExp('<\s?img .*src="(http://.*\.(jpg|png|gif))" (.*) />');
        this.imageAddressBefore = this.imageTagBefore.replace(reAddress, '$1');
    }

    //replaceImageTag = () => {
    //    var imageTagBefore = this.findImageTag();
    //    var imageLocationBefore = this.findImageLocation();
    //    var imageTagAfter = imageTagBefore.replace(this.reTag, '<img$1src="http://hoge/$2$3$4 />');
    //    return imageTagAfter;
    //}
}