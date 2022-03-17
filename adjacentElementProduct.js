//adjancentElementProduct

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.

// 7 and 3 produce the largest product.


function solution(inputArray) {
    const result = []
        for(i = 0; i < inputArray.length - 1; i++) {
            const x = inputArray[i] * inputArray[i+1]
            result.push(x)
        }
    }
return Math.max(...result)