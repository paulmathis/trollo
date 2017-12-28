import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';

class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <Route path="/" component={App} />
        </Router>
      </Provider>
    );
  }
}

export default Root;
