var express = require("express");

var cors = require('cors');

var jsonQuery = require('json-query');

var app = express();

var corsOptions = {
	origin:'http://localhost:4200',
	optionsSuccessStatus: 200
}

let player = [
		{
			"name":"Dhoni",
			"team":"CSK",
			"number":"5",
			"id":1
		},
		{
			"name":"Kholi",
			"team":"RCB",
			"number":"2",
			"id":2
		},
		{
			"name":"Gambhir",
			"team":"KKR",
			"number":"1",
			"id":3
		}
	];

let player_info = {
	1:[
		{
			"score" : "No Run",
			"number" : "6",
			"bowler" : "Starc"
		},
		{
			"score" : "Six!",
			"number" : "5",
			"bowler" : "Starc"
		},
		{
			"score" : "No Run",
			"number" : "4",
			"bowler" : "Starc"
		},
		{
			"score" : "Four!",
			"number" : "3",
			"bowler" : "Starc"
		},
		{
			"score" : "2",
			"number" : "2",
			"bowler" : "Starc"
		},
		{
			"score" : "No Run",
			"number" : "1",
			"bowler" : "Starc"
		}
	],
	2:[
		{
			"score" : "2",
			"number" : "6",
			"bowler" : "Chahal"
		},
		{
			"score" : "3",
			"number" : "5",
			"bowler" : "Chahal"
		},
		{
			"score" : "No Run",
			"number" : "4",
			"bowler" : "Chahal"
		},
		{
			"score" : "No Run",
			"number" : "3",
			"bowler" : "Chahal"
		},
		{
			"score" : "2",
			"number" : "2",
			"bowler" : "Chahal"
		},
		{
			"score" : "Four!",
			"number" : "1",
			"bowler" : "Chahal"
		}
	],
	3:[
		{
			"score" : "(Wicket !!!)",
			"number" : "5",
			"bowler" : "Ashwin"
		},
		{
			"score" : "Four!",
			"number" : "4",
			"bowler" : "Ashwin"
		},
		{
			"score" : "3",
			"number" : "3",
			"bowler" : "Ashwin"
		},
		{
			"score" : "Four",
			"number" : "2",
			"bowler" : "Ashwin"
		},
		{
			"score" : "No Run",
			"number" : "1",
			"bowler" : "Ashwin"
		}
	]
};

let current = {
	"play_batsmen" :"Rohit Sharma",
	"play_score" : "50",
	"play_ball" : "20",
	"other_score" : "20",
	"other_ball" : "16",
	"other_batsmen" : "Dhawan",
	"bowler" : "Rabada",
	"over": "6",
	"runs": [2,0,4,6,2,1],
	"score" : 50,
	"wicket" : 0,
	"place" : "Bengaluru",
	"our" : "India",
	"vs" : "South Africa",
	"yet" : "Kholi, Rahanae, Dhoni, Pandya, Pandey, Ashwin, Bhuvi, Bumrah, Shami"
};

let play_player = [
	{
		"name" : "Rohit Sharma",
		"play":1,
		"runs" : 30,
		"balls" : 20,
		"wicket" : 1,
		"wicket_mode" : "LBW",
		"bowler" : "Rabada"
	},
	{
		"name" : "Dhawan",
		"play":1,
		"runs" : 20,
		"balls" : 16,
		"wicket" : 1,
		"wicket_mode" : "LBW",
		"bowler" : "Rabada"
	},
	{
		"name" : "Kholi",
		"play":1,
		"runs" : 0,
		"balls" : 6,
		"wicket" : 0,
		"wicket_mode" : "LBW",
		"bowler" : "Rabada"
	},
	{
		"name" : "Rahanae",
		"play":1,
		"runs" : 0,
		"balls" : 2,
		"wicket" : 0,
		"wicket_mode" : "catch",
		"bowler" : "Rabada",
		"catch" : "ABd"
	},
	{
		"name" : "MS Dhoni",
		"play":0,
		"runs" : 20,
		"balls" : 16,
		"wicket" : 1,
		"wicket_mode" : "Bowled",
		"bowler" : "Rabada",
		"catch" : 0
	},
	{
		"name" : "Pandya",
		"play":0,
		"runs" : 20,
		"balls" : 16,
		"wicket" : 1,
		"wicket_mode" : "Bowled",
		"bowler" : "Rabada",
		"catch" : 0
	},
	{
		"name" : "Pandey",
		"play":0,
		"runs" : 20,
		"balls" : 16,
		"wicket" : 1,
		"wicket_mode" : "Bowled",
		"bowler" : "Rabada",
		"catch" : 0
	},
	{
		"name" : "Ashwin",
		"play":0,
		"runs" : 20,
		"balls" : 16,
		"wicket" : 1,
		"wicket_mode" : "Bowled",
		"bowler" : "Rabada",
		"catch" : 0
	},
	{
		"name" : "Bhuvi",
		"play":0,
		"runs" : 20,
		"balls" : 16,
		"wicket" : 1,
		"wicket_mode" : "Bowled",
		"bowler" : "Rabada",
		"catch" : 0
	},
	{
		"name" : "Bumrah",
		"play":0,
		"runs" : 20,
		"balls" : 16,
		"wicket" : 1,
		"wicket_mode" : "Bowled",
		"bowler" : "Rabada",
		"catch" : 0
	},
	{
		"name" : "Shami",
		"play":0,
		"runs" : 20,
		"balls" : 16,
		"wicket" : 1,
		"wicket_mode" : "Bowled",
		"bowler" : "Rabada",
		"catch" : 0
	}
];

app.get('/players',function(req,res)
{

	res.send(player);
});
// app.get('/players',cors(corsOptions),function(req,res)
// {
//
// 	res.send(player);
// });

app.get('/players/:id',cors(corsOptions),function(req,res)
{

	let fetch_id = req.params.id;

	let data = player_info[fetch_id];

	console.log(data);

	res.send(data);

});

app.get('/current',cors(corsOptions),function(req,res)
{

	let data = current;

	res.send(data);

});

app.get('/scorecard',cors(corsOptions),function(req,res)
{

	let data = play_player;

	res.send(data);

});

app.listen("3000");
