const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log ('Esse programa vai checar se voce e maior de 18 anos e tem habilitacao para saber se voce pode entrar no bar ');
console.log('alem da suas verificações, precisamos verificar se voce esta na lista de presença do horario');


readLine.question('Qual o ano de nascimento?', ano =>{
    if(ano> 2004){
      console.log('voce nao tem 18 anos');
    }else{
         readLine.question('Voce tem habilitaçao? (Sim/Nao)',temHabilitacao => {
     if(!(temHabilitacao.toUpperCase() === 'SIM')) {
        console.log('voce nao tem habilitacao para entrar no kart.')
    
     } else{
         readLine.question('Qual é o seu nome:', nome => {
            switch(nome){
                case 'Douglas' : 
                    console.log('bem vindo ao Kart Douglas');
                    break;
                case 'Rafael' : 
                console.log('bem vindo ao Kart Rafael');
                     break;
                     
                default:
                    console.log('Seu nome nao foi identificado na lista de presenca');

            
           }

         });

        }

    });

}
    
});