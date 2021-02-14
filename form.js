var email = document.getElementById("inputEmail");
var name = document.getElementById("inputName");
var amount = document.getElementById("inputAmount");
var description = document.getElementById("inputDescription");

function getEmail(){
	return request.getParameter("inputEmail");
}

function getName(){
	return request.getParameter("inputName");
}

function getAmount(){
	return request.getParameter("inputAmount");
}

function getDescription(){
	return request.getParameter("inputDescription");
}

function checkbook(){
	const options = {
	  method: 'POST',
	  headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
	  body: '{"recipient":"arthur.tham@yahoo.com","name":'+name+',"amount":'+amount+',"description":'+description+'}'
	};

	fetch('https://demo.checkbook.io/v3/check/digital', options)
	  .then(response => console.log(response))
	  .catch(err => console.error(err));
}

function getParam(name){
	if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
		return decodeURIComponent(name[1]);
}



function fillFromParams() {
	var quote = getQuote(parseInt(getParam("entry-level")), 1, parseInt(getParam("entry-id")));
	document.getElementById("inputName").value = quote.organization;
	document.getElementById("inputAmount").value = parseInt(getParam("donation-amount"));
}

