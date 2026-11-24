//your JS code here. If required.
let container = document.querySelector(".container");

for (let i = 0; i < 800; i++) {

    // Create a new div
    let square = document.createElement("div");

    // Add class to div
    square.classList.add("square");

    // Add mouse hover event
    square.addEventListener("mouseenter", function() {

        // Generate random color
        let color = randomColor();

        // Apply random color
        square.style.backgroundColor = color;

        // Remove color after 1 second
        setTimeout(function() {
            square.style.backgroundColor = "#1d1d1d";
        }, 1000);

    });

    // Add square inside container
    container.appendChild(square);
}


// Function to generate random color
function randomColor() {

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}