// sempre colocar o link no final do Body
// sempre colocar ; no final do código
// instalar a extensão Live Server

// criar um popup de alerta
alert("Boas vindas ao jogo do mundo secreto"); 

// let = variável para nomear ou dar valor o *númeroSecreto*
let numeroSecreto = 9;
let chute; // dar valor ao *chute*
let tentativas = 1; // para dizer quantas tentativas (erros e o acerto) 

// define um console no console no chrome inspecionar
console.log(numeroSecreto);

// *while* = enquanto (ou seja, enquanto o número não for igual ao *número secreto*, as tentativas continuam)
while (chute != numeroSecreto) { // *!=* = diferente
    chute = prompt("Escolha um número entre 1 e 10"); // *chute* é a variável nomeando o *prompt*
    
    // *if* e *else* = o que tiver dentro do parênteses define sua função 
    // e o da chave {} define o que vai ter
    
    // se o *chute* for igual ao *número secreto* 
    if (chute == numeroSecreto) {
        
        // usar a crase ' e o ${} na palavra para estar pronto para alteração
        alert (`Isso ai! Você descobriu o número secreto (${numeroSecreto} com ${tentativas})`); 
        
    } else {  // se o *chute* não for igual ao *número secreto* 
        if (chute > numeroSecreto) { // *if* dentro do *else* para criar condição do erro
            alert (`O número secreto é menor que o ${chute}`); // a template string *${}* usada para ser dinamico
        } else {   // *else* para dar outra opção caso o *chute* for menor que o *número secreto*
            alert (`O número secreto é maior que o ${chute}`); 
        } 
        tentativas++; // o *++* faz a mesma função do que se fosse (tentativas = tentativas + 1)       
    } 
}


