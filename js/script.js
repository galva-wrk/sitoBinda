// Funzioni della pagina
$(document).ready(function(){

  // mail amministrazione
  coded = "LDD1e13hgLM14ej@3hyO14hjke1k4Y3.1h"
  key = "AOBVPtZcylRpYJsKiWazCeUHvoGrDdx8TN6fuQ7hbk50Sqw93n1FLM2jmIX4Eg"
  $("#mailAddress").html(" " + codificaMail(coded, key));

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
  //-->

  $("#inviaMail").click(function() {
    // var nome, email, testo, mailto, newtab, indirizzo, dominio, email_to;

    nome = $("#name").val();
    email = $("#email").val();
    testo = $("#comments").val();

    // nascondo i messaggi di errore
    $("#wrnNome").hide();
    $("#errEmail").hide();
    $("#wrnCommento").hide();

    // controllo la valorizzazione dei campi
    if (nome == "") {
      $("#wrnNome").slideDown();
    } else {
      if (!validateEmail(email)) {
        $("#errEmail").slideDown();
      } else {
        if (testo == "") {
          $("#wrnCommento").slideDown();
        } else {
          // spedisci email
          coded = "LDD1e13hgLM14ej@3hyO14hjke1k4Y3.1h"
          key = "AOBVPtZcylRpYJsKiWazCeUHvoGrDdx8TN6fuQ7hbk50Sqw93n1FLM2jmIX4Eg"
          mailto = "mailto:" + codificaMail(coded, key) + "?subject=Richiesta di informazioni da " + nome + "&body="+ testo + "";

          newtab = window.open();
          newtab.focus;
          newtab.location.href = mailto;
        }
      }
    }
  });
  
  // spedizione mail a Bindella
  $("#sendMailBinda").click(function() {
    coded = "F3R12rd@yrsGHdr18cH8dRy.Hr"
    key = "eOh9VQ8aH20gIGyJnjTt7B3ouf14DMxzwFZbALW6XvckirNpYdsCPSmUq5lEKR"
    mailto = "mailto:" + codificaMail(coded, key) + "?subject=Richiesta di informazioni";

    newtab = window.open();
    newtab.focus;
    newtab.location.href = mailto;
  });
  
  // spedizione mail a Stoppele
  $("#sendMailStop").click(function() {
    coded = "KDgbFK@HZdgqnZFBDqBneH.qZ"
    key = "rOSINz14MPs3nFRkdtcKqmvlhb7p5AVUQCTHGDEJXgZBwW9L8oej6uy0aixY2f"
    mailto = "mailto:" + codificaMail(coded, key) + "?subject=Richiesta di informazioni";

    newtab = window.open();
    newtab.focus;
    newtab.location.href = mailto;
  });

  // Slide del bio del team 
  $("#bioCont").slideUp();
  $("#team").click(function() {
    $("#bioCont").slideToggle();
  });
  $("span[id='bio']").click(function() {
    $("#bioCont").slideUp();
  });
  
  // Slide delle descrizione delle immagini relative ai servizi 
  $("div[id='dettaglio1']").slideUp();
  $("div[id='testata1']").click(function(){
    $("[id='dettaglio1']").slideToggle();
  });
  $("div[id='dettaglio2']").slideUp();
  $("div[id='testata2']").click(function(){
    $("[id='dettaglio2']").slideToggle();
  });

  
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
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

// fine script  