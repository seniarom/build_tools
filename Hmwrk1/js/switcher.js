function switcher() {
  let x = document.getElementById("timerFirst");
  let y = document.getElementById("datecalc");
    if (x.style.display === "block" & y.style.display === "none" ) {
        x.style.display = "none";
        y.style.display = "block";
        
    } else {
      x.style.display = "block";
      y.style.display = "none";
    }
  }


