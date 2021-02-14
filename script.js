var slider = document.getElementById("myRange");
var output = document.getElementById("donation");
document.getElementById('buy').onclick = test;
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.value = this.value;
}

function test(){
  alert('Are you really that heartless?');
}

function generateOptions() {
  // Get donation amount from generator
  var donationAmount = parseInt(document.getElementById("donation").value);
  console.log(donationAmount);
  // Determine the level for the donation: low, medium or high? (1, 2, or 3)
  var donationLevel;
  if (donationAmount <= 30) { // low
    donationLevel = 1;
  } else if (donationAmount <= 400) {
    donationLevel = 2;
  } else {
    donationLevel = 3;
  }

  // get the quotes
  var seriousQuotes = getQuotesByType(donationLevel, 1);
  var sillyQuotes = getQuotesByType(donationLevel, 2);
  var seriousIndex = Math.floor(Math.random() * Math.floor(seriousQuotes.length));
  var seriousQuote = seriousQuotes[seriousIndex];
  var sillyIndex = Math.floor(Math.random() * Math.floor(sillyQuotes.length));
  var sillyQuote = sillyQuotes[sillyIndex];

  // update the serious quote content on the page
  document.getElementById("entry-title").innerHTML = seriousQuote.title;
  document.getElementById("entry-description").innerHTML = seriousQuote.description;
  document.getElementById("entry-image").src = seriousQuote.image_url;

  // update the serious quote and donation hidden input values
  document.getElementById("donation-amount").value = seriousIndex;
  document.getElementById("entry-level").value = donationLevel;
  document.getElementById("entry-id").value = seriousIndex;

  // update the silly quote content on the page
  document.getElementById("funny-title").innerHTML = sillyQuote.title;
  document.getElementById("funny-description").innerHTML = sillyQuote.description;
  document.getElementById("funny-image").src = sillyQuote.image_url;


}