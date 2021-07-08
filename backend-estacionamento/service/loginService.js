const loginData = require("../data/loginData");

exports.buscarUsuario = function (user) {
    return loginData.buscarUsuario(user);
  };
  