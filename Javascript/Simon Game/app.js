

let gameSeq = [];



let userSeq = [];

let colors = ["yellow", "red", "green", "purple"];

let isStarted = false;
let level = 0;

let highestScore = 0;

// const body = document.querySelector('body');

let p = document.querySelector('p');
let footer = document.querySelector('footer');
let h3 = document.createElement('h3');
footer.append(h3);

let allBtn = document.querySelectorAll('.btn');

document.addEventListener('keypress', function () {

    if (isStarted == false) {
        isStarted = true;
        console.log('started');
        levelUp();
    }

})



function checkAns(idx) {
    // userSeq = [];
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp(), 1000);
        }
    }
    else {
        p.innerHTML = `Game over! Your score was <b>${level} <br> Press any key to start. </b>`
        console.log(level);
        if(level > highestScore){
            highestScore = level;
            h3.innerHTML = `Highest Score is <b>${highestScore}.</b>`;
            

        }
        // console.log(userSeq);
        // console.log(gameSeq);
        reset();
    }
}

function reset() {
    isStarted = false;
    level = 0;
    userSeq = [];
    gameSeq = [];
    console.log(userSeq);
    console.log(gameSeq);

}


for (btn of allBtn) {
    btn.addEventListener('click', buttonPressed);
}


function gameFlash(btn) {

    btn.classList.add('gameflash');

    setTimeout(function () {
        btn.classList.remove('gameflash');
    }, 300)


}

function userFlash(btn) {
    btn.classList.add('userFlash');

    setTimeout(function () {
        btn.classList.remove('userFlash')
    }, 300)
}

function buttonPressed() {
    let btn = this;
    // console.log(btn);
    userFlash(btn);

    userColor = btn.getAttribute("id")
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
    // console.log(userSeq);
}



function levelUp() {
    userSeq = []
    level++;
    p.innerText = `Level ${level}`;

    let randidx = Math.floor(Math.random() * 3);
    let randColor = colors[randidx];

    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randidx);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

}

