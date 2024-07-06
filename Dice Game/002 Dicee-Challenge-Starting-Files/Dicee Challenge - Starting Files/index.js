var diceImages=["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"]

var randomNumber = Math.random();
randomNumber =Math.round(randomNumber * (diceImages.length -1));

var randomNumber2 = Math.random();
randomNumber2 = Math.round(randomNumber2 * (diceImages.length -1));

var imageVar = document.querySelector(".img1");
imageVar.src = diceImages[randomNumber];

var imageVar2 = document.querySelector(".img2");
imageVar2.src = diceImages[randomNumber2];

if(randomNumber > randomNumber2)
    {
    document.querySelector(".winTitle").innerHTML ="Player 1 win !";
    }
else if(randomNumber < randomNumber2)
    {

    document.querySelector(".winTitle").innerHTML ="Player 2 win !";
    }
else
    {
    document.querySelector(".winTitle").innerHTML ="Its a tia !";
    }