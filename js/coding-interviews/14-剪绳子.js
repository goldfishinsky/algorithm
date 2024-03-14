/**
 * @param {number} n
 * @return {number}
 */
// 动态规划，由下至上
 var cuttingRope1 = function(n) {
    if(n < 2) return 0;
    // 别写成赋值！恒为 true 了
    // if(n = 2) return 1;
    if(n === 2) return 1;
    if(n === 3) return 2;
    if(n === 4) return 3;
    const arr = [];
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 2;
    arr[3] = 3;
    for(let  i = 4; i < n + 1; i++) {
        let max = 0;
        // 1 ,2 ,3, ..., n-1
        for(let j = 1; j < i + 1; j++) {
            const result = arr[j] * arr[i - j];
            if(max < result) {
                max = result;
            }
        }
        arr[i] = max;
    }  
    console.log(arr);
    return arr[n];
};

// 贪婪，更依赖数学规律
// 3(n - 3) > 2(n -2) > n (n > 4)
// 有 3 取 3，余 1 取 2*2
/**
 * @param {number} n
 * @return {number}
 */
//  贪婪，更依赖数学规律
// 3(n - 3) > 2(n -2) > n (n > 4)
// 有 3 取 3，余 1 取 2*2
var cuttingRope2 = function(n) {
    if(n < 4) return n - 1;
    let res = 1;
    while(n > 4){
        // 每次的结果都要求
        res *= 3;
        n -= 3;
    }
    // n 最后只能是 2、3、4
    return res * n
};
console.log(cuttingRope1(10))
console.log(cuttingRope2(10))