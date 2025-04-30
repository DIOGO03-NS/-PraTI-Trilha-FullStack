/* 
    4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. 
    Utilize switch-case para implementar a lógica de cada opção selecionada.
*/
const prompt = require('prompt-sync')();
const option = Number(prompt('escolha uma opção de 1-5: '));

switch (option){
    case 1: 
        console.log('opção 1 escolhida');
        break; 
    
    case 2: 
        console.log('opção 2 escolhida');
        break;
    
    case 3: 
        console.log('opção 3 escolhida');
        break; 
    
    case 4: 
        console.log('opção 4 escolhida'); 
        break; 
    
    case 5: 
        console.log('opção 5 escolhida'); 
        break; 

    default: 
        console.log('essa opção não existe'); 
        break;
}
