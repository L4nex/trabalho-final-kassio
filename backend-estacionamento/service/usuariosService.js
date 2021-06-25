const usuarioData = require("../data/usuariosData");

exports.criarUsuario = function (usuario) {
  return usuarioData.criarUsuario(usuario);
};

exports.alterarUsuario = function (usuario, id) {
  return usuarioData.alterarUsuario(usuario, id);
};

exports.deletarUsuario = function (id) {
  return usuarioData.deletarUsuario(id);
};

exports.recuperarUsuario = function (id) {
  return usuarioData.recuperarUsuario(id);
};

exports.mostrarUsuario = function (id) {
  return usuarioData.mostrarUsuario(id);
};
exports.listarUsuarios = function () {
  return usuarioData.listarUsuarios();
};
