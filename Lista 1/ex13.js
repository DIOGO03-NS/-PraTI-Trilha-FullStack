/*
    13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
    a média aritmética desses números.
*/
const prompt = require('prompt-sync')(); 
let sum = 0
while (true){
    let value = Number(prompt('digite o valor (0 para finalizar): ')); 
    sum += value; 

    if (value == 0){
        break
    }
}

console.log('a soma é: ' + sum);