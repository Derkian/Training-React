import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { ConnectedRouter } from 'react-router-redux';
// import { Provider } from 'react-redux';
import Master from './Master';
import { BrowserRouter } from 'react-router-dom';

export default class Root extends Component {
  render() {
    //const { store, history } = this.props;
    return (
      //<Provider store={store}>
        //<ConnectedRouter history={history}>
        <BrowserRouter>
          <Master />
        </BrowserRouter>
        //</ConnectedRouter>
      //</Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
