/*
    15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
    Fibonacci utilizando um loop for.
*/
let f0 = 0;
let f1 = 1;
let fn = 0;

console.log(0);
console.log(1);

for (i = 0; i < 8; i++){
    fn = f0 + f1;
    f0 = f1;
    f1 = fn;

    console.log(fn);
}
