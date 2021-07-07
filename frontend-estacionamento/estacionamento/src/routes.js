import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CadastroMensalista from "./components/CadastroMensalista/CadastroMensalista";
import CadastroUsuario from "./components/CadastroUsuario";
import CadastroVeiculo from "./components/CadastroVeiculo";
import ListarUsuarios from "./components/ListarUsuarios";
import Login from "./components/Login";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={CadastroUsuario} />
        <Route path="/cadastrarUsuarios" component={CadastroUsuario} />
        <Route path="/listarUsuarios" component={ListarUsuarios} />
        <Route path="/cadastrarMensalistas" component={CadastroMensalista} />
        <Route path="/cadastrarVeiculos" component={CadastroVeiculo} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
