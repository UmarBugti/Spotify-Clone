console.log("Wellcome to tic tac toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X";

let isgameover = false;

// function to change the turn
const changeTurn = () => {
    return turn === "x" ? "0" : "x";
}

// function to check for a Win    ye check kary gaa k kyaa kisi ny win kyaa
const checkwWin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
    let Wins = [
        // posbalties of win
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    Wins.forEach(e => {  //ager
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {

            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
        }
    })
}

// Game logic
// music ko play kerny kyly
// music.play()



let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkwWin();
            if (!isgameover) {

                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }

    })
})

// rest button ko click kerny py sub kuch reset ho jaay
 
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})