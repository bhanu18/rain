var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
var myBtnS = document.getElementById("myBtnS");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


function toggleMute() {
  
  if(video.muted){
    video.muted = false;
    myBtnS.innerHTML = "Mute";
  } else {
    video.muted = true;
    myBtnS.innerHTML = "Unmute";
  }
  
  }

var mini = true;

function toggleSidebar() {
  if (mini) {
   // console.log("opening sidebar");
    document.getElementById("mySidebar").style.width = "250px";
    this.mini = false;
  } else {
   // console.log("closing sidebar");
    document.getElementById("mySidebar").style.width = "85px";
    this.mini = true;
  }
}


$("li.animate__animated").hover(
  function () {
    $(this).addClass("animate__pulse");
  },
  function () {
    $(this).removeClass("animate__pulse");
  }
);

$('#nav-icon1').hover(function(){
  $(this).toggleClass('open');
});