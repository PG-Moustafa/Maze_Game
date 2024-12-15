//Initialized variables
let is_game_running = false; 
let score = 0;

//Declared variables
let end;
let start;
let boundaries;
let reset;
let show_score;
let background_music;
let win_sound;
let lose_sound;

document.addEventListener("DOMContentLoaded", loadPage);

function display_score() {
    show_score = document.getElementById("txt_score");
    show_score.innerHTML = score;
}

function gameOver(){
    if(is_game_running){
        for(let i = 0; i < boundaries.length; i++)
            boundaries[i].style.backgroundColor = "rgb(243, 159, 159)"; 
        if(score > 0)
            score = score - 1;
        lose_sound.play();
        display_score();
        is_game_running = false;
    }
}

function startGame(){
    timer();
    is_game_running = true;
    for(let i = 0; i < boundaries.length; i++)
        boundaries[i].style.backgroundColor = "#eeeeee"; 
}

function endGame(){
    if(is_game_running){
        for(let i = 0; i < boundaries.length; i++)
            boundaries[i].style.backgroundColor = "rgb(113 225 141)"; 
        score = score + 5;
        win_sound.play();
        display_score();
        is_game_running = false;
    }
}

function resetGame() {
    score = 0;
    display_score();
}

function loadPage(){
    end = document.getElementById("end");
    start = document.getElementById("start");
    boundaries = document.getElementsByClassName("boundary");
    status_display =  document.getElementById("status");
    reset = document.getElementById("reset");

    end.addEventListener("mouseover", endGame);
    start.addEventListener("click", startGame);
    reset.addEventListener("click", resetGame);
    for(let i = 0; i < boundaries.length; i++){
        boundaries[i].addEventListener("mouseover", gameOver);
    }

    background_music = document.getElementById("sound1");
    background_music.volume = 0.5;
    // background_music.play();

    win_sound = document.getElementById("sound2");
    lose_sound = document.getElementById("sound3");
}

function timer(){
    let display = document.getElementById('display_timer');
    let sec = 5;
    let timer = setInterval(function(){
        if (is_game_running) {
            if (sec < 10) {
                display.innerHTML = '0' + sec;
            } else {
                display.innerHTML = sec;
            }
            sec--;
            if (sec < 0) {
                clearInterval(timer);
                gameOver();
            }
            
        } else {
            clearInterval(timer);
        }
    }, 1000);
}

// function add_coins() {
//     return;
// }






