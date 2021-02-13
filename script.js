var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
document.getElementById('buy').onclick = test;
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

function test(){
  alert('Are you really that heartless?');
}
