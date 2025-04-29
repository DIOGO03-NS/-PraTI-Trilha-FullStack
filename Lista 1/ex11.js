/* 
    11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
    utilizando um loop for. 
*/
const prompt = require('prompt-sync')();
let sum = 0;

for (i = 0; i < 5; i++){
    sum += Number(prompt('digite o valor : '));
}

console.log('A soma é : ' + sum);