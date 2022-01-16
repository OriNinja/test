var notMenu = document.getElementById("notMenu");
var onMenu = document.getElementById("onMenu");

function showMenu(){
  notMenu.style.display = "none";
  onMenu.style.display = "block";
}
function hideMenu() {
  notMenu.style.display = "block";
  onMenu.style.display = "none";
}

var controlIcon = document.getElementById("controlIcon");
var isPaused = true;

function playOrPause(){
  if (isPaused) {
    controlIcon.src = "assets/Playing_Icon.png";
    isPaused = false;
  } else {
    controlIcon.src = "assets/Paused_Icon.png";
    isPaused = true;
  }
}
//--------------------------------------------------------------------------------------------
var songsArray = [
  {
    title: "Travel Way",
    length: "1:55",
    source: "songs/Travel Way.mp3",
    href: ""
  }, {
    title: "Sumi",
    length: "1:29",
    source: "songs/Sumi.mp3",
    href: ""
  }, {
    title: "Try Again",
    length: "1:42",
    source: "songs/Try Again.mp3",
    href: ""
  }, {
    title: "Neon Tiger",
    length: "1:54",
    source: "songs/Neon Tiger.mp3",
    href: ""
  }, {
    title: "Sakura",
    length: "1:49",
    source: "songs/Sakura.mp3",
    href: ""
  }
];

var playingSong = document.getElementById('playingSong');
var songBox = document.getElementById('songBox');
playingSong.innerHTML = songsArray[0].title;
/*var topTitle = document.getElementById('song1');
var topTime = document.getElementById('song1time');
songBox.innerHTML=songsArray[2]

topTitle.innerHTML = firstsong.title*/
/*for (var i = 0; i < songsArray.length; i++) {
  songBox.innerHTML = songBox.innerHTML + songsArray2[i].title +
  "<div class='head-box'><div id='song1' class='selected-font'>hello</div> <div id='song1time' class='selected-font'>0:00</div></div>"
  "<audio> <source src ='" + songsArray2[i].source + "' type='audio/mpeg'> </audio>" +
  songsArray2[i].length + "<br>";
}*/
songBox.innerHTML = "<div class='head-box'><div id='song1' class='selected-font'>" + songsArray[0].title +
"</div> <div id='song1time' class='selected-font'>" + songsArray[0].length + "</div></div>"

for (var i = 1; i < songsArray.length; i++) {
  songBox.innerHTML = songBox.innerHTML  +
  "<div class='head-box'><div id='song"+ (i+1) +"' class='big-font'>" + songsArray[i].title +
  "</div> <div id='song" + (i+1) +"time' class='big-font'>" + songsArray[i].length + "</div></div>"
}
