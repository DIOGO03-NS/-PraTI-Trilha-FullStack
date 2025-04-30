/* 
    5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso 
    (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
*/
const prompt = require('prompt-sync')();
const weight = Number(prompt('digite o peso: '));
const height = Number(prompt('digite a altura: ')); 
const imc = (weight / Math.pow(height, 2));

if (imc < 18.5) {
    console.log('Abaixo do peso normal');
} else if (imc < 25) {
    console.log('Peso normal');
} else if (imc < 30) {
    console.log('Sobrepeso');
} else if (imc < 35) {
    console.log('Obesidade classe 1');
} else if (imc < 40) {
    console.log('Obesidade classe 2');
} else {
    console.log('Obesidade classe 3');
}

