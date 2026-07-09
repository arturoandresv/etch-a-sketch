let size = 16;
let randomColor = false;
let ProgressiveOpacity = false;

let container = document.querySelector(".container");
const body = document.querySelector("body");

const divButtons = document.createElement("div");
divButtons.classList.add("buttons");
body.append(divButtons);

let buttonSizeGrid = document.createElement("button");
buttonSizeGrid.classList.add("button");
buttonSizeGrid.textContent = "Regenerate Grid";
divButtons.appendChild(buttonSizeGrid);

let buttonClearGrid = document.createElement("button");
buttonClearGrid.classList.add("button");
buttonClearGrid.textContent = "Clear Grid";
divButtons.appendChild(buttonClearGrid);

let buttonRandomColor = document.createElement("button");
buttonRandomColor.classList.add("button");
buttonRandomColor.classList.add("true-false");
buttonRandomColor.textContent = "Random Color";
divButtons.appendChild(buttonRandomColor);
let statusRandomColor = document.createElement("span");
statusRandomColor.textContent = "OFF";
buttonRandomColor.appendChild(statusRandomColor);

let buttonProgressiveOpacity = document.createElement("button");
buttonProgressiveOpacity.classList.add("button");
buttonProgressiveOpacity.classList.add("true-false");
buttonProgressiveOpacity.textContent = "Progressive Opacity";
divButtons.appendChild(buttonProgressiveOpacity);
let statusProgressiveOpacity = document.createElement("span");
statusProgressiveOpacity.textContent = "OFF";
buttonProgressiveOpacity.appendChild(statusProgressiveOpacity);

buttonSizeGrid.addEventListener("click", () => regenerateGrid());

buttonClearGrid.addEventListener("click", () => clearGrid());

buttonRandomColor.addEventListener("click", () => alternateRandomColor())

buttonProgressiveOpacity.addEventListener("click", () => alternateProgressiveOpacity())

createSquareGrid(size);
addHoverEffect();

function createSquareGrid(size) {
    for (let i = 1; i <= size; i++) {

        const row = document.createElement("div")
        row.classList.add("row")

        for (let j = 1; j <= size; j++) {
            const square = document.createElement("div")
            square.classList.add("square")
            square.opacityValue = 0;
            row.appendChild(square)
        }

        container.appendChild(row)

    }
}

function selectRandomColor() {
    return Math.floor(Math.random() * 256);
}

function selectOpacity(square) {
    if (ProgressiveOpacity) {
        square.opacityValue = square.opacityValue + 10
        return square.opacityValue
    } else return 100;
}

function addHoverEffect() {
    let squares = document.querySelectorAll(".square");

    squares.forEach(square =>
        square.addEventListener("mouseenter", () => {
            if (randomColor) square.style.background = `rgb(${selectRandomColor()} ${selectRandomColor()} ${selectRandomColor()} / ${selectOpacity(square)}%)`;
            else square.style.background = `rgb(10 10 10 / ${selectOpacity(square)}%)`
        }));
}

function regenerateGrid() {
    size = parseInt(prompt("Size of Grid:"))
    if (Number.isInteger(size) && size > 0) {
        if (size < 100) {
            body.removeChild(container);
            container = document.createElement("div")
            container.classList.add("container")
            body.appendChild(container)
            body.removeChild(divButtons)
            body.appendChild(divButtons)
            createSquareGrid(size)
            addHoverEffect()
        } else alert("Number must be maximum of 100")
    } else alert("Digit a valid number")
}

function clearGrid() {
    let squares = document.querySelectorAll(".square");

    squares.forEach(square => { square.style.background = "white"; square.opacityValue = 0 })
}

function alternateRandomColor() {
    if (randomColor == false) {
        randomColor = true;
        statusRandomColor.textContent = "ON";
        buttonRandomColor.style.background = "rgb(170, 255, 170)"
    } else {
        randomColor = false;
        statusRandomColor.textContent = "OFF";
        buttonRandomColor.style.background = "rgb(255, 170, 170)"
    }
}

function alternateProgressiveOpacity() {
    if (ProgressiveOpacity == false) {
        ProgressiveOpacity = true;
        statusProgressiveOpacity.textContent = "ON";
        buttonProgressiveOpacity.style.background = "rgb(170, 255, 170)"
        let squares = document.querySelectorAll(".square");

        squares.forEach(square => square.opacityValue = 0)
    } else {
        ProgressiveOpacity = false;
        statusProgressiveOpacity.textContent = "OFF";
        buttonProgressiveOpacity.style.background = "rgb(255, 170, 170)"
    }
}