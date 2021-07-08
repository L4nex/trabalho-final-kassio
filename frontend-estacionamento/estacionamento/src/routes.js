import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CadastroMensalista from "./components/CadastroMensalista/CadastroMensalista";
import CadastroRotativo from "./components/CadastroRotativo/CadastroRotativo";
import CadastroUsuario from "./components/CadastroUsuario";
import CadastroVeiculo from "./components/CadastroVeiculo";
import ListarMensalistas from "./components/ListarMensalistas";
import ListarRotativos from "./components/ListarRotativos";
import ListarUsuarios from "./components/ListarUsuarios";
import Sorteador from "./padrao";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Sorteador} />
        <Route path="/cadastrarUsuarios" component={CadastroUsuario} />
        <Route path="/listarRotativos" component={ListarRotativos} />
        <Route path="/listarUsuarios" component={ListarUsuarios} />
        <Route path="/cadastrarMensalistas" component={CadastroMensalista} />
        <Route path="/cadastrarVeiculos" component={CadastroVeiculo} />
        <Route path="/listarMensalistas" component={ListarMensalistas} />
        <Route path="/cadastrarRotativo" component={CadastroRotativo} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
