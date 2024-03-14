/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var movingCount = function(m, n, k) {
    // 可以用一维数组保存数据，拉平
    // 1 1 1
    // 1 1 1
    // 1 1 1
    const array = new Array(m * n);
    array.fill(1);
    return go(0, 0, m, n, k, array);
};
function go(i, j, m, n, k, array) {
    console.log(i, j, m, n, k, array);
    // 一定要return 0，递归要注意结束节点(回溯)的值要处理好
    if(i >= m || i < 0 || j >= n || j < 0 || sums(i) + sums(j) > k || array[i * n + j] === 0) return 0;
    // if(i >= m || i < 0 || j >= n || j < 0 || sums(i) + sums(j) > k || array[i][j] === 0) return;
    array[i * n + j] = 0;
    console.log('-----', i, j, array[i * n + j]);
    const sum =  1 + go(i + 1, j, m, n, k, array) + go(i - 1, j, m, n, k, array) + go(i, j + 1, m, n, k, array)
    + go(i, j - 1, m, n, k, array);
    console.log('sum', sum);
    return sum;
}
function sums(i) {
    let sum = 0;
    while(i !== 0) {
        sum += i % 10;
        i = Math.floor(i / 10);
    }
    return sum;
}
console.log(movingCount(1, 2, 1))
