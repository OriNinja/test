var notMenu = document.getElementById("notMenu");
var onMenu = document.getElementById("onMenu");
var menuIcon = document.getElementById("menuIcon");
var exitIcon = document.getElementById("exitIcon");
function showMenu(){
    notMenu.style.display = "none";
    onMenu.style.display = "block";
}
function hideMenu() {
  notMenu.style.display = "block";
  onMenu.style.display = "none";
}
