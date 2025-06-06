/*
    Implemente function memoize(fn) que armazene em cache chamadas
    anteriores de fn (por argumentos), retornando resultados instantâneos em
    repetidas invocações.
*/

function Memoize(fn) {
    const cache = {};

    return function(...args){
        if (cache[args]){
            return cache[args];
        } 

        const result = fn(...args);
        cache[args] = result;
        return result;
    }
}

function teste(x) {
    const start = Date.now();
    while (Date.now() - start < 3000) {} // Delay de 3 segundos
    return x + 1;
}

const memoize = Memoize(teste)

console.time('tempo')
const teste1 = memoize(4)
console.timeEnd('tempo')

console.time('tempo')
const teste2 = memoize(4)
console.timeEnd('tempo')

