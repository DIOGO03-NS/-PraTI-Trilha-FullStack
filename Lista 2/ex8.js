/*
    8. Agrupamento por Propriedade
    Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
    cada chave é um cliente e o valor é a soma de todos os seus total.
*/

function ReducePropriety(sales) {
    return sales.reduce((acc, user) => {
        // Soma o total de cada cliente
        acc[user.cliente] = (acc[user.cliente] || 0) + user.total;
        return acc;
    }, {});
}

// Teste:
const vendas = [
    { cliente: 'Ana', total: 10 },
    { cliente: 'Beto', total: 20 },
    { cliente: 'Ana', total: 15 }
];

console.log(ReducePropriety(vendas)); // Esperado: { Ana: 25, Beto: 20 }
