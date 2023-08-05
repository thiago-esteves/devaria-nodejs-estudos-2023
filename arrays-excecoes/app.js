try{
    const listaDeProdutosDinsponiveis = [
        'Pao',
        'Leite',
        'Cafe',
        'Laranja',
        'Macarrao',
        'Sabonete',
        'Detergente',
      ]
   
      const listaDeArgumentos = process.argv.slice(2);
   
      const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDinsponiveis.filter(produto =>{
           return listaDeArgumentos.find(argumento => argumento === produto);
      })
   
      listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nos temos:${produto}`));
   
      const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
           return !listaDeProdutosDinsponiveis.find(produto => produto === argumento);
      })
   
      listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`este produto nos nao temos: ${argumento}`));
   
      listaDeProdutosDinsponiveis.sort();
      listaDeProdutosDinsponiveis.forEach(produto => console.log(`Este produto esta disponiveis:${produto}`));

}catch(e){
    console.log(`Nao foi possivel executar o pedido de compra `)
}

const listaDeProdutosDinsponiveis = [
     'Pao',
     'Leite',
     'Cafe',
     'Laranja',
     'Macarrao',
     'Sabonete',
     'Detergente',
   ]

   const listaDeArgumentos = process.argv.slice(2);

   const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDinsponiveis.filter(produto =>{
        return listaDeArgumentos.find(argumento => argumento === produto);
   })

   listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nos temos:${produto}`));

   const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
        return !listaDeProdutosDinsponiveis.find(produto => produto === argumento);
   })

   listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`este produto nos nao temos: ${argumento}`));

   listaDeProdutosDinsponiveis.sort();
   listaDeProdutosDinsponiveis.forEach(produto => console.log(`Este produto esta disponiveis:${produto}`));