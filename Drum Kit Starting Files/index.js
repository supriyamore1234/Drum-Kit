var currentAudio = null;
var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for (var i=0;i<numberOfDrumButtons;i++)
{
 while( document.querySelectorAll(".drum")[i].addEventListener("click",function()

  {
    this.style.color="blue";
     var buttonInnerHtml= this.innerHTML;
     // Stop and reset any previously playing audio

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

     switch(buttonInnerHtml)
     {
      case "w":
        currentAudio=new Audio("sounds/tom-1.mp3");
        break;

      case "a":
        currentAudio=new Audio("sounds/tom-2.mp3");
        break;
      
      case "s":
        currentAudio=new Audio("sounds/tom-3.mp3");
        break;

      case "d":
        currentAudio= new Audio("sounds/vlog..mp3");
        break;
      
      case "j":
        currentAudio = new Audio("sounds/upbeat.mp3");
        
        break;

      case "k":
      currentAudio = new Audio("sounds/emotional.mp3");
     
        break;

      case "l":
        currentAudio = new Audio("sounds/motivational.mp3")
        break;
      default: console.log(buttonInnerHtml);
      return;
     }
     currentAudio.play();

  
  })
);

}

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();