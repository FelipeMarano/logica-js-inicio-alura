// sempre colocar o link no final do Body
// sempre colocar ; no final do código
// instalar a extensão Live Server

// criar um popup de alerta
alert("Boas vindas ao jogo do mundo secreto"); 

// let = variável para nomear ou dar valor o *númeroSecreto*
let numeroMaximo = 100;
// ex: let numeroSecreto = parseInt(Math.random () * 100 + 1 ); * = multiplicado por *100*; 
let numeroSecreto = parseInt(Math.random () * numeroMaximo + 1 ); // parte inteira;número aleatório;multiplicar;*let*;ser de 1 a 10;
// define um console no console no chrome inspecionar
console.log(numeroSecreto);
let chute; // dar valor ao *chute*
let tentativas = 1; // para dizer quantas tentativas (erros e o acerto) 


// a chave {} define o que vai ter

// *while* = enquanto (ou seja, enquanto o número não for igual ao *número secreto*, as tentativas continuam)
while (chute != numeroSecreto) { // *!=* = diferente
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`); // *chute* é a variável nomeando o *prompt*
    
    // *if* e *else* = o que tiver dentro do parênteses define sua função 
    
    // se o *chute* for igual ao *número secreto* 
    if (chute == numeroSecreto) {
        
        // para PARAR o *while* quando a função for verdadeira (ex: no if, o *chute* é igual o *numeroSecreto*, então ele para)
        break; 
            
    } else {  // se o *chute* não for igual ao *número secreto* 
        if (chute > numeroSecreto) { // *if* dentro do *else* para criar condição do erro
            alert (`O número secreto é menor que o ${chute}`); // a template string *${}* usada para ser dinamico
        } else {   // *else* para dar outra opção caso o *chute* for menor que o *número secreto*
            alert (`O número secreto é maior que o ${chute}`); 
        } 
        tentativas++; // o *++* faz a mesma função do que se fosse (tentativas = tentativas + 1)       
    } 
}

// ao invés de fazer:
// if (tentativas > 1) { 
//    alert (`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`); // plural se for maior que 1
// } else {
//  alert (`Isso ai! Você descobriu o número secreto (${numeroSecreto} com ${tentativas} tentativa`) // singular se for 1
// }
// iremos usar o Operador Ternário (condição ? expressão_se_verdadeiro : expressão_se_falso)
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert (`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
    


