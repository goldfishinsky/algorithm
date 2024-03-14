/**
 * @param {number} n
 * @return {number}
 */
 // 先归纳
// n > 2 以后， 第一次跳有两种情况
// 1. 先跳一级，有 f(n-1) 种跳法
// 2. 先跳两级，有 f(n-2) 种跳法
// 故一般规律(转移方程)为 f(n) = f(n-1) + f(n-2)
var numWays = function(n) {
    let a = 1,b = 1,sum = 1
    for(let i = 0; i < n - 1; i++) {
        sum = (a + b) % 1000000007;
        a = b;
        b = sum;
    }
    return sum;
};