let container = document.querySelector(".container");
let squares = document.querySelectorAll(".horizontal");


function grid(num) {
    for (let i = 0; i < num; i++) {
        let squareV = document.createElement("div");
        squareV.classList.add("vertical");
        container.appendChild(squareV);
        for (let n = 0; n < num; n++) {
            let squareH = document.createElement("div");
            squareH.classList.add("horizontal");
            squareH.addEventListener("mouseover", backgroundChange)
            squareV.appendChild(squareH);
        }
    }
}

function backgroundChange(){
    this.style.backgroundColor = "pink";
}

grid(16);