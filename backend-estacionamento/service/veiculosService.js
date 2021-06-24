const veiculoData = require("../data/veiculosData");

exports.criarVeiculo = function (usuario) {
  return veiculoData.criarVeiculo(usuario);
};

exports.alterarUsuario = function (usuario) {
  return veiculoData.alterarUsuario(usuario);
};

exports.deletarVeiculo = function (id) {
  return veiculoData.deletarVeiculo(id);
};

exports.recuperarVeiculo = function (id) {
  return veiculoData.recuperarVeiculo(id);
};

exports.mostrarVeiculo = function (id) {
  return veiculoData.mostrarVeiculo(id);
};

exports.listarVeiculos = function () {
  return veiculoData.listarVeiculos();
};
