/*
    8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
    e escreve-los em ordem crescente.
*/
const prompt = require('prompt-sync')();
const valueA = Number(prompt('insira o valor A: '));
const valueB = Number(prompt('insira o valor B: '));

if (valueA > valueB){
    console.log(`${valueB}, ${valueA}`);
} else{
    console.log(`${valueA}, ${valueB}`);
}