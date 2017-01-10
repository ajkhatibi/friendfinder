var express = require('express');
var app = express();
var PORT = 3004;



app.get("/:operator?/:numberone?/:numbertwo?", function(req, res) {
	console.log(req.params)
	var operator = req.params.operator;
	var numbertwo = parseInt(req.params.numbertwo);
	var numberone = parseInt(req.params.numberone);

	var result;

	switch(operator){
		case 'add':
			result = numberone + numbertwo;
			break;
		case 'substract':
			result = numberone - numbertwo;
			break;
		case 'divide':
			result = numberone / numbertwo;
			break;
		case 'multiply':
			result = numberone * numbertwo;
			break
		default:
			result = 'yo';

	}

	res.send(result.toString());

 
});



app.listen(3004, function () {
  console.log('calculator')
})