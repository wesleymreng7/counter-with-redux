import React from 'react'
import PropTypes from 'prop-types'
/*class Ola extends React.Component {
     render() {
         return(
             <span>Ola { this.props.nome }</span>
         )
     }
}*/
const Ola = ({ nome }) => {
    return (
        <span>Olá {nome} </span>
    )
}
Ola.propTypes = {
    nome: PropTypes.string.isRequired
}
Ola.defaultProps = {
    nome: 'Alguém'
}
export default Ola