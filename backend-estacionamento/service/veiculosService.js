const veiculoData = require("../data/veiculosData");

exports.criarVeiculo = function (veiculo) {
  return veiculoData.criarVeiculo(veiculo);
};

exports.alterarVeiculo = function (veiculo, id) {
  return veiculoData.alterarVeiculo(veiculo, id);
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
