var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

class VigenerecryptedStringMachine {

    constructor(isReverse) {
        if (isReverse === undefined) {
            this.isReverse = true;
        } else {
            this.isReverse = isReverse;
        }
    }

    encrypt(str, key) {
        if (!str || !key) throw new Error('Wrong str or no key');

        var arrStr = str.toLowerCase().split('');
        var arrKey = key.toLowerCase().split('');
        var arrDiff = [];
        var result = [];
        for (var i = 0; i < arrStr.length; i++) {
            if (alphabet.includes(arrStr[i])) {
                if (arrKey.length < arrStr.length) {
                    arrKey.push(arrKey[i]);
                }
                if (((alphabet.indexOf(arrStr[i])) + (alphabet.indexOf(arrKey[i])) >= 26)) {
                    arrDiff.push(((alphabet.indexOf(arrStr[i])) + (alphabet.indexOf(arrKey[i]))) - 26);
                } else {
                    arrDiff.push(((alphabet.indexOf(arrStr[i])) + (alphabet.indexOf(arrKey[i]))));
                }
                result.push(alphabet[arrDiff[i]]);
            } else {
                result.push(arrStr[i]);
                arrKey.splice(i, 0, ' ');
                arrDiff.splice(i, 0, arrStr[i]);
            }
        }
        return this.isReverse ? result.join('').toUpperCase() : result.reverse().join('').toUpperCase();
    }

    decrypt(cryptedStr, key) {
        if (!cryptedStr || !key) throw new Error();

        var arrCryptedStr = cryptedStr.toLowerCase().split('');
        var arrKey = key.toLowerCase().split('');
        var arrDiff = [];
        var result = [];
        for (var i = 0; i < arrCryptedStr.length; i++) {
            if (alphabet.includes(arrCryptedStr[i])) {
                if (arrKey.length < arrCryptedStr.length) {
                    arrKey.push(arrKey[i]);
                }
                if (alphabet.indexOf(arrCryptedStr[i]) < alphabet.indexOf(arrKey[i])) {
                    arrDiff.push(((alphabet.indexOf(arrCryptedStr[i])) - (alphabet.indexOf(arrKey[i]))) + 27);
                } else {
                    arrDiff.push(((alphabet.indexOf(arrCryptedStr[i])) - (alphabet.indexOf(arrKey[i]))) + 1);
                }
                result.push(alphabet[arrDiff[i] - 1]);
            } else {
                result.push(arrCryptedStr[i]);
                arrKey.splice(i, 0, ' ');
                arrDiff.splice(i, 0, arrCryptedStr[i]);
            }
        }
        return this.isReverse ? result.join('').toUpperCase() : result.reverse().join('').toUpperCase();
    }
}

module.exports = VigenerecryptedStringMachine;