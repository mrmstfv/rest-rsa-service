const RSA = require('node-rsa');

exports.keyGen = (options) => {
    const key = new RSA(options);
    return key;
}