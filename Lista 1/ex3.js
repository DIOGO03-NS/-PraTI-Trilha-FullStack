// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
const prompt = require('prompt-sync')();
const grade = Number(prompt('Insira a nota: '));

if (grade < 3){
    console.log('reprovado');
} else if (grade < 7){
    console.log('recuperação');
} else {
    console.log('aprovado');
}