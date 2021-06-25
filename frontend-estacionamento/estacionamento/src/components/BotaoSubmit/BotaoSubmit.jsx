import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./style.css";
class BotaoSubmit extends Component {
  render() {
    return (
      <div className="botao_submit">
        <Button variant="contained" color="primary" type="submit">{this.props.valor}</Button>
      </div>
    );
  }
}

export default BotaoSubmit;