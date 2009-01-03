<<<<<<< HEAD
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var UsuarioSchema = new mongoose.Schema({
  IdPersonal: String,
  idOrdenes: [String],
  usuario : String,
  contrasena : String,
  nombre : String,
  telefono : String,
  scope: [String]
});

UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('usuario', UsuarioSchema);
||||||| merged common ancestors
=======
var mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
  IdPersonal: String,
  idOrdenes: [String],
  usuario : String,
  contrasena : String,
  nombre : String,
  telefono : String
});

module.exports = mongoose.model('usuario', UsuarioSchema);
>>>>>>> ab25651f8ac8bda8263754e566008ca184619a1a
