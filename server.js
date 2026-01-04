const express = require('express');//引入express框架
const app = express();

//啟動伺服器
const userRouter = require('./router');

// [視圖層] 託管靜態檔案 (public 資料夾)
app.use(express.static('public')); // [cite: 327]

// [路由層] 註冊路由模組
// 訪問 /api/user 時，會進入 userRouter
app.use('/api/user', userRouter); 

app.listen(3000, function() {
    console.log('Server running at http://localhost:3000');
});