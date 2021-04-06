function getInfo(info) {
  var x = document.getElementsByClassName('navCard');
  document.getElementById(info).classList.remove("w3-hide");
  for (y = 0; y < x.length; y++) {
    x[y].className += " w3-hide";
  }
  switch (info) {
    case 'projects':
      document.getElementsByClassName('cardBar')[0].classList.remove('w3-hide')
      break;
    case 'mental':
      document.getElementsByClassName('cardBar')[0].classList.add('w3-hide')
      document.getElementById('projects').classList.add('w3-hide')
      document.getElementById('mental').classList.remove('w3-hide')
      break;
    case 'fusion':
      document.getElementsByClassName('cardBar')[0].classList.add('w3-hide')
      document.getElementById('projects').classList.add('w3-hide')
      document.getElementById('fusion').classList.remove('w3-hide')
      break;
    case 'inspire':
      document.getElementsByClassName('cardBar')[0].classList.add('w3-hide')
      document.getElementById('projects').classList.add('w3-hide')
      document.getElementById('inspire').classList.remove('w3-hide')
      break;
    case 'HoH':
      document.getElementsByClassName('cardBar')[0].classList.add('w3-hide')
      document.getElementById('projects').classList.add('w3-hide')
      document.getElementById('HoH').classList.remove('w3-hide')
      break;
    default:
      console.log(`Something broke in the getInfo switch statement. Pls fix!`)
      break;
  }
  document.getElementById('backButton').classList.remove('w3-hide');
}

function hideInfo() {
  var x = document.getElementsByClassName('info');
  var y = document.getElementsByClassName('navCard');
  if (document.getElementsByClassName('cardBar')[0].style.display = 'flex') {
    document.getElementsByClassName('cardBar')[0].classList.add('w3-hide')

  }
  for (j = 0; j < x.length; j++) {
    x[j].classList.add("w3-hide");
  }
  for (i = 0; i < y.length; i++) {
    y[i].classList.remove("w3-hide");
  }
  document.getElementById('backButton').classList.add("w3-hide");
}

function hoverStart(button) {
  document.getElementById(button).style.backgroundColor = '#8585ff ';
}

function hoverEnd(button) {
  document.getElementById(button).style.backgroundColor = '#ededff';
}