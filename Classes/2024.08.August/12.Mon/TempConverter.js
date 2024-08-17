// Predefined values
const celsius = 25;
const fahrenheitFactor = 32;
const fahrenheit = 90;
const kelvin = 750;
const kelvinFactor = 273.5;

// Conversion formulas
let celsiusToFahrenheit = (9/5) * celsius + fahrenheitFactor;
let celsiusToKelvin = celsius + kelvinFactor;
let fahrenheitToCelsius = (5/9) * (fahrenheit - fahrenheitFactor);
let fahrenheitToKelvin = (fahrenheit - fahrenheitFactor) * (5/9) + kelvinFactor;
let kelvinToCelsius = kelvin - kelvinFactor;
let kelvinToFahrenheit = (kelvin - kelvinFactor) * (9/5) + fahrenheitFactor;


console.log('');
console.log(`${celsius} degrees Celsius are equal to ${celsiusToFahrenheit.toFixed(1)} degrees Fahrenheit`);
console.log(`${kelvin} degree Kelvin are equal to ${kelvinToFahrenheit.toFixed(1)} degrees Fahrenheit`);
console.log(`${fahrenheit} degree Fahrenheit are equal to ${fahrenheitToKelvin.toFixed(2)} degrees Kelvin`);
console.log(`${celsius} degree Celsius are equal to ${celsiusToKelvin.toFixed(2)} degrees Kelvin`);
console.log(`${kelvin} degree Kelvin are equal to ${kelvinToCelsius.toFixed(1)} degrees Celsius`);
console.log(`${fahrenheit} degree Fahrenheit are equal to ${fahrenheitToCelsius.toFixed(1)} degrees Celsius`);
console.log('');


// Declarations of various prompt menus to use when the user is required to input something.
let menu = `Select the scale you want to convert:
 
Enter option number or scale name.
1. Celsius
2. Fahrenheit
3. Kelvin
`

let celsiusConvertMenu = `Select the scale you want to convert to:

Enter option number or scale name.
1. Fahrenheit
2. Kelvin
`

let fahrenheitConvertMenu = `Select the scale you want to convert to:

Enter option number or scale name.
1. Celsius
2. Kelvin
`

let kelvinConvertMenu = `Select the scale you want to convert to:

Enter option number or scale name.
1. Celsius
2. Fahrenheit
`

// This string will be used to show an alert to users when they input the wrong value.
let wrongInput = `ERROR:
Wrong input. Refresh the page to try again.
`

// Variable to store user selected option.
let menuOption = prompt(menu);

// Since we allow the user to input the option number or the scale name, this condition checks for any of those options.
if (menuOption == "1" || menuOption.toLowerCase() == "celsius") {
    
    // In this variable we store the degree value that the user wants to convert.
    // Since prompt() returns a string we use parseFloat() to convert the string to a number.
    let celsiusDegrees = parseFloat(prompt("Enter the Celsius degree amount you want to convert:"));
    // console.log(typeof celsiusDegrees)

    // First we check if the user input is valid.
    if (isNaN(celsiusDegrees)) {
        alert(wrongInput);                
    }
    // If input is valid we then ask to which scale the user wants to convert to.
    else {

        let convertOption = prompt(celsiusConvertMenu);

        
        if (convertOption == "1" || convertOption.toLowerCase() == "fahrenheit") {

            // With this formula we asign the converted value to a variable and alert the result to the user.
            let fahrenheitDegrees = (9/5) * celsiusDegrees + fahrenheitFactor;
            alert(`${celsiusDegrees} degrees Celsius is equal to ${fahrenheitDegrees.toFixed(1)} degrees Fahrenheit.`)
        }

        else if (convertOption == "2" || convertOption.toLowerCase() == "kelvin") {
            let kelvinDegrees = celsius + kelvinFactor;
            alert(`${celsiusDegrees} degrees Celsius is equal to ${kelvinDegrees.toFixed(2)} degrees Kelvin.`)
        }

        else {
            alert(wrongInput)
        }
    }

}

else if (menuOption == "2" || menuOption.toLowerCase() == "fahrenheit") {
    let fahrenheitDegrees = parseFloat(prompt("Enter the Fahrenheit degree amount you want to convert: "));
    // console.log(typeof value)

    if (isNaN(fahrenheitDegrees)) {
        alert(wrongInput);                
    }
    
    else {        
        let convertOption = prompt(fahrenheitConvertMenu);

        if (convertOption == "1" || convertOption.toLowerCase() == "celsius") {
            let celsiusDegrees = (5/9) * (fahrenheitDegrees - fahrenheitFactor);
            alert(`${fahrenheitDegrees} degrees Fahrenheit is equal to ${celsiusDegrees.toFixed(1)} degrees Celsius.`)
        }

        else if (convertOption == "2" || convertOption.toLowerCase() == "kelvin") {
            let kelvinDegrees = (fahrenheitDegrees - fahrenheitFactor) * (5/9) + kelvinFactor;
            alert(`${fahrenheitDegrees} degrees Fahrenheit is equal to ${kelvinDegrees.toFixed(2)} degrees Kelvin.`)
        }

        else {
            alert(wrongInput)
        }
    }

}

else if (menuOption == "3" || menuOption.toLowerCase() == "kelvin") {
    let kelvinDegrees = parseFloat(prompt("Enter the Kelvin degree amount you want to convert: "));
    // console.log(typeof value)
    if (isNaN(kelvinDegrees)) {
        alert(wrongInput);                
    }
    
    else {        
        let convertOption = prompt(kelvinConvertMenu);

        if (convertOption == "1" || convertOption.toLowerCase() == "celsius") {
            let celsiusDegrees = kelvinDegrees - kelvinFactor;
            alert(`${kelvinDegrees} degrees Kelvin is equal to ${celsiusDegrees.toFixed(1)} degrees Celsius.`)
        }

        else if (convertOption == "2" || convertOption.toLowerCase() == "fahrenheit") {
            let fahrenheitDegrees = (kelvinDegrees - kelvinFactor) * (9/5) + fahrenheitFactor;
            alert(`${kelvinDegrees} degrees Kelvin is equal to ${fahrenheitDegrees.toFixed(1)} degrees Fahrenheit.`)
        }

        else {
            alert(wrongInput)
        }
    }

}

else {
    alert(wrongInput)
}
