import React, { Component } from "react";
import { ReactComponent as DeleteSVG } from "../../../assets/delete.svg";
import "./style.css";

class Veiculo extends Component {
  _handledeletar() {
    const indice = this.props.indice;
    this.props.apagarVeiculo(indice);
  }
  render() {
    return (
      <section className="class-veiculo">
        <DeleteSVG onClick={this._handledeletar.bind(this)} />
        <h1>{this.props.placa}</h1>
        <p>→</p>
        <p>{this.props.tipoVeiculo}</p>
      </section>
    );
  }
}

export default Veiculo;
