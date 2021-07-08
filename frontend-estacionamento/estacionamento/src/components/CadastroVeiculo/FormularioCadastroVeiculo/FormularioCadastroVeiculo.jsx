import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import BotaoSubmit from "../../BotaoSubmit";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
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
          <InputLabel id="demo-simple-select-label">Tipo veículo</InputLabel>
          <Select onChange={this._handleMudancaTipoVeiculo.bind(this)} required>
            <MenuItem value={"Carro"}>Carro</MenuItem>
            <MenuItem value={"Moto"}>Moto</MenuItem>
          </Select>
        <BotaoSubmit valor="Cadastrar" />
      </form>
    );
  }
}

export default FormularioCadastroVeiculo;
