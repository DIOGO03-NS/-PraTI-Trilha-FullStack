/*
6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
    Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
    Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
    Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
    Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/
const prompt = require('prompt-sync')();
const ladoA = parseFloat(prompt('Lado A: '));
const ladoB = parseFloat(prompt('Lado B: '));
const ladoC = parseFloat(prompt('Lado C: ')); 

if ((ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB)) {
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log('Triângulo Equilátero');
    } 
    else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log('Triângulo Isósceles');
    }
    else {
        console.log('Triângulo Escaleno');
    }
} else {
    console.log('Não é Triângulo');
}