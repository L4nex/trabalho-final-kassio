import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import BotaoSubmit from "../BotaoSubmit";
import api from "../../service/api";
import "../../assets/style.css";
import MiniDrawer from "../MenuBar/MiniDrawer";
import "./style.css";

class CadastroUsuario extends Component {
  constructor() {
    super();
    this.idUsuario = null;
    this.nome = "";
    this.email = "";
    this.telefone = "";
    this.senha = "";
    this.tipoUsuario = "";
    this.state = {
      usuario: {},
    };
    this._handleRecuperaUsu(this);
    if (this.idUsuario) {
      api.get(`usuario/${this.idUsuario}`, {}).then((response) => {
        let usuario = response.data[0];
        this.nome = usuario.nome;
        this.email = usuario.email;
        this.telefone = usuario.telefone;
        this.senha = usuario.senha;
        this.foto = null;
        this.tipo_usuario = usuario.tipo_usuario;
        this.setState({
          usuario: {
            nome: this.nome,
            email: this.email,
            telefone: this.telefone,
            senha: this.senha,
            foto: null,
            tipo_usuario: this.tipoUsuario,
          },
        });
      });
    }
  }
  _handleAlterouNome(e) {
    this.nome = e.target.value;
    this._handlePopulaStatePadrao();
  }
  _handleAlterouEmail(e) {
    this.email = e.target.value;
    this._handlePopulaStatePadrao();
  }
  _handleAlterouTelefone(e) {
    this.telefone = e.target.value;
    this._handlePopulaStatePadrao();
  }
  _handleAlterouSenha(e) {
    this.senha = e.target.value;
    this._handlePopulaStatePadrao();
  }
  _handleAlterouTipoUsuario(e) {
    this.tipoUsuario = e.target.value;
    this._handlePopulaStatePadrao();
  }
  _handlePopulaStatePadrao() {
    this.setState({
      usuario: {
        nome: this.nome,
        email: this.email,
        telefone: this.telefone,
        senha: this.senha,
        foto: null,
        tipo_usuario: this.tipoUsuario,
      },
    });
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
    this.idUsuario = data.id;
  }
  _handleSubmit(event) {
    if (this.idUsuario) {
      event.preventDefault();
    }
    try {
      if (this.idUsuario) {
        api
          .put(`usuario/${this.idUsuario}`, {
            usuario: this.state.usuario,
          })
          .then((res) => {
            alert(res.data.message);
          });
      } else {
        api
          .post(`usuario`, {
            usuario: this.state.usuario,
          })
          .then((res) => {
            alert(res.data.message);
          });
      }
    } catch (e) {
      alert(e);
    }
  }
  render() {
    return (

    <section className="sectionBase">
        <MiniDrawer />
        <form
          className="form_cadastro"
          onSubmit={this._handleSubmit.bind(this)}
        >
          <TextField
            label="Nome"
            type="text"
            autoComplete="current-password"
            value={this.state.usuario.nome}
            onChange={this._handleAlterouNome.bind(this)}
          />
          <TextField
            label="Email"
            type="email"
            autoComplete="current-password"
            value={this.state.usuario.email}
            onChange={this._handleAlterouEmail.bind(this)}
          />

          <TextField
            onChange={this._handleAlterouTelefone.bind(this)}
            label="Telefone"
            type="text"
            value={this.state.usuario.telefone}
            autoComplete="current-password"
          />
          <TextField
            onChange={this._handleAlterouSenha.bind(this)}
            label="Senha"
            type="password"
            value={this.state.usuario.senha}
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
      </section>
    );
  }
}
export default CadastroUsuario;
