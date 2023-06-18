//detecting buttonpress on webpage
var drumlength = document.querySelectorAll(".drum").length ;
for (let x = 0; x < drumlength ;x++) {
    document.querySelectorAll(".drum")[x].addEventListener("click",
       function(){
        var buttonInnerHTML = this.innerHTML;
        sound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
       });    
    
}
// detect btn press on keyboard
document.addEventListener("keydown",function (event) {
   sound(event.key);
   buttonAnimation(event.key);
})


function buttonAnimation(pressedkey) {
   var clickedbutton = document.querySelector("."+ pressedkey);
   var fade = clickedbutton.classList.add("pressed") 
   setTimeout(function () {
     clickedbutton.classList.remove('pressed');
   },1000);
   
}
function sound(key){
    switch (key) {
      case "w":
       var tom1 = new Audio("sounds/tom-1.mp3") ;
       tom1.play();
      break;
      case "a":
       var tom1 = new Audio('sounds/tom-2.mp3') ;
       tom1.play()  
      break;
      case "s":
       var tom3 = new Audio('sounds/tom-3.mp3') ;
       tom3.play()  
      break;
      case "d":
       var tom4 = new Audio('sounds/tom-4.mp3') ;
       tom4.play()  
      break;
      case "j":
       var snare = new Audio('sounds/snare.mp3') ;
       snare.play()  
      break;
      case "k":
       var crash = new Audio('sounds/crash.mp3') ;
       crash.play()  
      break;
      case "l":
       var kick = new Audio('sounds/kick.mp3') ;
       kick.play()  
      break;
      default: console.log(buttonInnerHTML);
      break;
  }}

//------------------------------------------------------------------------------------------------------------------
// function clickme(){
//     var buttonInnerHTML = document.querySelectorAll(".drum").innerHTML;
// // no idea why this statement didnt work --> var buttonInnerHTML = document.querySelectorAll(".drum").innerHTML;

//     switch( buttonInnerHTML ) {
    // same switch cases
// }}
// for (let x = 0; x < drumlength ;x++) {
//     document.querySelectorAll(".drum")[x].addEventListener("click",clickme())}
//------------------------------------------------------------------------------------------------------------------


// my while loop creates infinite loops
// var i = 0;
// while ( i < drumlength ) {
//     document.querySelectorAll(".drum")[i].addEventListener("click",clickme);
// }