/*
    Escreva um script que gere um número aleatório de 1 a 100 e peça ao
    usuário, para adivinhar. Use while para repetir até acertar, contando
    tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.
*/

function acertaNúmero (){
    const guess = Math.floor(Math.random() * 100) + 1;

    while (true) {
        const prompt = require('prompt-sync')();
        const number = Number(prompt('Digite o número: '));

        if (number === guess){
            console.log("Parabêns, acertou!");
            return 
        } 

        if (number < guess){
            console.log("Número abaixo do sorteado");
        } else {
            console.log("Número acima do sorteado");
        }
    }
}

acertaNúmero();