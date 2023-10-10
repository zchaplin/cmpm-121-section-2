//purposely bad code so students can fix it - can make it worse

import './style.css'

const dino = document.getElementById("dino")
const cactus = document.getElementById("cactus")
const bird = document.getElementById("bird")

const scoreText = document.getElementById("scoreText")
let score = 0
SetText("click to start!")


var isJumping = false
let gameOver = true

document.addEventListener('mousedown', () => jump())

setInterval(function () { Main()}, 10)

function Main()
{
    if(gameOver == false)
    {
        score = score + 1;
        SetText("Score: " + score)

        CheckGameOver()
    }
}


function jump()
{
    if(gameOver == false && isJumping == false)
    {
        isJumping = true
        dino?.classList.add("jump")
        setTimeout(RemoveJump, 500)
    }
    else if (gameOver == true){
        StartGame();
    }
    
}


function RemoveJump()
{
    dino?.classList.remove("jump")
    isJumping = false;
    //mainLoop = mainLoop //bug fix?
}

function RemoveObstacles()
{
    cactus?.classList.remove("cactusMove")
    bird?.classList.remove("birdMove")
}


function CheckGameOver()
{

    if(gameOver == false && dino != null && cactus != null && bird != null)
    {
        //get is dinosaur jumping
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))

        //get cactus position
        let cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

        //get bird position
        let birdleft = parseInt(window.getComputedStyle(bird).getPropertyValue("left"))

        //detect cactus collision
        if(dinoTop >= 150 && Math.abs(cactusleft) < 7)
        {
            endGame()
        }

        //detect bird collision
        if(dinoTop <= 55 && Math.abs(birdleft) < 11)
        {
            //end game
            endGame()
        }
    }
}
function endGame(){
    //end game
    console.log("player died!")
    SetText("Final Score: " + score + "! Click To Play Again!")
    gameOver = true

    //reset player
    RemoveJump()
    
    //reset cactus
    RemoveObstacles()
}

function StartGame()
{
    console.log("Game started!")
    gameOver = false
    score = 0
    cactus?.classList.add("cactusMove")
    bird?.classList.add("birdMove")
}

function SetText(s: string)
{
    if(scoreText)
    {
        scoreText.textContent = s
    }
}
