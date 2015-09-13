var md5 = require('md5');

var Criptografia = function (msg) {
    return md5(msg);
}


module.exports = Criptografia;