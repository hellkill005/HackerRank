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
 * Create the function factorial here
 */
function factorial(n){
    var result = 1;
    /*
    for(var x = 1; x<=n;x++){       //increasing
        result *=x;
    }
    */
    for(var x = n; x > 0; x--){     //decresing 
        result *=x
    }
    return result;
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}