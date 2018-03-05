// Funzioni della pagina
$(document).ready(function(){

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
  
  $("#galvaMail").click(function() {
    coded = "jrAJjS.yrHArEJ.60G@yqrJH.BKq";
    key = "a4CLp1omEUQAi6MxG5cIt3b7leDFrYgZdhKqVPTsJ8nR2vBwXzkNHSWf0Oy9ju";
    
    newtab = window.open();
    newtab.focus;
    newtab.location.href = "mailto:" + codificaMail(coded, key) + "?subject=Richiesta di informazioni&body=Ciao, ho visto un sito che hai sviluppato, vorrei delle informazioni perché è veramente figo :)";
  });
});

function openModal(modal) {
  document.getElementById(modal).style.display = "block";
}

function closeModal(modal) {
  document.getElementById(modal).style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n, modal) {
  showSlides(slideIndex += n, modal);
}

function currentSlide(n, modal) {
  showSlides(slideIndex = n, modal);
}

function showSlides(n, modal) {
  var i;
  if (modal == "myModal") {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
  } else {
    var slides = document.getElementsByClassName("mySlides2");
    var dots = document.getElementsByClassName("demo2");
    var captionText = document.getElementById("caption2");
  }
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

<!--
// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
function codificaMail(coded, key) {
  shift = coded.length;
  link = "";
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i)
      link += (ltr)
    }
    else {
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
      link += (key.charAt(ltr))
    }
  };
  return link;
}

// fine script// fine script