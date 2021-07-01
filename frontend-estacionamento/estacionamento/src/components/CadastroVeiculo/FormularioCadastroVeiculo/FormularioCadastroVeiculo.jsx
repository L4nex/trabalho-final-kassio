import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import BotaoSubmit from '../../BotaoSubmit';
class FormularioCadastroVeiculo extends Component {
    constructor(props) {
        super(props);
        this.placa = "";
        this.tipoVeiculo = "";
      }
      _handleMudancaPlaca(evento) {
        evento.stopPropagation();
        this.placa = evento.target.value;
      }
      _handleMudancaTipoVeiculo(evento) {
        evento.stopPropagation();
        this.tipoVeiculo = evento.target.value;
      }
      _handleCriarVeiculo(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarVeiculo(this.placa, this.tipoVeiculo);
      }
      render() {
        return (
          <form
            onSubmit={this._handleCriarVeiculo.bind(this)}
          >
               <TextField
            onChange={this._handleAlterouTelefone.bind(this)}
            value={this.state.usuario.telefone}
            label="Telefone"
            type="text"
            autoComplete="current-password"
            required
          />
            <input
              type="text"
              placeholder="Placa"
              className="form-cadastro-input"
              onChange={this._handleMudancaPlaca.bind(this)}
            />
            <textarea
              placeholder="Tipo do veiculo"
              className="form-cadastro-input"
              onChange={this._handleMudancaTipoVeiculo.bind(this)}
            />
            <BotaoSubmit  valor="Cadastrar"/>
          </form>
        );
      }
}
 
export default FormularioCadastroVeiculo;