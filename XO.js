let cells = document.querySelectorAll(".cell");
let statusText = document.querySelector("#statusText");
let restartBtn = document.querySelector("#restartBtn");
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;
let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `Lượt ${currentPlayer}`;
    running = true;
}
function cellClicked(){
    let cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `Lượt ${currentPlayer}`;
}
function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){
        let condition = winConditions[i];
        let cellA = options[condition[0]];
        let cellB = options[condition[1]];
        let cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} Thắng`;
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = `Hòa`;
        running = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `Lượt ${currentPlayer}`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}
initializeGame()