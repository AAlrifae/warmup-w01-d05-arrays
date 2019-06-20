// Create a function that takes an array of integers as an argument and returns an array, 
// where the first element is the count of positive numbers and the second element is sum of negative numbers.

const countAndSumOf = function(arr) {

    let count = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            count += 1;
            
        } else if (arr[i]<0) {
            sum += arr[i]
        }
        
    }
    console.log(count,sum)
}
countAndSumOf()

