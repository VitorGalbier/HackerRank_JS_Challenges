let arr = [3, 4, 5, 9, 12, 4, 1]
function getSecondLargest(nums) {
    let largest = nums[0];//3
    let secondLargest = nums[0];//3

    for (let i = 1; i < nums.length; i++) {
        if (nums[i]/*4*/ > largest/*9*/) {
            secondLargest = largest;//9
            largest = nums[i];//12
            continue;
        }

        if ((nums[i] > secondLargest) && (nums[i] < largest)) {
            secondLargest = nums[i];
        }
    }

    return secondLargest;
}