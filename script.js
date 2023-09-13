// model
let app = document.getElementById('app')
let pointTotal = 0;
let highScore = 0;
let colors = ['yellow', 'blue', 'red', 'green'];
let gameArray = [];
let yourArray = [];


// view
updateView();
function updateView(){
app.innerHTML = /*HTML*/`
    <h1 style="text-align: center;">Simon Says</h1>
    <div id="points">${pointTotal} Points</div>
    <div id="highScore">High Score: ${highScore}</div>
    <div id="colorGrid">${buttonHTML()}</div>
    <button id="startButton" onclick="newGame()">Start game</button>
`;
}

function buttonHTML(){
    let html = `
    <div onclick="chooseColor(0)" id="yellowButton"></div>
    <div onclick="chooseColor(1)" id="blueButton"></div>
    <div onclick="chooseColor(2)" id="redButton"></div>
    <div onclick="chooseColor(3)" id="greenButton"></div>
    `;
    return html;
}

// controller
function newGame(){
    pointTotal = 0;
    gameArray = [];
    yourArray = [];
    randomColor();
}

function chooseColor(index){
    yourArray.push(colors[index]);
    checkIfWin();
}

function randomColor(){
    let randomIndex = Math.floor(Math.random()*4);
    gameArray.push(colors[randomIndex]);
    lightUp(randomIndex);
}

function checkIfWin(){
    const equalsCheck = (a, b) => {
        return JSON.stringify(a) === JSON.stringify(b);
    }
    if (gameArray.length != yourArray.length){return;}
    if (equalsCheck(gameArray, yourArray)){
        pointTotal++;
        yourArray = [];
        updateView();
        randomColor();
    } else {
        if (pointTotal > highScore){
            highScore = pointTotal;
        }
        pointTotal = 0;
        updateView();
        gameArray = [];
        yourArray = [];
    }
}

function lightUp(randomIndex){
    if (randomIndex == 0){
        document.getElementById('yellowButton').classList.add('lightUp');
        setTimeout(function(){
            document.getElementById('yellowButton').classList.remove('lightUp');
        },500);
    }
    if (randomIndex == 1){
        document.getElementById('blueButton').classList.add('lightUp');
        setTimeout(function(){
            document.getElementById('blueButton').classList.remove('lightUp');
        },500);
    }
    if (randomIndex == 2){
        document.getElementById('redButton').classList.add('lightUp');
        setTimeout(function(){
            document.getElementById('redButton').classList.remove('lightUp');
        },500);
    }
    if (randomIndex == 3){
        document.getElementById('greenButton').classList.add('lightUp');
        setTimeout(function(){
            document.getElementById('greenButton').classList.remove('lightUp');
        },500);
    }
}