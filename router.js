const express = require('express');//引入express框架
const router = express.Router();//抓取router工具
const userController = require('./modules/userController');

// 當有人訪問 GET / (這個路由模組的根目錄) 時，交給 controller 處理
router.get('/', userController.getUser);

module.exports = router;//模組化這個變數