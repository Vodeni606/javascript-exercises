const convertToCelsius = function(Fahrenheit) {
  let celsius = (Fahrenheit-32)*5/9;

  if (celsius === 0){
    return celsius;
  }else{
    let fixedCelsius = celsius.toFixed(1);
    let floatNum = parseFloat(fixedCelsius);
    return floatNum;
  }
};

const convertToFahrenheit = function(Celsius) {
  let fahrenheit = (Celsius * 9/5 + 32)

  if (fahrenheit === 0){
    return fahrenheit;
  }else {
    let fixedFahrenheit = fahrenheit.toFixed(1);
    let floatFahrenheit = parseFloat(fixedFahrenheit);
    return floatFahrenheit;
  }

};



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
