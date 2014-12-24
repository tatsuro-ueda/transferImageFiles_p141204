'use strict';
var StringLine = (function () {
    function StringLine(line) {
        var _this = this;
        // 画像アドレス変換後の文字列行
        this.lineAfter = '';
        this.findImageTag = function () {
            var reTag = /^(.*?)(<\s?img .*? src\s?=\s?"http:\/\/weed\.cocolog-nifty\.com\/.*?\.(jpg|png|gif)" .*? \/\s?>)(.*)$/;
            //var reTag = new RegExp('^(.*?)(<\s?img .*? src\s?=\s?"http:\/\/weed\.cocolog-nifty\.com\/.*?\.(jpg|png|gif)" .*? \/\s?>)(.*)$');
            if (_this.lineBefore.match(reTag) != null) {
                _this.lineAfter += _this.lineBefore.replace(reTag, '$1');
                _this.imageTagBefore = _this.lineBefore.replace(reTag, '$2');
                _this.lineBefore = _this.lineBefore.replace(reTag, '$4');
            }
        };
        this.findImageAddress = function () {
            var reAddress = /.*?(http:\/\/.*?\.(jpg|png|gif)).*/;
            //var reAddress = /<\s?img .*\s?src\s?=\s?"(http:\/\/.*\.(jpg|png|gif))" .* \/\s?>/;
            if (_this.imageTagBefore.match(reAddress) != null) {
                _this.imageAddressBefore = _this.imageTagBefore.replace(reAddress, '$1');
            }
        };
        this.lineBefore = line;
    }
    return StringLine;
})();
exports.StringLine = StringLine;
//# sourceMappingURL=StringLine.js.map