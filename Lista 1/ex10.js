/*
    10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/
const prompt = require('prompt-sync')();
const number = Number(prompt('digite um número inteiro: '));

for (i = 0; i < 10; i++){
    console.log(number);
}