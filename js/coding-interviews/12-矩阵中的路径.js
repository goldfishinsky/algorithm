/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
     function dfs(i, j, k) {
         console.log(i,j,k)
         if(i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] !== word[k]  || board[i][j] === '') return false;
         if(k === word.length - 1) return true;
         board[i][j] = '';
         const result = dfs(i - 1, j, k + 1) || dfs(i + 1, j, k + 1) || dfs(i, j - 1, k + 1) || dfs(i, j + 1, k + 1);
         board[i][j] = word[k];
         return result;
     }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j< board[0].length; j++) {
            // 不能直接 return dfs(i, j, 0)，要保证循环的完成
            if(dfs(i, j, 0)) return true;
        }
    }
    return false;
};
console.log(exist([['a', 'b']], 'ba'));