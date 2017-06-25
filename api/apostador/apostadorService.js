const Apostador = require('./apostador');
const _ = require('lodash');

Apostador.methods(['get', 'post', 'delete']); //node-restful cria os serviços rest para o objeto(schema) billingCycle
Apostador.updateOptions({new: true, runValidators: true}); //faz retornar o objeto atualizado e ativa as validações em caso de update



module.exports = Apostador;
