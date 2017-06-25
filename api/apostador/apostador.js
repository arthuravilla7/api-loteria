const restful = require('node-restful');
const mongoose = restful.mongoose;

// const numerosSchema = new mongoose.Schema({
//   numero: { type: Number, min: 1, max: 60, required: true},
// });

const apostadorSchema = new mongoose.Schema({
  name: { type: String, required: true},
  cpf: { type: Number, required: true},
  numero: {
    type: [{ type: Number, min: 1, max: 60, required: true}],
    validate: [arrayLimit, 'São necessários 6 números']
  }
});

function arrayLimit(val) {
   return val.length === 6;
}

module.exports = restful.model('Apostador', apostadorSchema);
