/* 
    2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso)
    com base no valor fornecido, utilizando uma estrutura de controle if-else.
*/
const prompt = require('prompt-sync')();
const age = Number(prompt('Digite a idade: '));

if (age < 0){
    console.log('idade inválida');
} else if (age <= 12){
    console.log('é uma criança');
} else if (age <= 20) {
    console.log('é adolescente');
} else if (age <= 55) {
    console.log('é adulto');
}else {
    console.log('é idoso');
}