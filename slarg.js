let num = [2, 3, 5, 6, 6]

function getSecondLargest(nums) {
    let ordenado = nums.sort()
    console.log(indexOf(Math.max(...ordenado)))
}
getSecondLargest(num)