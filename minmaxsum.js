/*Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.*/

let num = [5, 3, 4, 9, 10]
/*The destructuring 
assignment syntax is a JavaScript expression that makes it possible to extract data 
from arrays or objects into distinct variables.*/
function miniMaxSum(arr) {
    let maxSum = arr.reduce((total, el) => {
        return total + el
    })
    let minSum = arr.reduce((total, el) => {
        return total + el
    })
    console.log(maxSum - Math.min(...arr), minSum - Math.max(...arr)) //use o spread para quebrar a array
}