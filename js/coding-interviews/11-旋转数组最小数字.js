/**
 * @param {number[]} numbers
 * @return {number}
 */
//  https://leetcode.cn/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/submissions/
//  https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array-ii/
// 又是简单又是困难
 var minArray1 = function(numbers) {

    // 旋转有啥特点
    // n 次旋转还是 1 次
    // 题目有误，应该是数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一 个 旋转，应该要 3 次旋转才对
    // 难道不是递增，第一次减就是最小吗
    // 还真是。。时间效率会较低，排序的查找应快速联想到二分
    let lastOne = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] >= lastOne) {
            lastOne = numbers[i];
        } else {
            return numbers[i];
        }
     }
     return numbers[0];
};

// 二分思想的解答
var minArray2 = function(numbers) {
    let i = 0;
    let j = numbers.length - 1;
    let x
    // 因为最初是增序的，所以 j 肯定是在右增数组里
    while(i < j) {
        // js 不会自动取整 😭
        x = Math.floor((i + j) / 2);
        if(numbers[x] > numbers[j]) {
            // 旋转点在 x 右侧
            i = x + 1;
        } else if(numbers[x] < numbers[j]) {
            // 旋转点在 x 左侧
            j = x;
        } else {
            j -= 1;
        }
    }
    return numbers[i];
};