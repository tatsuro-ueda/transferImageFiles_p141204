'use strict';

export class StringLine {
    lineBefore: string;
    lineAfter: string;

    constructor(line) {
        this.lineBefore = line;
    }

    findImage = () => {
        var re = new RegExp('<img(.*)src="http://weed.cocolog-nifty.com/(.*\.)(jpg|png|gif)(.*) />', 'i');
        return this.lineBefore.match(re)[0];
    }
}