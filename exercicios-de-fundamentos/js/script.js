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

// 2 - Calculo IMC

function calcularIMC(altura, peso){
  return (peso / (altura * altura)).toFixed(2);
};

const imc = (calcularIMC(1.68, 78));

console.log(`Seu IMC é ${imc}`);

// 3 - Concatenação de strings e interpolação

function criarMensagem(nome, idade, cidade){
  return `Olá, ${nome}, Você tem ${idade} anos e mora em ${cidade}`;
}

const mensagem = criarMensagem('Fábio', 31, "Duque de Caxias");
console.log(mensagem);
