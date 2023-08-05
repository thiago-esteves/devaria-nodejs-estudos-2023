const listaArgumentos = process.argv.slice(2);

console.log('---------------------- Executando um For -------------------')

for(let controladorFor = 0; controladorFor < listaArgumentos.length;controladorFor++){
    console.log(`Posiçao ${controladorFor} valor lido = ${listaArgumentos[controladorFor]}`);
}

console.log('---------------------- Executando um While -------------------')

let controladorWhile = 0;
while(controladorWhile < listaArgumentos.length){
    console.log(`Posiçao ${controladorWhile} valor lido = ${listaArgumentos[controladorWhile]}`);
    controladorWhile++;

}
console.log('---------------------- Executando um DO While -------------------')
let controladorDoWhile = 0;
do{
    console.log(`Posiçao ${controladorDoWhile} valor lido = ${listaArgumentos[controladorDoWhile]}`);
    controladorDoWhile++;
} while(controladorDoWhile < listaArgumentos.length);

console.log('---------------------- Executando um FOR OF  -------------------');
let controladorForOf = 0;
for(const argumento of listaArgumentos){
    console.log(`Posicao= ${controladorForOf} valor lido =${argumento}`);
    controladorForOf++;
}