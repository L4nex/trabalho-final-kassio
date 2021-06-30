const rotativoData = require("../data/rotativosData");

exports.criarRotativo = function (rotativo) {
  return rotativoData.criarRotativo(rotativo);
};

exports.alterarRotativo = function (rotativo, id) {
  return rotativoData.alterarRotativo(rotativo, id);
};

exports.deletarRotativo = function (id) {
  return rotativoData.deletarRotativo(id);
};

exports.recuperarRotativo = function (id) {
  return rotativoData.recuperarRotativo(id);
};

exports.mostrarRotativo = function (id) {
  return rotativoData.mostrarRotativo(id);
};

exports.listarRotativos = function () {
  return rotativoData.listarRotativos();
};
