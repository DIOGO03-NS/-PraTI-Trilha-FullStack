/*
    Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
    todas as palavras únicas e exibi-las em um array.
*/

function separaStringEmArray (string){
    let array = [];
    let palavras = string.split(' ');
    palavras.forEach(element => {
        if (!array.includes(element)){
            array.push(element);
        }
    });

    return array;
}
