import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import BotaoSubmit from "../BotaoSubmit";
import api from "../../service/api";
import { Button } from "@material-ui/core";
import MiniDrawer from "../MenuBar/MiniDrawer";
import "./style.css";

class CadastroMensalista extends Component {
  constructor() {
    super();
    this.state = {
      mensalista: {},
    };
    this.idMensalista = 0;
    this.nome = "";
    this.cpf = "";
    this.dataEntrada = null;
    this._handleRecuperaUsu(this);
    this.mensalistaCadastrado = this.idMensalista === 0 || this.idMensalista === undefined
    if (this.idMensalista) {
      api.get(`mensalista/${this.idMensalista}`, {}).then((response) => {
        let mensalista = response.data[0];
        console.log(mensalista)
        this.nome = mensalista.nome;
        this.cpf = mensalista.cpf;
        this.dataEntrada = mensalista.data_entrada.substring(0, 10);
        this.setState({
          mensalista: {
            nome: this.nome,
            cpf: this.cpf,
            dataEntrada : this.dataEntrada
          },
        });
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
    this.idMensalista = data.id;
  }
  _handleAlterouNome(e) {
    this.nome = e.target.value;
    this._handlePopulaStatePadrao();
  }
  _handleAlterouCpf(e) {
    this.cpf = e.target.value;
    this._handlePopulaStatePadrao();
  }

  _handlePopulaStatePadrao() {
    this.setState({
      mensalista: {
        nome: this.nome,
        cpf: this.cpf,
        dataEntrada: this.dataEntrada
      },
    });
  }
  _handleSubmit(event) {
    if (this.idMensalista) {
      event.preventDefault();
    }
    try {
      if (this.idMensalista) {
        api
          .put(`mensalista/${this.idMensalista}`, {
            mensalista: this.state.mensalista,
          })
          .then((res) => {
            alert(res.data.message);
          });
      } else {
        api
          .post(`mensalista`, {
            mensalista: this.state.mensalista,
          })
          .then((res) => {
            alert(res.data.message);
          });
      }
    } catch (e) {
      alert(e);
    }
  }

  _handleVeiculosMensalista() {
    window.location.assign(
      "http://localhost:3000/cadastrarVeiculos?id=" + this.idMensalista
    );
  }
  render() {
    return (
      <section className="sectionBase">
        <MiniDrawer/>
        <form
          className="form_cadastro"
          onSubmit={this._handleSubmit.bind(this)}
        >
          <TextField
            label="Nome"
            type="text"
            autoComplete="current-password"
            value={this.state.mensalista.nome}
            onChange={this._handleAlterouNome.bind(this)}
            required
          />
          <TextField
            label="Cpf"
            type="cpf"
            autoComplete="current-password"
            value={this.state.mensalista.cpf}
            onChange={this._handleAlterouCpf.bind(this)}
            requirde
          />
          <TextField
          type="text"
          autoComplete="current-password"
          value={this.dataEntrada}
          disabled/>
          


          <section className="section_botoesCadastroMensalista">
            <BotaoSubmit valor="Cadastrar" />
            <Button
              variant="contained"
              color="primary"
              disabled={this.mensalistaCadastrado}
              onClick={this._handleVeiculosMensalista.bind(this)}
            >
              Veiculos do mensalista
            </Button>
          </section>
        </form>
      </section>
    );
  }
}

export default CadastroMensalista;
