$(document).ready(function() { 
	console.log("hello");

var counter = 0;

$(".duckbtn").click(function() { 
	counter+= 5;
	console.log(counter);
    $("#score").html(counter);
});
});
//soundManager.setup({
//   url: 'js/soundmanager/swf',
//   flashVersion: 9, 
//   onready: function() {
//
//   console.log("soundmanager");


     
//var playButton = document.getElementsByClassName("duckbtn");
// playButton[0].addEventListener("click" , function(event) {
//   var mySound = soundManager.createSound({
//     "id": 'duck',
//     "url" :"js/sounds/quack.aiff",
//   });
//   mySound.play(); 
// })

//}





//var playerName = prompt("What's your name soldier?", ".........");
//document.write("Okey " + playerName + " let's go");


// $(".duckbtn").animate({left: "100px", top: "240px"});

