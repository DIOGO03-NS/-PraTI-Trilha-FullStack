/* 
    1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
*/
const prompt = require('prompt-sync')();
const number = Number(prompt('Digite um número: '));

if (number % 2 == 0) {
    console.log('Numero Par');
} else {
    console.log('Numero Impar')
}