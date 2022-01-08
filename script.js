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

var songsArray = "hello, hello, hello, rej, ef, ef, fwfw, wfj";
var songsArray2 = [
  {
    title: "Travel Way",
    length: "1:55",
    source: ""
  }, {
    title: "Sumi",
    length: "1:29",
    source: ""
  }, {
    title: "Try Again",
    length: "1:42",
    source: ""
  }, {
    title: "Neon Tiger",
    length: "1:54",
    source: ""
  }, {
    title: "Sakura",
    length: "1:49",
    source: ""
  }
]

var songBox = document.getElementById('songBox');

//songBox.innerHTML=songsArray[2]

for (var i = 0; i < songsArray.length; i++) {
  songBox.innerHTML = songBox.innerHTML + songsArray[i].title + "<br>";
}
