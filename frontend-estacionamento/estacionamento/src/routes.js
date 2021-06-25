import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CadastroUsuario from "./components/CadastroUsuario";
import ListarUsuarios from "./components/ListarUsuarios"


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={CadastroUsuario} />
        <Route path="/cadastrarUsuarios" component={CadastroUsuario}/>
        <Route path="/listarUsuarios" component={ListarUsuarios}/> 
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;