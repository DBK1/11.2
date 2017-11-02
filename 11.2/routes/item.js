/**
 * Created by Administrator on 2017/11/2.
 */
var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '123456' ,
    database:'banner'

});

/* GET users listing. */
router.post('/list', function(req, res, next) {
    res.header('Access-Control-Allow-Origin',"*");
    connection.query(`INSERT INTO biao (name,score) VALUES ("${req.body.a}","${req.body.b}")`,function(err, rows, fields) {
        console.log(rows);
         res.send(rows)
    })
});
router.post('/list2',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    connection.query("SELECT * FROM biao",function(err,rows){
        console.log(rows);
        res.send(rows)
    })
});

module.exports = router;