let container = document.querySelector(".container");

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

grid(16);