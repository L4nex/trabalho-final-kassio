const veiculoData = require("../data/veiculosData");

exports.criarVeiculo = function (veiculo, idMensalista) {
  return veiculoData.criarVeiculo(veiculo, idMensalista);
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

exports.listarVeiculos = function (idMensalista) {
  return veiculoData.listarVeiculos(idMensalista);
};
