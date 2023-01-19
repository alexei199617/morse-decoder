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
        let a = expr.slice(i,(i+2));
        if (a==10) {
            someText += '.';
        } else if (a==11) {
            someText += '-';
        } else if (a == '**') {
            someText += '*';
        }
        count +=2;
        if (count == 10) {
            if (someText == '*****') {
                fullText += ' ';
            } else {
                fullText += MORSE_TABLE[someText];
            }
            count = 0;
            someText = '';
        }
    }
    return fullText
}

module.exports = {
    decode
}
