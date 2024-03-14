const CQueue = function() {
    this.stackA = [];
    this.stackB = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    // 无伦是否为空，放在 A 都是队尾
    this.stackA.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(this.stackA.length === 0 && this.stackB.length === 0) return -1;
    // 会存在 A B 均不为空的场景
    else if(this.stackB.length !== 0) {
        return this.stackB.pop();
    }
    else if(this.stackA !== 0 && this.stackB.length === 0){
        while(this.stackA.length) {
            this.stackB.push(this.stackA.pop());
        }
        return this.stackB.pop();
    }

};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */