const express = require('express');
const sorteioService = require('../api/sorteio/sorteioService')

module.exports = function(server){
  //API routes
  const router = express.Router();
  server.use('/api', router);

  //rotas da API
  const apostadorService = require('../api/apostador/apostadorService');
  apostadorService.register(router, '/apostador');
  
  /*server.get('/sorteio', sorteioService.realizarSorteio);
  server.get('/sorteio', sorteioService.verificarGanhador);*/

  router.route('/sorteio').get(sorteioService.realizarSorteio);
  router.route('/sorteio/ganhador').get(sorteioService.verificarGanhador);
  router.route('/apostador').delete(apostadorService.deletarTodos);
};
