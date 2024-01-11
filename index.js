const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
host : "localhost",
user : "root",
password : "root",
database : "sms_28dec23"
});

app.post("/save", (req, res) => {
let data = [ req.body.name, req.body.mail,req.body.feedback ];
let sql = "insert into info values(?,?,?)";
con.query(sql, data, (err, result) =>{
if (err) res.send(err);
else     res.send(result);


});
})




app.get("/show", (req, res) => {
let sql = "select * from info";
con.query(sql, (err, result) => {
if (err) res.send(err);

else    res.send(result);
});
})

app.delete("/remove", (req, res) => {
let data = [req.body.name];
let sql = "delete from info where name = ?";
con.query(sql, data, (err, result) => {
if (err) res.send(err);
else     res.send(result);

});
})


app.listen(9000, () => { console.log("ready"); });

