const express = require("express")
const bodyParser = require("body-parser");

const app = express();
	app.use(bodyParser.urlencoded({extended: true}));

app.get("/" , function(req , res) {
	res.sendFile(__dirname + "/index.html");
});

app.post("/" , function(req , res) {
	var w = Number(req.body.weight);
	var h = Number(req.body.height);
	var bmi = w/(h*h);
	var result;
	// BMI Information taken from Wikipedia
	if(bmi < 15)
		result = " Very Severely Underweight";
	else if (bmi < 16)
		result = "Severely UnderWeight";
	else if (bmi < 18.5)
		result = "Underweight";
	else if (bmi < 25)
		result = "Normal";
	else if (bmi < 30)
		result = "Overweight";
	else if (bmi < 35)
		result = "Obese";
	else if (bmi < 40)
		result = "Severely Obese";
	else
		result = "Very Severely Obese";
	res.send("<style type='text/css'>#Calculator {text-align: center;background-color: black;color: white;width : 300px;border-radius: 25px;margin: auto;}#header {margin-top: 25px;background-color: gray;border-radius: 25px 25px 0px 0px;}#report {margin: 5px;border-radius: 15px;padding-left: 15px; }#report {text-align: left;padding-bottom: 15px;}</style><div id='Calculator'><h1 id='header'>BMI Report</h1><ul id='report'><li>The BMI is " + bmi + ".</li><li>You are " + result + ".</li></ul></div>");
});

app.listen(3000 , function(){
	console.log("Server has started on port 3000.")
});