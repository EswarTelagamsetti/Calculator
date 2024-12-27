const display = document.getElementById("display");

// Function to append input to the display
function appendToDisplay(input) {
    display.value += input;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Function to remove the last character (Backspace)
function backspace() {
    display.value = display.value.slice(0, -1);
}
