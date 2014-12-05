var fs = require('fs');
var readline = require('readline');

var rs = fs.createReadStream('post.txt');
var ws = fs.createWriteStream('out.txt');
var rl = readline.createInterface({
    input: rs,
    output: ws
});

rl.on('line', function (line) {
    var re = new RegExp('<img(.*)src="http://weed.cocolog-nifty.com/(.*\.)(jpg|png|gif)(.*) />', 'g');
    line = line.replace(re, '<img$1src="http://hoge/$2$3$4 />');

    console.log(line);
});
rl.resume();
//# sourceMappingURL=app.js.map
