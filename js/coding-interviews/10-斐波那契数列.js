// 1. 简单递归时间效率极慢，因为有指数级增长的重复出现
// 2. 可以存储每个出现的值，但是这会占用 O(n) 的空间
// 3. 循环替代递归 --> 动态规划 --> 转移方程
/**
 * @param {number} n
 * @return {number}
 */
 const fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let frontVaule = 0;
    let endVaule = 1;
    let sum;
    for (let i = 2; i <= n; i++) {
        sum = (frontVaule + endVaule) % 1000000007;
        frontVaule = endVaule;
        endVaule = sum;
    }
    return sum;
};