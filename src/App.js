import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './redux/store'
import Router from './Router'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

export default App;