const mensalistaData = require("../data/mensalistasData");

exports.criarMensalista = function (mensalista) {
  return mensalistaData.criarMensalista(mensalista);
};

exports.alterarMensalista = function (mensalista, id) {
  return mensalistaData.alterarMensalista(mensalista, id);
};

exports.deletarMensalista = function (id) {
  return mensalistaData.deletarMensalista(id);
};

exports.recuperarMensalista = function (id) {
  return mensalistaData.recuperarMensalista(id);
};

exports.mostrarMensalista = function (id) {
  return mensalistaData.mostrarMensalista(id);
};

exports.listarMensalistas = function () {
  return mensalistaData.listarMensalistas();
};

exports.retornaData = function (id) {
  return mensalistaData.retornaData(id);
}
