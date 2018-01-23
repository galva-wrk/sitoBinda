// // inizializzazioni
var indirizzo = "info";
var dominio = "studiotecnicobs.it";
var email_to = indirizzo + "@" + dominio;
//  $(document).load() {
//
//    $(document).getElementById('Testata').focus();
// //   $(document).getElementById('email').placeholder = "Email";
// //   $(document).getElementById('comments').placeholder = "Commenti";
// //
// //
//  }

function inizializza() {

  var prova = document.getElementById('name').value;
  // document.getElementById('name').value = null;
  // document.getElementById('email').value = null;
  // document.getElementById('comments').value = null;
  document.getElementById('mailAddress').innerHTML = " " + email_to;
}

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
})

function email()
{
  // var nome, email, testo, mailto, newtab, indirizzo, dominio, email_to;
  var nome, email, testo, mailto, newtab;
  nome = document.getElementById('name').value;
  email = document.getElementById('email').value;
  testo = document.getElementById('comments').value;

  // indirizzo = "info";
  // dominio = "studiotecnicobs.it";
  // email_to = indirizzo + "@" + dominio;

  mailto = "mailto:" + email_to + "?subject=Richiesta di informazioni da " + nome + "&body="+ testo + "";

  newtab = window.open();
  newtab.focus;
  newtab.location.href = mailto;
}

// fine script
