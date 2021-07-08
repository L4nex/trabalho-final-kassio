import React, { Component } from "react";
import api from "../../paginas/services/api";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import "./style.css"

class Login extends Component {
  constructor() {
    super();
    this.nome = "";
    this.email = "";
    this.senha = "";
    this.telefone = "";
  }
  _handleAlterouNome(e) {
    e.stopPropagation();
    this.nome = e.target.value;
  }
  _handleAlterouEmail(e) {
    e.stopPropagation();
    this.email = e.target.value;
  }
  _handleAlterouSenha(e) {
    e.stopPropagation();
    this.senha = e.target.value;
  }
  _handleAlterouTelefone(e) {
    e.stopPropagation();
    this.telefone = e.target.value;
  }
  _handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    try {
      api.post(`user`, {
        Nome: this.nome,
        Email: this.email,
        Senha: this.senha,
        Telefone: this.telefone,
      });
    } catch (e) {
      alert(e);
    }
  }

  render() {
    return (
      <div id="teste">
        <h1>Login</h1>
        <form className="form_cadastro" onClick={this._handleSubmit.bind(this)}>
            <div>
                <TextField
                    label="E-mail"
                    size="small"
                    onChange={this._handleAlterouNome.bind(this)}           
                    required
                />
            </div>
            <div style={{marginTop: '30px'}}>
                <TextField
                    type="password"
                    label="Senha"
                    onChange={this._handleAlterouSenha.bind(this)}
                    required
                />
            </div>
          <div className="botao_submit" style={{marginTop: '60px'}}>
                <Button variant="contained" color="primary" type="submit">Login</Button>
            </div>
        </form>
      </div>
    );
  }
}

export default Login;
