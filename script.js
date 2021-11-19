function getNumberOfSquares() {
    let number = 0;

    do {
        number = parseInt(prompt("Please enter the number of squares", 16));
        if (number > 100) {
            alert("the number of the squares is too large");
        }
    } while(number === NaN || number > 100);

    return number;
}

function createBoard() {
    let board = document.createElement("div");
    
    let numberOfSquares = getNumberOfSquares();

    for (let i = 0; i < numberOfSquares; i++) {
        for (let j = 0; j < numberOfSquares; j++) {
            const block = document.createElement("div");
            block.style.border = "1px solid black";
            board.appendChild(block);
        }
    }
    
    board.style.gridTemplateRows = `repeat(${numberOfSquares}, auto)`;
    board.style.gridTemplateColumns = `repeat(${numberOfSquares}, auto)`;
    board.classList.add("board");

    return board;
}

let sketchBoard = createBoard();
const main = document.querySelector(".main");
const clearBtn = document.querySelector(".controls .clear-btn");


[...sketchBoard.children].forEach(element => {
    element.addEventListener("mouseenter", (e) => {
        e.target.style.background = "black";
    });
});

clearBtn.addEventListener("click", (e) => {
    main.removeChild(sketchBoard);
    sketchBoard = createBoard();
    [...sketchBoard.children].forEach(element => {
        element.addEventListener("mouseenter", (e) => {
            e.target.style.background = "black";
        });
    });
    main.appendChild(sketchBoard);
});

main.appendChild(sketchBoard);

