import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import ListaCliente from "./listaCliente";
import ListaProdutos from "./listaProdutos";
import ListaServico from "./listaServico";

type state = {
  tela: string
}

export default class Roteador extends Component<{}, state> {
  constructor(props: {} | Readonly<{}>) {
    super(props)
    this.state = {
      tela: 'Clientes'
    }
    this.selecionarView = this.selecionarView.bind(this)
  }

  selecionarView(novaTela: string, evento: Event) {
    evento.preventDefault()
    console.log(novaTela);
    this.setState({
      tela: novaTela
    })
  }

  render() {
    let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="purple lighten-4" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastros']} />
    if (this.state.tela === 'Clientes') {
      return (
        <>
          {barraNavegacao}
          <ListaCliente tema="purple lighten-4" />
        </>
      )
    } if (this.state.tela === 'Cadastros') {
      return (
        <>
          {barraNavegacao}
          <FormularioCadastroCliente tema="purple lighten-4" />
          <FormularioCadastroProduto tema="purple lighten-4" />
          <FormularioCadastroServico tema="purple lighten-4" />
        </>
      )
    }
    if (this.state.tela === 'Produtos') {
      return (
        <>
          {barraNavegacao}
          <ListaProdutos tema="purple lighten-4" />
        </>
      )
    }

    if (this.state.tela === 'Serviços') {
      return (
        <>
          {barraNavegacao}
          <ListaServico tema="purple lighten-4" />
        </>
      )
    }

  }
}