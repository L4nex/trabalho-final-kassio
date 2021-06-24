import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CadastroUsuario from "./components/CadastroUsuario";


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={CadastroUsuario} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;