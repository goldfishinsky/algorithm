// 240. Search a 2D Matrix II 【https://leetcode.cn/problems/search-a-2d-matrix-ii/】
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// m + n < m*n 
const findNumberIn2DArray = function(matrix, target) {
    // 从右上往左下搜索 两个变量不适合一般的 for 暴力
    if (!matrix.length || matrix.length === 0 || !matrix[0].length || matrix[0].length === 0) return false;
    let rowCount = matrix.length;
    let columnCount = matrix[0].length;
    let row = 0;
    let column = columnCount - 1;
    while (row < rowCount && (column > 0 || column === 0)) {
       if(target === matrix[row][column])  {
           return true;
       } else if(target < matrix[row][column])  {
           column -= 1;
       } else  {
           row += 1;
       }
    }
    return false;
};