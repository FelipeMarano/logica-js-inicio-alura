alert("Boas vindas ao jogo do mundo secreto"); 

let numeroSecreto = 9;
let chute; 
let tentativas = 1; 


console.log(numeroSecreto);


while (chute != numeroSecreto) { 
    chute = prompt("Escolha um número entre 1 e 10"); 
    
    if (chute == numeroSecreto) {
         alert (`Isso ai! Você descobriu o número secreto (${numeroSecreto} com ${tentativas})`); 
    
    } else { 
        if (chute > numeroSecreto) { 
            alert (`O número secreto é menor que o ${chute}`); 
        } else {  
            alert (`O número secreto é maior que o ${chute}`); 
        } 
        tentativas++; 
    } 
}


