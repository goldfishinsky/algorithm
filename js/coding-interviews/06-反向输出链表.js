// 从后往前，先进后出 -> 栈 -> 递归
// 递推阶段 + 回溯阶段(重要)
// https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/submissions/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function(head) {
    if (head === null) {
        return [];
    } else {
        return reversePrint(head.next).concat(head.val);
    }
};