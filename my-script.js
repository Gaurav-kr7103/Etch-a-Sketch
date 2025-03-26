const container = document.querySelector(".container");

for (let i=0; i<16; i++) {
    for (let j=0; j<16; j++) {
        const div = document.createElement("div");
        div.classList.add("box");
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