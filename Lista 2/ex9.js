/*
    9. Conversão Entre Formatos
    Escreva duas funções:

    ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
    valor], ... ] e retorna o objeto equivalente.
    ○ objetoParaPares(obj) faz o inverso, retornando um array de
    pares.
*/

function paresParaObjeto(pares) {
    const object = {}
    pares.forEach(element => {
        object[element[0]] = element[1]
    });

    return object;
}

function objetoParaPares(object){
    let pares = [];

    for (key in object){
        let element = [key, object[key]];
        pares.push(element)
    }

    return pares
}

// Teste para paresParaObjeto
const pares = [['nome', 'Ana'], ['idade', 25]];
console.log(paresParaObjeto(pares)); 
// Esperado: { nome: 'Ana', idade: 25 }

// Teste para objetoParaPares
const obj = { nome: 'Ana', idade: 25 };
console.log(objetoParaPares(obj)); 
// Esperado: [['nome', 'Ana'], ['idade', 25]]