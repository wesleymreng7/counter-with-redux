import React, { Component } from 'react'
import Counter from './Counter'
import DisplayCounter from './DisplayCounter'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './reducer'
import logger from 'redux-logger'
import Ola from './Ola'

let store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
          <DisplayCounter />
          <Ola />
        </div>
      </Provider>
    )
  }
}

export default App;
