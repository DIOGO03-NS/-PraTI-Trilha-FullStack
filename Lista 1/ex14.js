/*
    14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
    utilizando um loop for ou while.
*/
const prompt = require('prompt-sync')();
let number = Number(prompt('digite o valor: '));
let fatorial = 1;

while (number >= 1){
    fatorial *= number;
    number--;
}

console.log(fatorial);