/*
    7. Mapeamento e Ordenação
    Dado um array produtos = [{ nome, preco }, ...], crie uma função que
    retorne um novo array apenas com os nomes, ordenados por preço
    crescente, usando map, sort.
*/

function MapingOrdering(productsPrices){
    let products = [];

    productsPrices.sort((a, b) => a.price - b.price);
    productsPrices.map(p => products.push(p.name));

    return products;
}

const produtos = [
    { name: 'Banana', price: 5 },
    { name: 'Maçã', price: 3 },
    { name: 'Laranja', price: 4 }
];

console.log(MapingOrdering(produtos)); // Esperado: ['Maçã', 'Laranja', 'Banana']