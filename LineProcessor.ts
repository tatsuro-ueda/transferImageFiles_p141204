export class LineProcessor {
    stringLine;

    constructor(stringLine) {
        this.stringLine = stringLine;
    }

    extractAddresses = () => {
        var re = new RegExp('<img(.*)src="http://weed.cocolog-nifty.com/(.*\.)(jpg|png|gif)(.*) />', 'g');
        line = line.replace(re, '<img$1src="http://hoge/$2$3$4 />');

    }
}