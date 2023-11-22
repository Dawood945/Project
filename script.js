// Function to generate a random hex color code
function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

// Generate colors dynamically using a loop
const colors = {};
const numColors = 30;

for (let i = 0; i < numColors; i++) {
    colors[`color${i + 1}`] = getRandomColor();
}

// Function to change background color using a Promise
function changeBackgroundColor(color) {
    return new Promise((resolve, reject) => {
        // Check if the color exists in the colors object
        if (colors[color]) {
            // Apply the new color to the body background
            document.body.style.backgroundColor = colors[color];
            // Resolve the promise
            resolve(`Background color changed to ${color}`);
        } else {
            // Reject the promise with an error message
            reject(`Invalid color: ${color}`);
        }
    });
}

// Callback function to be executed after changing the background color
function afterColorChange(message) {
    console.log(message);
    // You can add more actions here
}

// Event listener for button click
document.getElementById('changeColorButton').addEventListener('click', function () {
    // Get a random color from the colors object
    const colorOptions = Object.keys(colors);
    const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];

    // Use the changeBackgroundColor function with a promise
    changeBackgroundColor(randomColor)
        .then(message => afterColorChange(message))
        .catch(error => console.error(error));
});