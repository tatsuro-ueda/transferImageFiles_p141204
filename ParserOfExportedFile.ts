import fs = require('fs');
import readline = require('readline');

export class ParserOfExportedFile {
    filePath;

    constructor(filePath) {
        this.filePath = filePath;
    }

    parse = () => {
        var rs = fs.createReadStream(this.filePath);
        var ws = fs.createWriteStream('out.txt');
        var rl = readline.createInterface({
            input: rs,
            output: ws
        });
    }
}