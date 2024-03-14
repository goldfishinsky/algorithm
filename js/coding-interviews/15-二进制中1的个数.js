/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    // ">>>"无符号右移
    // 操作规则：无论正负数，前面补零。
    // ">>"右移
    // 操作规则：正数前面补零，负数前面补1
    // "<<"左移
    // 操作规则：无论正负数，后面补零。
    let count = 0;
    // 把 1 左移，判断次低位
    let flag = 1;
    while(flag != 0){
        if(n & flag) {
            count ++;
        }
        flag = flag << 1;
    }
    return count;
};