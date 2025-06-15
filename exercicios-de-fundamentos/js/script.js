// Variáveis e tipos de dados

// 1 - Conversão de temperatura

const celsius = 30;
const fahrenheit = 86;

function celsiusToFahrenheit (celsius){
  return (celsius * 9) / 5 + 32;
};

function fahrenheitToCelsius (fahrenheit){
  return ((fahrenheit - 32) * 5) / 9;
};

console.log(`${celsius} graus celsius equivalem a ${celsiusToFahrenheit(celsius)} graus fahrenheit`);

console.log(`${fahrenheit} graus fahrenheit equivalem a ${fahrenheitToCelsius(fahrenheit)} graus celsius`);