'use strict';
var StringLine = (function () {
    function StringLine(line) {
        var _this = this;
        this.findImage = function () {
            var re = new RegExp('<img(.*)src="http://weed.cocolog-nifty.com/(.*\.)(jpg|png|gif)(.*) />', 'i');
            return _this.lineBefore.match(re)[0];
        };
        this.lineBefore = line;
    }
    return StringLine;
})();
exports.StringLine = StringLine;
//# sourceMappingURL=StringLine.js.map
