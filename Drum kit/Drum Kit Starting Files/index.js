var numberOfButtons =document.querySelectorAll(".drum").length;



var count2=0;
for(var count =0;count<numberOfButtons;count++)
    {
        document.querySelectorAll("button")[count].addEventListener("click",function()
        {
            makeSound(this.innerHTML);
            addAnimation(this.innerHTML);
        });
    }
    
    document.addEventListener("keypress",function(event){
        makeSound(event.key);
        addAnimation(event.key)
});

function makeSound(key)
{
    switch(key){
        case "w":
            var audio1 =new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;
        case "a":
            var audio2 =new Audio("sounds/tom-2.mp3");
            audio2.play();
            break;
        case "s":
            var audio3 =new Audio("sounds/tom-3.mp3");
            audio3.play();
            break;
        case "d":
            var audio4 =new Audio("sounds/tom-4.mp3");
            audio4.play();
            break;
        case "j":
            var audio5 =new Audio("sounds/crash.mp3");
            audio5.play();
            break;
        case "k":
            var audio6 =new Audio("sounds/kick-bass.mp3");
            audio6.play();
            break;
        case "l":
            var audio7 =new Audio("sounds/snare.mp3");
            audio7.play();
            break;

}
}

function addAnimation(key)
{
    var activeButton =document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed");},100)
   
}
    // 
    // count2++;

    // if(this.innerHTML ==="w")
    //     {
            
    //     }
    // else if(this.innerHTML ==="a")
    //     {
    //         var audio =new Audio(audioList[4]);
    //         audio.play();
    //     }
    // else if(this.innerHTML ==="s")
    //     {
    //         var audio =new Audio(audioList[5]);
    //         audio.play();
    //     }
    // else if(this.innerHTML ==="d")
    //     {
    //         var audio =new Audio(audioList[6]);
    //         audio.play();
    //     }
    // else if(this.innerHTML ==="j")
    //     {
    //         var audio =new Audio(audioList[0]);
    //         audio.play();
    //     }
    // else if(this.innerHTML ==="k")
    //     {
    //         var audio =new Audio(audioList[1]);
    //         audio.play();
    //     }
    // else(this.innerHTML==="l")
    //     {
    //         var audio =new Audio(audioList[2]);
    //         audio.play();
    //     }
  