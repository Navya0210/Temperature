function convertTemperature() {
  let temp = parseFloat(document.getElementById("temperature").value);
  let unit = document.getElementById("unit").value;
  let result = "";

  if (isNaN(temp)) {
    result = "⚠ Please enter a valid number!";
  } else {
    if (unit === "celsius") {
      result = `${(temp * 9/5 + 32).toFixed(2)} °F (Fahrenheit) | ${(temp + 273.15).toFixed(2)} K (Kelvin)`;
    } 
    else if (unit === "fahrenheit") {
      result = `${((temp - 32) * 5/9).toFixed(2)} °C (Celsius) | ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K (Kelvin)`;
    } 
    else if (unit === "kelvin") {
      result = `${(temp - 273.15).toFixed(2)} °C (Celsius) | ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F (Fahrenheit)`;
    }
  }

  document.getElementById("result").innerText = result;
}
