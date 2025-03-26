const container = document.querySelector(".container");

createGird(16);

function createGird (gridNumber) {

    container.innerHTML = "";//to clear the container(resetting the grid)

    let size = gridNumber;
    for (let i=0; i<size; i++) {
        for (let j=0; j<size; j++) {
            const div = document.createElement("div");
            div.classList.add("box");
            div.style.width = (100 / size) + "%";
            div.style.height = (100 / size) + "%";
            container.appendChild(div);
        }
    }
    
    const boxes = document.querySelectorAll(".box");
    // console.log (boxes.length);
    boxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "black";
        });
    });
}

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    let gridNumber = 0;
    do {
        gridNumber = prompt("Enter the number of squares per side");
    } while (gridNumber < 1 || gridNumber > 100);
    createGird(gridNumber);
})