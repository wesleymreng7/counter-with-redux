import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './actions'

export const Counter = ({count, increment, decrement }) => {
    return (
        <p>Contador: <span className='counter'>{count}</span>
            <button onClick={() => increment(10)} className='increment'>+</button>
            <button onClick={() => decrement(20)} className='decrement'>-</button>
        </p>
    )
}
/*class Counter extends Component {
    render() {
        return (
            <p>Contador: {this.props.count}
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
            </p>
        )
    }
}*/
const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increment: (value) => dispatch(increment(value)),
        decrement: (value) => dispatch(decrement(value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)