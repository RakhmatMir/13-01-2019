function openNav() {
  document.getElementsByClassName("left-block")[0].style.width = "25" + '%';
  document.getElementById("openNav").style.top = "50" + "px" ;
  document.getElementsByClassName("right-block")[0].style.width = "75" + "%"
  }
  function closeNav() {
  document.getElementsByClassName("left-block")[0].style.width = "0";
  document.getElementById("openNav").style.top = "10" + "px";
  document.getElementsByClassName("right-block")[0].style.width = "100" + "%"
  }
