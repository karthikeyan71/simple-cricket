var express = require('express');

var app = express();

app.get("/",function(req,res)
{
	res.send("cool");
});

app.listen("3000");
