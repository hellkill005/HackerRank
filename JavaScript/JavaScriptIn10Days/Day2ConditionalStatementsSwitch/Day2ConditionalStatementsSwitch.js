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

function getLetter(s) {
    let letter;
    let setA = new Set(['a','e','i','o','u'])
    let setB = new Set(['b','c','d','f','g'])
    let setC = new Set(['h','j','k','l','m'])
    let setD = new Set(['n','p','q','r','s','t','v','w','x','y','z'])
    var s = s[0]

    // Write your code here
    switch(setA.has(s)?'A':setB.has(s)?'B':setC.has(s)?'C':setD.has(s)?'D':'Undefine'){
        case ('A'):
            return 'A';
            break;
        case ('B'):
            return 'B';
            break;
        case ('C'):
            return 'C';
            break;
        case ('D'):
            return 'D';
            break;
    }
    
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}