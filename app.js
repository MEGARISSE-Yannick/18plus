// savoir si l'utilisateur a accces au site avec son age
function agecheck() {
      var age = document.getElementById("age").value;
      if (age >= 18) {
            alert("Azy tu peut y aller defoule toi bien sur notre super site de ouf🥵");
      }
      else {
            alert("Salut jeune visiteur tu na pas acces a ce site, ton age ne te permet pas de participer à cet offre");

      }
}