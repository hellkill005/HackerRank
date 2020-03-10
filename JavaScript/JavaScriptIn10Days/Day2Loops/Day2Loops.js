'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let letters=s.split('');
    let setV = new Set(['a','e','i','o','u']);
    let arrayV = [];
    let v = 0
    let arrayC = [];
    let c = 0;
    for (let x = 0; x< letters.length;x++){
        if(setV.has(letters[x])){
            arrayV[v]=(letters[x]);
            v++;
        }
        else{
            arrayC[c]=(letters[x]);
            c++;
        }
        
    }
    for (let x = 0; x< arrayV.length; x++){
        console.log(arrayV[x]);
    }
    for (let x = 0; x< arrayC.length; x++){
        console.log(arrayC[x]);
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}