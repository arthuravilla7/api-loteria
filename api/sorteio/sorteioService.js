const Apostador = require('../apostador/apostador');

var sorteio = [];
function realizarSorteio(req, res, next){
    const min = 1;
    const max = 61;
    //sorteio = [60, 4, 1, 6, 5, 6]; pra mocar um vencedor
    
    while(sorteio.length < 6){
      let numero = Math.floor((Math.random() * 60) + 1); //verificar se inclui o 60
      if (sorteio.indexOf(numero) === -1) {
			  sorteio.push(numero);
		  }
    }
    //console.log(sorteio);
    res.status(200).json(sorteio);
    
}


function verificarGanhador(req, res, next){
  var array = sorteio;
   Apostador.find().where('numero').all(array).exec(function(error, data){ //verifica se algum documento de apostador possui todos os numeros sorteados no array
    if(error){
      console.log(error);
      res.send("falha");
    }else if(data.length === 0){
      res.status(200).json("Não houve vencedor para os seguintes números sorteados: " + array);
    }else if(data.length === 1){
      res.status(200).json("O(a) vencedor(a) para os números: " + array + " foi o(a) apostador(a): " + data[0].name + " portador(a) do cpf: " + data[0].cpf);
    }else {
      res.status(200).json(data);
    }
  });
}

module.exports = { realizarSorteio,  verificarGanhador}
