/*
    Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
    um Error, e n === 0 retornando 1.
*/

function fatorial (number){
    if (number == 1){
        return 1;
    } else {
        return number * fatorial(number - 1);
    }
   
}

console.log(fatorial(5))