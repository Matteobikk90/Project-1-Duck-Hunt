$(document).ready(function() { 

$(".duckbtn").click(function() { 

    console.log("okkkkkk")
});

soundManager.setup({
   url: 'js/soundmanager/swf',
   flashVersion: 9, 
   onready: function() {

   console.log("soundmanager");


     
var playButton = document.getElementsByClassName("duckbtn");
  playButton[0].addEventListener("click" , function(event) {
    var mySound = soundManager.createSound({
      "id": 'duck',
      "url" :"js/sounds/quack.aiff",
    });
    mySound.play(); 
  })

};

$(document).ready(function() { 

$(".duckbtn").click(function() { 

    console.log("okkkkkk")
});



//var playerName = prompt("What's your name soldier?", ".........");
//document.write("Okey " + playerName + " let's go");

});
