import React, { Component } from "react";
import { useState } from "react";
import "./style.css";
function Sorteador() {
  const [sorteado, setSorteado] = useState("");
  const [count, setCount] = useState(0)
  return <div className="divPrincipal">
  <button onClick={()=> {setSorteado(["Luiz", "Mateus", "Lucas","Luiz", "Mateus", "Luiz",  "Lucas" , "Mateus", "Lucas", "Lucas", "Luiz", "Lucas","Luiz", "Mateus","Mateus"][Math.floor(Math.random()  * 15)]); setCount(count + 1)}}>Sortear</button>
  <p>O sorteado foi: {sorteado}</p>
  <p>Total de sorteios: {count}</p>
  </div>;
}

export default Sorteador;
