
/* Rozwijanie menu na mobile */

function navbar() {
  var navbar = document.getElementById("navmobile");
  if (navbar.classList.contains("slidenavbarshow")) {
    navbar.classList.remove("slidenavbarshow");
    navbar.classList.add("slidenavbarhide");
    setTimeout(function() {
      navbar.classList.remove("slidenavbarhide");
    }, 500);

  } else {
    navbar.classList.remove("slidenavbarhide");
    navbar.classList.add("slidenavbarshow");
  }
}

/* Animacja guzika menu na mobile */

function animatednav() {
  var x = document.getElementById("animatednav");
  x.classList.toggle("change");
}

function darkmodenav() {
  var x = document.getElementById("animatednav");
  x.classList.toggle("darkmodenav");
}

/* Ładowanie stron */

function include(elem) {
  var page = elem.val;
  var includedPage = $('#included_page');
  includedPage.removeClass('fade-in');
  $.ajax({
      url: "fragments/link" + page + ".html",
      type: "GET"
  }).done(function(msg) {
      includedPage.html(msg);
      includedPage.addClass('fade-in');
  });
}

/* Ciemny motyw */

function enableDarkMode() {
  var element = document.body;
  element.classList.add('dark-mode');
  checkbox.checked = true;
  Cookies.set('darkMode', 'true');
}

function disableDarkMode() {
  var element = document.body;
  element.classList.remove('dark-mode');
  checkbox.checked = false;
  Cookies.set('darkMode', 'false');
}

function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle('dark-mode');
  var isDarkModeEnabled = element.classList.contains('dark-mode');
  Cookies.set('darkMode', isDarkModeEnabled.toString());
}

/* Synchoronizacja guzików od zmiany motywu */

function syncCheckboxes1() {
  var checkbox1 = document.getElementById("switch");
  var checkbox2 = document.getElementById("switch2");

  checkbox2.checked = checkbox1.checked;
}

function syncCheckboxes2() {
  var checkbox1 = document.getElementById("switch");
  var checkbox2 = document.getElementById("switch2");

  checkbox1.checked = checkbox2.checked;
}

/* Usunięcie watermarka na stronie - domena */

document.addEventListener('DOMContentLoaded', () => {
  var disclaimer = document.querySelector("img[alt='www.000webhost.com']");
  if(disclaimer) {
    disclaimer.remove();
  }
});