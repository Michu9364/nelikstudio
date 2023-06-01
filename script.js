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
      url: "link" + page + ".html",
      type: "GET"
    }).done(function(msg) {
      $('#included_page').html(msg);
    })
}

/* Usunięcie watermarka*/
document.addEventListener('DOMContentLoaded', () => {
    var disclaimer = document.querySelector("img[alt='www.000webhost.com']");
    if(disclaimer) {
      disclaimer.remove();
    }
});