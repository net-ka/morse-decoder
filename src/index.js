const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let singleArr = expr.split('');
    let tenArr = [];

    for (i = 10; i <= singleArr.length; i += 10 ) {
        tenArr.push(singleArr.slice((i - 10), i));
    }

    let tenTwiceArr = [];

    for (i = 0; i < tenArr.length; i ++) {
        let bufferTwiceArr = [];
        for ( k = 0; k < tenArr[i].length; k += 2 ) {
            bufferTwiceArr.push(tenArr[i][k] + '' + tenArr[i][k + 1]);
        }
        tenTwiceArr.push(bufferTwiceArr);
    }

    for (i = 0; i < tenTwiceArr.length; i ++) {
        for ( k = 0; k < tenTwiceArr[i].length; k ++ ) {
            if (tenTwiceArr[i][k] === '00') {
                tenTwiceArr[i][k] = '';
            }
            if (tenTwiceArr[i][k] === '10') {
                tenTwiceArr[i][k] = '.';
            }
            if (tenTwiceArr[i][k] === '11') {
                tenTwiceArr[i][k] = '-';
            }
        }
    }

    let signsArr = [];
    for (i = 0; i < tenTwiceArr.length; i ++) {
        if (tenTwiceArr[i] === '') {
            tenTwiceArr[i] = ' ';
        }
        signsArr.push(tenTwiceArr[i].join(''));
    }

    for (i = 0; i < signsArr.length; i ++) {
        if (signsArr[i] in MORSE_TABLE) {
            let a = signsArr[i];
            signsArr[i] = MORSE_TABLE[a];
        } else {
            signsArr[i] = ' ';
        }
    }

    return signsArr.join('');
}

module.exports = {
    decode
}