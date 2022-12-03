/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
  tema: string
}

export default class ListaProdutos extends Component<props> {
  render() {
    let estilo = `collection-item active ${this.props.tema}`
    return (
      <div className="collection">
        <a className="collection-item">Produto 1<br />Valor: xx</a>
        <a className={estilo}>Produto 2<br />Valor: xx</a>
        <a className="collection-item">Produto 3<br />Valor: xx</a>
        <a className="collection-item">Produto 4<br />Valor: xx</a>
      </div>
    )
  }
}