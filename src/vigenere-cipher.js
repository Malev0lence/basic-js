var alf = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

class VigenereCipheringMachine {

    constructor(isReverse) {
        if (isReverse === undefined) {
            this.isReverse = true;
        } else {
            this.isReverse = isReverse;
        }
    }

    encrypt(text, key) {
        if (!text || !key) throw new Error();

        var arrText = text.toLowerCase().split('');
        var arrKey = key.toLowerCase().split('');
        var arrDifference = [];
        var result = [];
        for (var i = 0; i < arrText.length; i++) {
            if (alf.includes(arrText[i])) {
                if (arrKey.length < arrText.length) {
                    arrKey.push(arrKey[i]);
                }
                if (((alf.indexOf(arrText[i])) + (alf.indexOf(arrKey[i])) >= 26)) {
                    arrDifference.push(((alf.indexOf(arrText[i])) + (alf.indexOf(arrKey[i]))) - 26);
                } else {
                    arrDifference.push(((alf.indexOf(arrText[i])) + (alf.indexOf(arrKey[i]))));
                }
                result.push(alf[arrDifference[i]]);
            } else {
                result.push(arrText[i]);
                arrKey.splice(i, 0, ' ');
                arrDifference.splice(i, 0, arrText[i]);
            }
        }
        return this.isReverse ? result.join('').toUpperCase() : result.reverse().join('').toUpperCase();
    }

    decrypt(cipher, key) {
        if (!cipher || !key) throw new Error();

        var arrCipher = cipher.toLowerCase().split('');
        var arrKey = key.toLowerCase().split('');
        var arrDifference = [];
        var result = [];
        for (var i = 0; i < arrCipher.length; i++) {
            if (alf.includes(arrCipher[i])) {
                if (arrKey.length < arrCipher.length) {
                    arrKey.push(arrKey[i]);
                }
                if (alf.indexOf(arrCipher[i]) < alf.indexOf(arrKey[i])) {
                    arrDifference.push(((alf.indexOf(arrCipher[i])) - (alf.indexOf(arrKey[i]))) + 27);
                } else {
                    arrDifference.push(((alf.indexOf(arrCipher[i])) - (alf.indexOf(arrKey[i]))) + 1);
                }
                result.push(alf[arrDifference[i] - 1]);
            } else {
                result.push(arrCipher[i]);
                arrKey.splice(i, 0, ' ');
                arrDifference.splice(i, 0, arrCipher[i]);
            }
        }
        return this.isReverse ? result.join('').toUpperCase() : result.reverse().join('').toUpperCase();
    }
}

module.exports = VigenereCipheringMachine;