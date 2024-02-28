alert("Boas vindas ao jogo do mundo secreto"); 
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random () * numeroMaximo + 1 );
console.log(numeroSecreto); 
let chute; 
let tentativas = 1; 

while (chute != numeroSecreto) { 
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    
    if (chute == numeroSecreto) {
        break;
    } else { 
        if (chute > numeroSecreto) { 
            alert (`O número secreto é menor que o ${chute}`); 
        } else {  
            alert (`O número secreto é maior que o ${chute}`); 
        } 
        tentativas++; 
    } 
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert (`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// para ver o *comments.js*, acessar o gist 