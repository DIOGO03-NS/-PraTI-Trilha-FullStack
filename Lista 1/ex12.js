/*
    12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
    10) utilizando um loop for.
*/
const prompt = require('prompt-sync')();
const number = Number(prompt('Digite o número: '));

console.log('==========================');
for (i = 1; i <= 10; i++){
    console.log(`*   ${i}    X   ${number}   =   ${i*number}    *`);
}
console.log('===========================');