let size = 16;
let opacity = 100;
let opacityDecreases = true;
let randomColor = false;
let OpacityVariety = false;

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

let buttonOpacityVariety = document.createElement("button");
buttonOpacityVariety.classList.add("button");
buttonOpacityVariety.classList.add("true-false");
buttonOpacityVariety.textContent = "Opacity Variety";
divButtons.appendChild(buttonOpacityVariety);
let statusOpacityVariety = document.createElement("span");
statusOpacityVariety.textContent = "OFF";
buttonOpacityVariety.appendChild(statusOpacityVariety);

buttonSizeGrid.addEventListener("click", () => regenerateGrid());

buttonClearGrid.addEventListener("click", () => clearGrid());

buttonRandomColor.addEventListener("click", () => alternateRandomColor())

buttonOpacityVariety.addEventListener("click", () => alternateOpacityVariety())

createSquareGrid(size);
addHoverEffect();

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
        square.addEventListener("mouseenter", () => {
            if(randomColor && OpacityVariety) square.style.background = `rgb(${selectRandomColor()} ${selectRandomColor()} ${selectRandomColor()} / ${selectOpacity()}%)`; 
            else if (randomColor || OpacityVariety) {
                if(randomColor) square.style.background = `rgb(${selectRandomColor()} ${selectRandomColor()} ${selectRandomColor()})`
                if(OpacityVariety) square.style.background = `rgb(10 10 10 / ${selectOpacity()}%)`
            } else square.style.background = "rgb(10 10 10)";
        }));

    //squares.forEach(square => square.addEventListener("mouseleave", () => setTimeout(() => square.style.backgroundColor = "", 2000)));
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

function clearGrid() {
    let squares = document.querySelectorAll(".square");
    
    squares.forEach(square => square.style.background = "white")
}

function alternateRandomColor() {
    if(randomColor == false) {
        randomColor = true;
        statusRandomColor.textContent = "ON";
        buttonRandomColor.style.background = "rgb(170, 255, 170)"
    } else {
        randomColor = false;
        statusRandomColor.textContent = "OFF";
        buttonRandomColor.style.background = "rgb(255, 170, 170)"
    }
}

function alternateOpacityVariety() {
    if(OpacityVariety == false) {
        OpacityVariety = true;
        statusOpacityVariety.textContent = "ON";
        buttonOpacityVariety.style.background = "rgb(170, 255, 170)"
    } else {
        OpacityVariety = false;
        statusOpacityVariety.textContent = "OFF";
        buttonOpacityVariety.style.background = "rgb(255, 170, 170)"
    }
}