import React, { PureComponent } from 'react'

export class Componente extends PureComponent {
  render() {
    return (
      <h2>Componente Hi World!</h2>
    )
  }
}

export default Componente

/*import React, { Component } from "react";

function Componente(props) {
    return <h2>{props.msg}</h2>
}

export default class Componente extends Component {

    render() {
        return <h2>{this.props.msg}</h2>
    }

}


export default Componente;*/
