/**
* Created by weed on 14/12/05.
*/
var expect = require('expect.js');
var parserOfExportedFile = require('../ParserOfExportedFile.js');

var efp;

describe('ParserOfExportedFile', function () {
    before(function () {
        efp = new parserOfExportedFile.ParserOfExportedFile('sample.html');
    });

    it('インスタンス化できる', function () {
        expect(efp).not.to.be(undefined);
    });
});
//# sourceMappingURL=ParserOfExportedFile.test.js.map
