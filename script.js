// ALL.HTML
var notMenu = document.getElementById("notMenu");
var onMenu = document.getElementById("onMenu");

function showMenu(){
  notMenu.style.display = "none";
  onMenu.style.display = "block";
};
function hideMenu() {
  notMenu.style.display = "block";
  onMenu.style.display = "none";
};

var mobile = document.getElementById("mobile-view")
var desktop = document.getElementById("desktop-view")
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  desktop.style = "display: none"
}else{
  mobile.style = "display: none"
}
