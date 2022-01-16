var icon = document.getElementById("icon");
var pause = true;

function action() {
  if (pause) {
    icon.src = "assets/Playing_Icon.png";
    pause = false;
  } else {
    icon.src = "assets/Paused_Icon.png";
    pause = true;
  }
}
