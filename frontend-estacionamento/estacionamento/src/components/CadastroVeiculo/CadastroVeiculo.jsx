import React, { Component } from 'react';
import FormularioCadastroVeiculo from './FormularioCadastroVeiculo';
import ListaVeiculos from './ListaVeiculos';
class CadastroVeiculo extends Component {
    constructor() {
        super();
        this.state = {
          veiculos: [],
        };
      }
      criarVeiculo(placa, tipoVeiculo) {
        const novoVeiculo = { placa, tipoVeiculo };
        const novoVeiculoArray = [...this.state.veiculos, novoVeiculo];
        const novoState = {
          veiculos: novoVeiculoArray,
        };
        this.setState(novoState);
      }
      apagarVeiculo(indice) {
        let arrayVeiculos = this.state.veiculos;
        arrayVeiculos.splice(indice, 1);
        this.setState({ veiculos: arrayVeiculos });
      }
      render() {
        return (
          <section>
            <FormularioCadastroVeiculo criarVeiculo={this.criarVeiculo.bind(this)} />
            <main>
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