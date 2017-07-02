const Apostador = require('./apostador');
const _ = require('lodash');

Apostador.methods(['get', 'post', 'delete']); //node-restful cria os serviços rest para o objeto(schema) billingCycle

Apostador.updateOptions({new: true, runValidators: true}); //faz retornar o objeto atualizado e ativa as validações em caso de update
Apostador.deletarTodos = function(){
    Apostador.collection.remove(); //deleta todos os documentos da collection 
}



module.exports = Apostador;
