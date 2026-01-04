// 模擬資料庫數據
const users = [
    { id: 1, name: '麥克', role: 'Author' },
    { id: 2, name: '史丹利', role: 'Reader' }
];

module.exports = {//這是 「直接把這個箱子換成別的東西」，替換物件
    // 提供一個方法來查找用戶
    findUserByName: function(name) {
        return users.find(u => u.name === name);
    }
};