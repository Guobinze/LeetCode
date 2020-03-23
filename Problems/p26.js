/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const size = nums.length;
    let showP = 0;
    //使用快慢指针来记录遍历的坐标。
    // 开始时这两个指针都指向第一个数字
    // 如果两个指针指的数字相同，则快指针向前走一步
    // 如果不同，则两个指针都向前走一步
    // 当快指针走完整个数组后，慢指针当前的坐标加 1 就是数组中不同数字的个数
    // 也就是快指针无论如何都会向前走一步
    for (let fastP = 0; fastP < size; fastP++) {
        if (nums[showP] !== nums[fastP]) {
            showP++;
            nums[showP] = nums[fastP]
        }
    }
    return showP + 1;
};
var h =removeDuplicates([1,1,2])
console.log(h);
