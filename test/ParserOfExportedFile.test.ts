/**
* Created by weed on 14/12/05.
*/

var expect = require('expect.js');
var parserOfExportedFile = require('../ParserOfExportedFile.js');

var efp;

describe('ParserOfExportedFile', () => {
    before(() => {
        efp = new parserOfExportedFile.ParserOfExportedFile('sample.html');
    });

    it('インスタンス化できる', () => {
        expect(efp).not.to.be(undefined);
    });
});