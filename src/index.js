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
    let someText = '';
    let fullText = '';
    let count = 0;
    for (let i = 0; expr.length>i ; i+=2) {
        if (count == 10) {
            console.log(someText)
            if (someText == '*****') {
                fullText += ' ';
            } else {
                fullText += MORSE_TABLE[someText];
            }
            console.log(fullText)
            count = 0;
            someText = '';
        }
        let a = expr.slice(i,(i+2));
        if (a==10) {
            someText += '.';
            count +=2;
        } else if (a==11) {
            someText += '-';
            count +=2;
        } else if (a == 00) {
            count +=2;
        } else if (a == '**') {
            someText += '*';
            count +=2;
        }
    }
    return fullText
}

module.exports = {
    decode
}
