import React, { Component } from "react";
import FormularioCadastroVeiculo from "./FormularioCadastroVeiculo";
import ListaVeiculos from "./ListaVeiculos";
import MiniDrawer from "../MenuBar/MiniDrawer";
import "./style.css";
import api from "../../service/api";

class CadastroVeiculo extends Component {
  constructor() {
    super();
    this.idMensalista = 0;
    this._handleRecuperaUsu(this);
    this.state = {
      veiculos: [],
    };
    this._handleRecuperaVeiculos(this);
  }
  _handleRecuperaVeiculos() {
    api.get(`mensalista/${this.idMensalista}/veiculos`, {}).then((res) => {
      this.setState({ veiculos: res.data });
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
    this.idMensalista = data.id;
  }
  criarVeiculo(placa, tipo_veiculo) {
    const novoVeiculo = { placa, tipo_veiculo };
    const novoVeiculoArray = [...this.state.veiculos, novoVeiculo];
    const novoState = {
      veiculos: novoVeiculoArray,
    };
    this.setState(novoState);
    api
    .post(`mensalista/${this.idMensalista}/veiculos`, {
      veiculos: novoVeiculoArray,
    })
    .then((res) => {
      alert(res.data.message);
    });
  }
  _handleGravaVeiculos() {

  }
  apagarVeiculo(indice) {
    let arrayVeiculos = this.state.veiculos;
    api
      .delete(
        `mensalista/${this.idMensalista}/veiculo/${arrayVeiculos[indice].id}`,
        {}
      )
      .then((res) => {
        alert(res.data.message);
      });
    arrayVeiculos.splice(indice, 1);
    this.setState({ veiculos: arrayVeiculos });
  }
  render() {
    return (
      <section className="sectionBase">
        <MiniDrawer />
        <FormularioCadastroVeiculo
          criarVeiculo={this.criarVeiculo.bind(this)}
        />
        <main className="main-listaVeiculos">
          <ListaVeiculos
            veiculos={this.state.veiculos}
            apagarVeiculo={this.apagarVeiculo.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default CadastroVeiculo;
