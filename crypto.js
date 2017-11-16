const crypto = require('crypto');

const secret = 'abcdefg';


const hash = crypto.createHmac("sha256",secret).update('i love cupcakes'
).digest('hex');

console.log(hash);

const cert = require('crypto').Certificate();

const spkac = getSpkacSomehow();

const challenge = cert.exportChallenge(spakac);

console.log(challenge.toString('utf-8'));
