document.getElementById('arrow').addEventListener('click', function() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
});


var circle = document.getElementById("circle");

document.addEventListener("mousemove", function(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  circle.style.top = mouseY + "px";
  circle.style.left = mouseX + "px";
});

function setText(text) {
  circle.innerText = text;
}

setText("Click!");

