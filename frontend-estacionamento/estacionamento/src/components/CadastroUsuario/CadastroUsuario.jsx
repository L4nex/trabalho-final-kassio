import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import './style.css'

class CadastroUsuario extends Component {
  render() {
    return (
      <form className="cadastroUsu_Form">
          <TextField label="Nome" type="text" autoComplete="current-password" />
          <TextField
            label="Email"
            type="email"
            autoComplete="current-password"
          />

          <TextField
            label="Telefone"
            type="text"
            autoComplete="current-password"
          />
          <TextField
            label="Senha"
            type="password"
            autoComplete="current-password"
          />
          <InputLabel id="demo-simple-select-label">Tipo usuário</InputLabel>
          <Select>
            <MenuItem value={1}>Adminsitrador</MenuItem>
            <MenuItem value={2}>Gerente</MenuItem>
            <MenuItem value={3}>Operacional</MenuItem>
          </Select>
      </form>
    );
  }
}

export default CadastroUsuario;
