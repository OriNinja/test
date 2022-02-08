var controlIcon = document.getElementById("controlIcon");
var playingMusic = document.getElementById("playingMusic");
var playingSong = document.getElementById('playingSong');
var songBox = document.getElementById('songBox');
var songImage = document.getElementById('songImage');
var songsArray = [
  {
    title: "Travel Way",
    length: "1:55",
    source: "songs/Travel Way.mp3",
    imageSource: "https://images.pexels.com/photos/1884306/pexels-photo-1884306.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  }, {
    title: "Sumi",
    length: "1:29",
    source: "songs/Sumi.mp3",
    imageSource: "https://images.pexels.com/photos/2682877/pexels-photo-2682877.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  }, {
    title: "Try Again",
    length: "1:42",
    source: "songs/Try Again.mp3",
    imageSource: "https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  }, {
    title: "Neon Tiger",
    length: "1:54",
    source: "songs/Neon Tiger.mp3",
    imageSource: "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  }, {
    title: "Sakura",
    length: "1:49",
    source: "songs/Sakura.mp3",
    imageSource: "https://images.pexels.com/photos/6992/forest-trees-northwestisbest-exploress.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  }
]
var isPaused = true;
var currentSong = 0;
var songElements = [];

function playOrPause(){
  if (isPaused) {
    controlIcon.src = "assets/Playing_Icon.png";
    playingMusic.play();
    isPaused = false;
  } else {
    controlIcon.src = "assets/Paused_Icon.png";
    playingMusic.pause();
    isPaused = true;
  };
};

function changeClass() {
  songElements[currentSong].classList.remove("MP-reg-font");
  songElements[currentSong].classList.add("MP-selected-font");
}

for (var i = 0; i < songsArray.length; i++) {
  songBox.innerHTML = songBox.innerHTML + "<div id = songElements["+ i +"] class='MP-reg-font' style='cursor:pointer' onclick='changeSong("+ i +")'> <div style='display: inline;'>"+ songsArray[i].title +"</div> <div style='display: inline; float: right;'>"+ songsArray[i].length +"</div></div>";
}

for (var i = 0; i < songsArray.length; i++) {
  songElements[i] = document.getElementById("songElements["+i+"]");
};

changeClass();

function changeSong(songNum) {
  if (songNum < 0) {
    songNum = songsArray.length - 1;
  } else if (songsArray.length == songNum) {
    songNum = 0;
  };
  songElements[currentSong].classList.remove("MP-selected-font");
  songElements[currentSong].classList.add("MP-reg-font");
  currentSong = songNum;
  playingMusic.src = songsArray[currentSong].source;
  playingSongTitle.innerHTML = songsArray[currentSong].title;
  songImage.src = songsArray[currentSong].imageSource;
  playingMusic.setAttribute("autoplay", "");
  controlIcon.src = "assets/Playing_Icon.png";
  isPaused = false;
  changeClass();
}

function nextSong() {
  changeSong(currentSong + 1);
};

function previousSong() {
  changeSong(currentSong - 1);
};
