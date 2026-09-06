const container = document.querySelector(".container");
const button = document.querySelector("button");

let noOfSquares = 16
const addSquares = noOfSquares => {

    for (let i = 0; i < noOfSquares ** 2; i++) {
        const square = document.createElement("div");
        square.className = "square";
        square.style.width = `${640 / noOfSquares}px`;
        square.style.height = `${640 / noOfSquares}px`;
        square.style.opacity = 0.1;

        container.appendChild(square);
        square.addEventListener("mouseenter", () => {
            if (square.style.backgroundColor === '') {
                square.style.backgroundColor = pickColor();
            }
            if (square.style.opacity < 1) {
                square.style.opacity = parseFloat(square.style.opacity) + 0.1;
            }
        });
    }
}

const removeSquares = () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.remove())
};

addSquares(noOfSquares);


const pickColor = function () {
    const colors = [
        "#FF5733",
        "#FFC300",
        "#FF6FFF",
        "#33FF57",
        "#33CFFF",
        "#FF1493",
        "#00FFEF",
        "#FF4500",
        "#FFD700",
        "#7CFC00",
        "#00BFFF",
        "#FF00FF",
        "#FF69B4",
        "#ADFF2F",
        "#40E0D0",
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
};

button.addEventListener("click", () => {
    let keepAsking = true;
    do {
        noOfSquares = Number(prompt("Enter number of boxes to have (max. 100): "));
        if (isNaN(noOfSquares) || noOfSquares > 100 || noOfSquares == "") {
            alert("Invalid! Enter a number.");
        } else {
            keepAsking = false;
        }
    } while (keepAsking);

    removeSquares();
    addSquares(noOfSquares);
});
