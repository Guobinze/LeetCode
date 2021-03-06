/**
 * @param {number} n
 * @return {string[]}
 * @param l 左括号已经用了几个
 * @param r 右括号已经用了几个
 * @param str 当前递归得到的拼接字符串结果
 * @param res 结果集
 */
// 思路
// 深度优先搜索(回溯思想)，从空字符串开始构造，做加法。

// 关键点
// 当 l < r 时记得剪枝

var generateParenthesis = function(n) {
    const res = [];
    function dfs(l, r, str) {
        if (l == n && r == n) {
            return res.push(str);
        }
        // l 小于 r 时不满足条件 剪枝
        if (l < r) {
            return;
        }
        // l 小于 n 时可以插入左括号，最多可以插入 n 个
        if (l < n) {
            dfs(l + 1, r, str + '(');
        }
        // r < l 时 可以插入右括号
        if (r < l) {
            dfs(l, r + 1, str + ')');
        }
    }
    dfs(0, 0, '');
    return res;
};
