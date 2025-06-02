/*
    Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
    formarem uma data real (meses de 28–31 dias, ano bissexto para
    fevereiro) e false caso contrário.
*/
function ehDataValida(dia, mes, ano) {
    if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 1) {
        return false;
    } else if (mes === 2) {
        if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
            return dia <= 29; 
        } else {
            return dia <= 28;
        }
    }

    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return dia <= diasPorMes[mes - 1];
}