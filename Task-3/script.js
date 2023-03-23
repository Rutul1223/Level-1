let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

function celToFar() {
    let output = (parseFloat(celsius.value) * 9 / 5) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function farToKel() {
    let output = (parseFloat(fahrenheit.value) +273.15);
    kelvin.value = parseFloat(output.toFixed(2));
    console.log(output);
}
function kelToCel() {
    let output= (parseFloat(kelvin.value) -273.15);
    celsius.value=parseFloat(output.toFixed(2));
}
