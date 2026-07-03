const heigth = 16;
const width = 16;

const container = document.querySelector(".container")

function createSquareGrid(heigth, width) {
    for (let i = 1; i <= width; i++) {

        const row = document.createElement("div")
        row.classList.add("row")

        for (let j = 1; j <= heigth; j++) {
            const square = document.createElement("div")
            square.classList.add("square")
            row.appendChild(square)
        }

        container.appendChild(row)

    }
}

createSquareGrid(heigth, width)

const squares = document.querySelectorAll(".square");

squares.forEach(square => 
    square.addEventListener("mouseenter",() => 
        square.style.backgroundColor = "red"));
    
squares.forEach(square => 
    square.addEventListener("mouseleave",() => 
        setTimeout(() => square.style.backgroundColor = "", 2000)));