const usuarioData = require("../data/usuariosData");

exports.criarUsuario = function (usuario) {
  return usuarioData.criarUsuario(usuario);
};

exports.alterarUsuario = function (usuario) {
  return usuarioData.alterarUsuario(usuario);
};
exports.deletaUsuario = function (id) {
  return usuarioData.deletaUsuario(id);
};

exports.recuperaUsuario = function (id) {
  return usuarioData.recuperaUsuario(id);
};
exports.recuperaUsuarios = function () {
  return usuarioData.recuperaUsuarios();
};
