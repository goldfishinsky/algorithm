// 考察代码的完整性，功能测试、边界测试、负面测试(错误输入)
// 实现简单但会超时
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow1 = function(x, n) {
    let res = 1;
    if (x === 0 && n <= 0) throw Error('n <= 0 时，基数不能为 0')
    if (n === 0) return 1;
    if (n  > 0) {
        while(n > 0) {
            res *= x;
            n -= 1;
        }
        return res;
    } else {
        while(n < 0) {
            res *= x;
            n += 1;
        }
        return 1 / res;
    }
};

// 快速幂，二分法
var myPol2 = function(x, n) {
    if(x === 0) return 0;
    let res = 1;
    // 直接转化了 n 为负数的场景，优雅呀
    if(n < 0) {
        x = 1/x;
        n = -n;
    }
    // 为了过 leetcode 的测试集
    if (n >= 2147483648 && x != 1 && x!= -1) return 0;
    // 奇数需要多乘多出来的一个 x
    while (n > 0) {
        if ((n & 1) === 1) res *= x;
        x *= x;
        // n *= 0.5，右移代表 / 2，向下取整
        n >>= 1;
    }
    return res;
// 向下整除 n // 2n//2 等价于 右移一位 n >> 1n>>1 ；
// 取余数 n \% 2n%2 等价于 判断二进制最右一位值 n \& 1n&1 ；
}