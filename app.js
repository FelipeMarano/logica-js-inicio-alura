// sempre colocar o link no final do Body
// sempre colocar ; no final do código
// instalar a extensão Live Server
// criar um popup de alerta
alert("Boas vindas ao jogo do mundo secreto"); 
// let = variável para nomear o número surpresa
let numeroSecreto = 9;
// variável nomeando o *prompt*
let chute = prompt("Escolha um número entre 1 e 10");
// define um console no console no chrome inspecionar
console.log(numeroSecreto);

// *if* e *else* = o que tiver dentro do parênteses define sua função 
// e o da chave {} define o que vai ter
// se o *chute* for igual ao *número secreto* 
if (chute == numeroSecreto) {
    // usar a crase ' e o ${} na palavra
    alert (`Isso ai! Você descobriu o número secreto (${numeroSecreto})`) 
    
} 
// se o *chute* não for igual ao *número secreto* 
else {
    alert("Você errou");
}


