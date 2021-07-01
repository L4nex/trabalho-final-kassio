import React, { Component } from 'react';
import Veiculo from '../Veiculo/Veiculo';
class ListaVeiculos extends Component {
    render() {
        return (
          <ul className="list-veiculos">
            {this.props.veiculos.map((veiculo, index) => {
              return (
                <li key={index}>
                  <Veiculo
                    indice={index}
                    apagarVeiculo={this.props.apagarVeiculo}
                    placa={veiculo.placa}
                    tipoVeiculo={veiculo.tipoVeiculo}
                  />
                </li>
              );
            })}
          </ul>
        );
      }
}
 
export default ListaVeiculos;