/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * https://leetcode.cn/problems/zhong-jian-er-cha-shu-lcof/solution/mian-shi-ti-07-zhong-jian-er-cha-shu-di-gui-fa-qin/
 */
 // 🌲 有点难呀
 // 思路： 前序得到根节点 --> 中序划分左右子树 --> 对比前后序得到左右子树的前后序 --> 分别递归左右子树
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 const buildTree = (preorder, inorder) => {
    // 构造 map
    // 通过中序获得根节点索引，每次都要查询中序节点，所以用 Map 提高查询速度, 用 value 存索引
    const inorderMap = new Map();
    inorder.forEach((item, index) => inorderMap.set(item, index));

    // root, left, right 均为索引
    const recursion = (root, left, right) => {
        // 为啥left > right
        if(left > right) return null;
        // 构建根节点
        let node = new TreeNode(preorder[root]);
        // 通过中序找到根节点索引
        let index = inorderMap.get(preorder[root]);
        
        //  分别计算左右子树前序的根、中序的左+右索引
        node.left = recursion(root + 1, left, index - 1);
        node.right = recursion(root + index - left + 1, index + 1, right);
        return node;
    }
    return recursion(0, 0, inorder.length - 1);
}