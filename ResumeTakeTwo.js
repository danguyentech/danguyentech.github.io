function getInfo(info, button) {
  var x = document.getElementById(info);
  var y = document.getElementsByClassName('navCard');
  var z = document.getElementById(button);
  x.className += " w3-show";
  for (i = 0; i < y.length; i++) {
    y[i].className += " w3-hide";
  }
  document.getElementById('backButton').className += ' w3-show';
}
function hideInfo() {
  var x = document.getElementsByClassName('info');
  var y = document.getElementsByClassName('navCard');
  for (j = 0; j < x.length; j++) {
    x[j].className = x[j].className.replace(" w3-show", "");
  }
  for (i = 0; i < y.length; i++) {
    y[i].className = y[i].className.replace(" w3-hide", "");
  }
  document.getElementById('backButton').className = document.getElementById('backButton').className.replace(" w3-show", "");
}

