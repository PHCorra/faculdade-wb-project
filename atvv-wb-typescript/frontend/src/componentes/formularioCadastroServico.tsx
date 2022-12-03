import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroProduto extends Component<props> {

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="servuce_name" type="text" className="validate" />
                            <label htmlFor="service_name">nome do produto</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="value" type="text" className="validate" />
                            <label htmlFor="value">Valor</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}