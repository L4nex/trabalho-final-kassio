import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CadastroMensalista from "./components/CadastroMensalista/CadastroMensalista";
import CadastroUsuario from "./components/CadastroUsuario";
import CadastroVeiculo from "./components/CadastroVeiculo";
import ListarMensalistas from "./components/ListarMensalistas";
import ListarUsuarios from "./components/ListarUsuarios";
import Login from "./components/Login";
import Sorteador from "./padrao";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Sorteador} />
        <Route path="/cadastrarUsuarios" component={CadastroUsuario} />
        <Route path="/listarUsuarios" component={ListarUsuarios} />
        <Route path="/cadastrarMensalistas" component={CadastroMensalista} />
        <Route path="/cadastrarVeiculos" component={CadastroVeiculo} />
        <Route path="/login" component={Login} />
        <Route path="/listarMensalistas" component={ListarMensalistas} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
