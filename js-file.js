let container = document.querySelector(".container");
let square = document.querySelector("#horizontal");

function grid() {
    for (let i = 0; i < 16; i++) {
        let squareV = document.createElement("div");
        squareV.classList.add("vertical");
        container.appendChild(squareV);
        for (let n = 0; n < 16; n++){
            let squareH = document.createElement("div");
            squareH.classList.add("horizontal");
            squareH.textContent = "horizontal";
            squareV.appendChild(squareH);
        }
    }
}

function backgroundColor(){
    square.style.backgroundColor = "purple";
}

grid();

square.addEventListener("mouseover", backgroundColor);