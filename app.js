
// savoir si l'utilisateur a accces au site avec sa date de naissance
function datecheck(date) {
      var d = new Date(),
            year = d.getFullYear(),
            month = d.getMonth() + 1,
            day = d.getDate();
      var datebirth = document.getElementById("datebirth").value;

      var yearbirth = datebirth.split('-')[0],
            monthbirth = datebirth.split('-')[1],
            daybirth = datebirth.split('-')[2];

      var finaly = year - yearbirth,//18+ ok
            finalm = month - monthbirth,
            finald = day - daybirth;
      console.log(yearbirth, monthbirth, daybirth)
      console.log(year, month, day)
      console.log(finaly, finalm, finald)

      if (finaly >= 18 && finald <= 0 &&   finalm >= 0) {
            alert("Azy tu peut y aller defoule toi bien sur notre super site de ouf🥵");
      }
      else if ( finald < 0) {
            alert("Azy tu peut y aller defoule toi bien sur notre super site de ouf🥵");

            if (finalm < 0) {
                  alert("Salut jeune visiteur tu na pas acces a ce site, ton age ne te permet pas de participer à cet offre");

            } 
      }
      else{
            alert("Salut jeune visiteur tu na pas acces a ce site, ton age ne te permet pas de participer à cet offre");

      }




}



