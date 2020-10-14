function getInfo(info) {
  var x = document.getElementsByClassName('navCard');
  document.getElementById(info).className += " w3-show";
  for (y = 0; y < x.length; y++) {
    x[y].className += " w3-hide";
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
function hoverStart(button){
  document.getElementById(button).style.backgroundColor='#FBA90A'
}
function hoverEnd(button){
  document.getElementById(button).style.backgroundColor='#B6A9F0';
}