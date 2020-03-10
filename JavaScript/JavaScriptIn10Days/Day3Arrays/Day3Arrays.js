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

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let high1;
    let high2;
    if(nums[0]-nums[1]>0){
        high1 = nums[0];
        high2 = nums[1];
    }
    else{
        high1 = nums[1];
        high2 = nums[0];
    }
    for(let x = 0; x<nums.length;x++){
        if(nums[x]>high1){
            high2 = high1;
            high1 = nums[x];
        }
        else if(nums[x]>high2 && nums[x]!= high1){
            high2 = nums[x];
        }
    }
    return high2;
}





function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}