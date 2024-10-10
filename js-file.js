let container = document.querySelector(".container");
let button = document.querySelector("button");
let vertical = document.querySelector(".vertical");

function grid(num){
    for (let i = 0; i < num; i++){
        let vertical = document.createElement("div");
        vertical.classList.add("vertical");
        container.appendChild(vertical);
        for(let n=0; n < num ; n++){
            let horizontal = document.createElement("div");
            horizontal.classList.add("horizontal");
            horizontal.addEventListener("mouseover", backgroundChange);
            vertical.appendChild(horizontal);
        }
    }
}

function backgroundChange(){
    this.style.backgroundColor = "pink"
}

function resetGrid(){
    let gridInt = prompt("how big do you want grid to be?");
    gridInt = parseInt(gridInt,10);
    if(!Number.isInteger(gridInt)){
        gridInt = prompt("Please provide number!");
    }
    else if (gridInt > 100 || gridInt < 1){
        gridInt = prompt("Please provide correct number!");
    }
    container.replaceChildren();
    grid(gridInt);
}

grid(16);

button.addEventListener("click", resetGrid);