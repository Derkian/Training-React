import React from 'react';
import { Switch, Route, withRouter , Link } from 'react-router-dom';
import App from './App';
import UserPage from './containers/UserPage';
import ProductPage from './containers/ProductPage';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Master extends React.Component {
  state = {
    pageTitle: 'Home'
  };

  componentDidMount() {
    this.props.history.listen(this.routeWillChange);
  }

  routeWillChange = (route) => {
    switch(route.pathname) {
      case "/users":
        this.setState({ pageTitle: "Users" }); break;
      case "/products":
        this.setState({ pageTitle: "Products" }); break;
      default:
        this.setState({ pageTitle: "Home" }); break;
    }
  };

  render() {
    return (
      <div style={{ width: '100%', display: 'flex' }}>
        <div
          id="sidebar"
          style={{ width: '100px', backgroundColor: 'lightblue' }} >
          <div className="container">
              <Link to="/">Home</Link>
              <Link to="/users">Users </Link>
              <Link to="/products">Products </Link>
          </div>
        </div>
        <div
          id="app-content"
          className="content">
          <h1>{this.state.pageTitle}</h1>
          <Switch>
            <Route exact path="/" render={(routeProps) => {
             return (
              <App
                {...routeProps}
              />);
            }}/>
            <Route
              path="/users"
              render={() => (<UserPage />)}
            />
            <Route
              path = "/products"
              render = {() => <ProductPage />
              }
            />
          </Switch>
        </div>
      </div>
    );
  }
}

Master.propTypes = {
  history: PropTypes.object
};

export default withRouter(connect()(Master));
