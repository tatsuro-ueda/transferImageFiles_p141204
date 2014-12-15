'use strict';

import fileUploader = require('FileUploader.js');

export class StringLine {
    // 残っている画像アドレス変換前の文字列行
    lineBefore: string;
    // 画像アドレス変換後の文字列行
    lineAfter: string = '';
    // 画像アドレス変換前の画像タグ
    imageTagBefore: string;
    // 画像アドレス変換前の画像アドレス
    imageAddressBefore: string;
    // 画像タグが残っているか
    hasImageTag: boolean;

    constructor(line) {
        this.lineBefore = line;
    }
    
    findImageTag = () => {
        var reTag = new RegExp(
            '^(.*)(<\s?img .*? src\s?=\s?"http://weed\.cocolog-nifty\.com/.*?\.(jpg|png|gif)" .*? /\s?>)(.*)$');

        if (this.lineBefore.match(reTag) != null) {
            this.lineAfter     += this.lineBefore.replace(reTag, '$1');
            this.imageTagBefore = this.lineBefore.replace(reTag, '$2');
            this.lineBefore     = this.lineBefore.replace(reTag, '$4');
        }
    }

    findImageAddress = () => {
        var reAddress = new RegExp('<\s?img .*src="(http://.*\.(jpg|png|gif))" .* />');
        this.imageAddressBefore = this.imageTagBefore.replace(reAddress, '$1');
    }

    //replaceImageTag = () => {
    //    var imageTagBefore = this.findImageTag();
    //    var imageLocationBefore = this.findImageLocation();
    //    var imageTagAfter = imageTagBefore.replace(this.reTag, '<img$1src="http://hoge/$2$3$4 />');
    //    return imageTagAfter;
    //}
}