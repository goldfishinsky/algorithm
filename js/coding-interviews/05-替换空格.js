/**
 * @param {string} s
 * @return {string}
 */
 const replaceSpace = function(s) {
    // get space count
    let spaceCount = 0;
    s = s.split('');
    for(let i = 0; i < s.length; i++){
        if (s[i] === ' ') spaceCount++;
    }
    const totalLength = s.length + 2 * spaceCount;
    for(let i = s.length - 1,j = totalLength - 1; i >= 0 ; i--,j--){
        if(s[i] === ' '){
            s[j] = '0';
            s[j-1] = '2';
            s[j-2] = '%';
            j = j - 2;
        } else {
            s[j] = s[i];
        }
    }
    return s.join('');
};
const result = replaceSpace('hello world');
console.log(result);