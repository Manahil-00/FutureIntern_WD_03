const inputField = document.getElementById('temperatureInput');
const celsiusRadio = document.getElementById('celsius');
const fahrenheitRadio = document.getElementById('fahrenheit');
const convertButton = document.getElementById('convertButton');
const resultDisplay = document.getElementById('resultDisplay');
function updateButtonText() {
    if (celsiusRadio.checked) {
        convertButton.textContent = 'Convert to Fahrenheit';
    } else if (fahrenheitRadio.checked) {
        convertButton.textContent = 'Convert to Celsius';
    }
}
celsiusRadio.addEventListener('change', updateButtonText);
fahrenheitRadio.addEventListener('change', updateButtonText);
convertButton.addEventListener('click', () => {
    let temperature = parseFloat(inputField.value);

    if (isNaN(temperature)) {
        resultDisplay.textContent = "Please enter a valid number.";
        return;
    }

    let convertedTemperature;
    let convertedUnit;
    if (celsiusRadio.checked) {
        convertedTemperature = (temperature * 9/5) + 32; // Celsius to Fahrenheit
        convertedUnit = "Fahrenheit";
    } else if (fahrenheitRadio.checked) {
        convertedTemperature = (temperature - 32) * 5/9; // Fahrenheit to Celsius
        convertedUnit = "Celsius";
    }
    resultDisplay.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
});

updateButtonText();
