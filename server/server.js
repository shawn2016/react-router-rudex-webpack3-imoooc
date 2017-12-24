const express = require('express');
const mongoose = require('mongoose');
const app = express();

// 链接mongo
const DB_URL = "mongodb://localhost:27017/imooc"
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
    console.log('数据库连接成功')
})
// 定义表的该概念
const User = mongoose.model('user', new mongoose.Schema({
    user: { type: String, require: true },
    age: { type: Number, require: true }
}))
// 新增数据
User.create({
    name: "daizhixiang",
    age: 25
}, function (err, doc) {
    if (!err) {
        console.log(doc)
    } else {
        console.log(err)
    }
})
// 删除数据 key =>age：25
User.remove({ age: 25 }, function (err, doc) {
    if (!err) {
        console.log(doc)
    } else {
        console.log(err)
    }
})
// 更新数据数据 key =>age：25
User.update({ age: 25 }, { '$set': { age: 27 } }, function (err, doc) {
    if (!err) {
        console.log(doc)
    } else {
        console.log(err)
    }
})
app.get('/', function (req, res) {
    res.send('<h1>hello world</h1>')
})
// 查找数据
app.get('/data', function (req, res) {
    User.find({}, function (err, doc) {
        if (!err) {
            res.json(doc)
        } else {
            res.send(err)
        }
    })
})
app.listen(9093, function () {
    console.log('2222')
})