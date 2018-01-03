import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import Home from './Home';

class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Container>
          <Router>
            <Route path="/" component={Home} />
          </Router>
        </Container>
      </Provider>
    );
  }
}

export default Root;
