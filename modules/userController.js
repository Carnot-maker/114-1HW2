const userModel = require('./userModule');

exports.getUser = function(req, res) {
    //概念為「往箱子裡放東西」，新增一個叫做getUser的功能；用法「exports.變數名」
    const name = req.query.name;
    const user = userModel.findUserByName(name);//使用findUserByName 的工具

    if (user) {
        res.json({ message: '找到用戶', data: user });
    } else {
        res.status(404).json({ message: '找不到用戶' });
    }
};