/*
    Crie function debounce(fn, delay) que receba uma função fn e um delay
    em ms, retornando uma nova função que só executa fn se não for
    chamada novamente dentro do intervalo.
*/

function debounce(fn, delay) {
    let timer = null;
  
    function debounced(...args) {
      if (timer) clearTimeout(timer);
  
      function callFn() {
        fn.apply(this, args);
      }
  
      timer = setTimeout(function recur() {
        callFn();
      }, delay);
    }
  
    return debounced;
  }