

function checkbook(){
	var email = document.getElementById("inputEmail");
	var name = document.getElementById("inputName");
	var amount = document.getElementById("inputAmount");
	var description = document.getElementById("inputDescription");
	console.log(email.value, name.value, amount.value, description.value);
	const options = {
	  method: 'POST',
	  //headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
	  body: '{"recipient":"treebook@arttham.com","name":\"'+name.value+'\","amount":'+amount.value+',"description":\"'+description.value+'\"}'
	};

	fetch('http://34.105.105.39:5000', options)
	  .then(response => console.log(response))
	  .catch(err => console.error(err));
}

function getParam(name){
	if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
		return decodeURIComponent(name[1]);
}



function fillFromParams() {
	var quote = getQuote(parseInt(getParam("entry-level")), 1, parseInt(getParam("entry-id")));
	document.getElementById("inputName").value = quote.org;
	document.getElementById("inputAmount").value = parseInt(getParam("donation-amount"));
}

