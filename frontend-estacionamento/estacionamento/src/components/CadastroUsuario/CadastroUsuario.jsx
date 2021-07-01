import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import BotaoSubmit from "../BotaoSubmit";
import api from "../../service/api";
import "../../assets/style.css";
import MiniDrawer from "../MenuBar/MiniDrawer";

class CadastroUsuario extends Component {
  constructor() {
    super();
    this.idUsuario = this._handleRecuperaUsu.bind(this);
    if (!this.idUsuario) {
      this.nome = "";
      this.email = "";
      this.telefone = "";
      this.senha = "";
      this.tipoUsuario = 0;
    } else {
      console.log("aaa")
      api.get(`usuario/${this.idUsuario}`, {}).then((response) => {
        console.log("sadasfasd");
      });
    }

  }
  _handleRecuperaUsu() {
    var query = window.location.search.slice(1);
    var partes = query.split("&");
    var data = {};
    partes.forEach(function (parte) {
      var chaveValor = parte.split("=");
      var chave = chaveValor[0];
      var valor = chaveValor[1];
      data[chave] = valor;
    });
    return data.id;
  }

  _handleAlterouNome(e) {
    this.nome = e.target.value;
  }
  _handleAlterouEmail(e) {
    this.email = e.target.value;
  }
  _handleAlterouTelefone(e) {
    this.telefone = e.target.value;
  }
  _handleAlterouSenha(e) {
    this.senha = e.target.value;
  }
  _handleAlterouTipoUsuario(e) {
    this.tipoUsuario = e.target.value;
  }
  _handleSubmit(event) {
    try {
      api.post(`usuario`, {
        usuario: {
          nome: this.nome,
          email: this.email,
          telefone: this.telefone,
          senha: this.senha,
          foto: null,
          tipo_usuario: this.tipo_usuario,
        },
      });
      alert("Registro inserido com sucesso!");
    } catch (e) {
      alert(e);
    }
  }
  render() {
    return (
      <div>
        <MiniDrawer />

        <form className="form_cadastro" onSubmit={this._handleSubmit.bind(this)}>
          <TextField
            label="Nome"
            type="text"
            autoComplete="current-password"
            onChange={this._handleAlterouNome.bind(this)}
          />
          <TextField
            label="Email"
            type="email"
            autoComplete="current-password"
            onChange={this._handleAlterouEmail.bind(this)}
          />

          <TextField
            onChange={this._handleAlterouTelefone.bind(this)}
            label="Telefone"
            type="text"
            autoComplete="current-password"
          />
          <TextField
            onChange={this._handleAlterouSenha.bind(this)}
            label="Senha"
            type="password"
            autoComplete="current-password"
          />
          <br />
          <InputLabel id="demo-simple-select-label">Tipo usuário</InputLabel>
          <Select onChange={this._handleAlterouTipoUsuario.bind(this)}>
            <MenuItem value={1}>Adminsitrador</MenuItem>
            <MenuItem value={2}>Gerente</MenuItem>
            <MenuItem value={3}>Operacional</MenuItem>
          </Select>
          <BotaoSubmit valor="Cadastrar" />
        </form>
      </div>
    );
  }
}

export default CadastroUsuario;
