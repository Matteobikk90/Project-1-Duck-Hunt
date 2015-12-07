$(document).ready(function() { 

var playerName = prompt("What's your name soldier?", ".........");

$("#name").text(playerName);


	console.log("hello");

var counter = 0;

$(".duckbtn").click(function() { 
	counter+= 5;
	console.log(counter);
    $("#score").html(counter);
});

$(".restart").click(function() {
	document.location.href="";

});

var count=60;

var secondsLeft=setInterval(timer, 1000); 
function timer()
                               {
  count=count-1;
  if (count < 0)
                               {

     clearInterval(secondsLeft);
     return;
  }

 document.getElementById("timer").innerHTML=count + " secs";
};

 
});


//$(document).ready(function(){
//    animateDiv();
//    
//});
//
//function makeNewPosition(){
//    
//  
//    var h = $(window).height() - 250;
//    var w = $(window).width() - 100;
//    
//    var nh = Math.floor(Math.random() * h);
//    var nw = Math.floor(Math.random() * w);
//    
//    return [nh,nw];    
//    
//}
//
//function animateDiv(){
//    var newq = makeNewPosition();
//    $('.duckbtn').animate({ top: newq[0], left: newq[1] }, function(){
//      animateDiv();        
//    });
//    
//};
//
//
//soundManager.setup({
//   url: 'js/soundmanager/swf',
//   flashVersion: 9, 
//   onready: function() {
//
//   console.log("soundmanager");
//
//
//   
//var playButton = document.getElementsByClassName("duckbtn");
// playButton[0].addEventListener("click" , function(event) {
//
//   var mySound = soundManager.createSound({
//     "id": 'ducksound',
//     "url" :"sounds/duck.mp3",
//   });
//   mySound.play(); 
// })
//
//
//}
//
//
//})
//
//
//
//
//