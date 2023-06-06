
/* Rozwijanie menu na mobile*/

function navbar() {
  var x = document.getElementById("navmobile");
  if (x.className.indexOf("slidenavbarshow") == -1) {
    x.className += " slidenavbarshow";
  } else { 
    x.className = x.className.replace(" slidenavbarshow", "");
  }
}

/* Animacja guzika menu na mobile*/

function animatednav(x) {
  x.classList.toggle("change");
}

/* Ładowanie stron*/

function include(elem) {
  var page = elem.val;
  $.ajax({
    url: "fragments/link" + page + ".html",
    type: "GET"
  }).done(function(msg) {
    $('#included_page').html(msg);
  })
}

/* Ciemny motyw */

function enableDarkMode() {
  var element = document.body;
  element.classList.add("dark-mode");
  Cookies.set('darkMode', 'true');
}

function disableDarkMode() {
  var element = document.body;
  element.classList.remove("dark-mode");
  Cookies.set('darkMode', 'false');
}

function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var isDarkModeEnabled = element.classList.contains("dark-mode");
  Cookies.set('darkMode', isDarkModeEnabled.toString());
}

/* Usunięcie watermarka na stronie - domena*/

document.addEventListener('DOMContentLoaded', () => {
  var disclaimer = document.querySelector("img[alt='www.000webhost.com']");
  if(disclaimer) {
    disclaimer.remove();
  }
});