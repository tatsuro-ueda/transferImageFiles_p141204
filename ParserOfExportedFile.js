var fs = require('fs');
var readline = require('readline');

var ParserOfExportedFile = (function () {
    function ParserOfExportedFile(filePath) {
        var _this = this;
        this.parse = function () {
            var rs = fs.createReadStream(_this.filePath);
            var ws = fs.createWriteStream('out.txt');
            var rl = readline.createInterface({
                input: rs,
                output: ws
            });
        };
        this.filePath = filePath;
    }
    return ParserOfExportedFile;
})();
exports.ParserOfExportedFile = ParserOfExportedFile;
//# sourceMappingURL=ParserOfExportedFile.js.map
