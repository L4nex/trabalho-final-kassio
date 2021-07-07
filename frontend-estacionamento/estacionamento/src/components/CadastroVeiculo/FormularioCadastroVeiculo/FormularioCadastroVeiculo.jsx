import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import BotaoSubmit from "../../BotaoSubmit";
import { Button } from "@material-ui/core";
import "./style.css";

class FormularioCadastroVeiculo extends Component {
  constructor(props) {
    super(props);
    this.placa = "";
    this.tipo_veiculo = "";
  }
  _handleMudancaPlaca(evento) {
    evento.stopPropagation();
    this.placa = evento.target.value;
  }
  _handleMudancaTipoVeiculo(evento) {
    evento.stopPropagation();
    this.tipo_veiculo = evento.target.value;
  }
  _handleCriarVeiculo(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarVeiculo(this.placa, this.tipo_veiculo);
  }
  _handleSalvarVeiculos(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.salvarVeiculos();
  }
  render() {
    return (
      <form
        className="form_cadastro"
        onSubmit={this._handleCriarVeiculo.bind(this)}
      >
        <TextField
          label="Placa"
          type="text"
          onChange={this._handleMudancaPlaca.bind(this)}
          required
        />
        <TextField
          label="Tipo do veiculo"
          type="text"
          onChange={this._handleMudancaTipoVeiculo.bind(this)}
          required
        />
        <BotaoSubmit valor="Cadastrar" />
        <div className="botao_submit">
          <Button onClick={this._handleSalvarVeiculos.bind(this)}>Salvar</Button>
        </div>
      </form>
    );
  }
}

export default FormularioCadastroVeiculo;
