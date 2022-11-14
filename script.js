var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

var mini = true;

function toggleSidebar() {
  if (mini) {
    console.log("opening sidebar");
    document.getElementById("mySidebar").style.width = "250px";
    this.mini = false;
  } else {
    console.log("closing sidebar");
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