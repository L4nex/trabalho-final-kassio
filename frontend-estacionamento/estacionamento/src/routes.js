import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CadastroMensalista from "./components/CadastroMensalista/CadastroMensalista";
import CadastroUsuario from "./components/CadastroUsuario";
import CadastroVeiculo from "./components/CadastroVeiculo";
import ListarMensalistas from "./components/ListarMensalistas";
import ListarUsuarios from "./components/ListarUsuarios";
<<<<<<< HEAD
import Login from "./components/Login";
=======
import Sorteador from "./padrao";
>>>>>>> 82d501a448e1042c04affb9c7668f0920a16a0d3

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Sorteador} />
        <Route path="/cadastrarUsuarios" component={CadastroUsuario} />
        <Route path="/listarUsuarios" component={ListarUsuarios} />
        <Route path="/cadastrarMensalistas" component={CadastroMensalista} />
        <Route path="/cadastrarVeiculos" component={CadastroVeiculo} />
<<<<<<< HEAD
        <Route path="/login" component={Login} />
=======
        <Route path="/listarMensalistas" component={ListarMensalistas} />
>>>>>>> 82d501a448e1042c04affb9c7668f0920a16a0d3
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
