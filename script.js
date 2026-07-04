let size = 16
let opacity = 100
let opacityDecreases = true;

let container = document.querySelector(".container");
const body = document.querySelector("body");

let buttonSizeGrid = document.createElement("button");
buttonSizeGrid.classList.add("button-sizegrid");
buttonSizeGrid.textContent = "Regenerate Grid";
body.appendChild(buttonSizeGrid);


buttonSizeGrid.addEventListener("click", () => regenerateGrid())

createSquareGrid(size)
addHoverEffect()

function createSquareGrid(size) {
    for (let i = 1; i <= size; i++) {

        const row = document.createElement("div")
        row.classList.add("row")

        for (let j = 1; j <= size; j++) {
            const square = document.createElement("div")
            square.classList.add("square")
            row.appendChild(square)
        }

        container.appendChild(row)

    }
}

function selectRandomColor() {
    return Math.floor(Math.random()*256);
}

function selectOpacity() {
    if (opacity == 0) opacityDecreases = false;
    if (opacity == 100) opacityDecreases = true;
    return opacityDecreases ? --opacity : ++opacity
}

function addHoverEffect() {
    let squares = document.querySelectorAll(".square");

    squares.forEach(square =>
        square.addEventListener("mouseenter", () =>
            square.style.background = `rgb(${selectRandomColor()} ${selectRandomColor()} ${selectRandomColor()} / ${selectOpacity()}%)`));

    squares.forEach(square =>
        square.addEventListener("mouseleave", () =>
            setTimeout(() => square.style.backgroundColor = "", 2000)));
}

function regenerateGrid() {
    size = parseInt(prompt("Size of Grid:"))
    if (Number.isInteger(size) && size > 0) {
        if (size < 100) {
            body.removeChild(container);
            container = document.createElement("div")
            body.appendChild(container)
            body.removeChild(buttonSizeGrid)
            body.appendChild(buttonSizeGrid)
            createSquareGrid(size)
            addHoverEffect()
        } else alert("Number must be maximum of 100")
    } else alert("Digit a valid number")
}