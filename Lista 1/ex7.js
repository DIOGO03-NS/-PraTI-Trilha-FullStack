/*
    7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
    forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
    compradas, calcule e escreva o valor total da compra.
*/ 
const prompt = require('prompt-sync')();

const qtdApples = Number(prompt('Insira o número de maçãs: '));

if (qtdApples < 0 ){
    console.log('Quantidade Inválida');
} else if (qtdApples <= 12){
    price = qtdApples * 0.30;
    console.log(`R$ ${price}`);
} else {
    price = qtdApples * 0.25;
    console.log(`R$ ${price}`);
}