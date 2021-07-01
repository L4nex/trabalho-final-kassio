import React, { Component } from 'react';
import {ReactComponent as DeleteSVG} from '../../../assets/delete.svg'
import "./style.css";

class Veiculo extends Component {
    _handledeletar(){
        const indice = this.props.indice;
        this.props.apagarVeiculo(indice);
      }
    render() {
        return (
          <section className="class-veiculo">
            <header>
              <h1>{this.props.placa}</h1>
              <DeleteSVG onClick={this._handledeletar.bind(this)}/>
            </header>
            <p>{this.props.tipoVeiculo}</p>
          </section>
        );
      }
}
 
export default Veiculo;