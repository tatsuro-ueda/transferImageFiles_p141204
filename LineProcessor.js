var LineProcessor = (function () {
    function LineProcessor(stringLine) {
        this.extractAddresses = function () {
            var re = new RegExp('<img(.*)src="http://weed.cocolog-nifty.com/(.*\.)(jpg|png|gif)(.*) />', 'g');
            line = line.replace(re, '<img$1src="http://hoge/$2$3$4 />');
        };
        this.stringLine = stringLine;
    }
    return LineProcessor;
})();
exports.LineProcessor = LineProcessor;
//# sourceMappingURL=LineProcessor.js.map
