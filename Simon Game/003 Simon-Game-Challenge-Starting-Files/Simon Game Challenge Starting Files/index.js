
var buttonsId =["green","red","yellow","blue"];

var level=0;
var clickedButtons=[];
var start =true;
var userClicked =[];

$(document).keypress(function(){
    if(start){
    nextSequence();
    start= false;
    }
});
   
function buttonSound(nameOfSound)
{
    var audio =new Audio("sounds/"+nameOfSound+".mp3");
    audio.play();
}

function nextSequence()
{
    userClicked=[];
    level++;
    $("#level-title").text("Level " + level);
    var randNumber = Math.floor(Math.random()*4);
    buttonSound(buttonsId[randNumber]);
    $("#"+buttonsId[randNumber]).fadeIn(100).fadeOut(100).fadeIn(100);
    clickedButtons.push(buttonsId[randNumber]);
}
   

$(".btn").click(function()
{
    var userClickedID = $(this).attr("id");
    userClicked.push(userClickedID);
    buttonSound(userClickedID);
    animatePress(userClickedID);
    checkAnswer(userClicked.length-1);
});

function checkAnswer(index)
{
    if(clickedButtons[index]===userClicked[index])
    {
        if(clickedButtons.length===userClicked.length)
        {
            setTimeout(function()
            {
                nextSequence();
            },1000);
        }
    }
    else {
        buttonSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
  
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
        startOver();
    }

}
   
function startOver() {
    level=0;
    clickedButtons=[];
    start= true;
  }

function animatePress(currentColor) {
$("#" + currentColor).addClass("pressed");
setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
}, 100);
}

