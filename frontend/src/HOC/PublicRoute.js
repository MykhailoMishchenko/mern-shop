import React from "react";
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated && routeProps.restricted
      ? <Redirect to={redirectTo}/>
      : <Component {...props}/>
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: state.login.credentials
})

export default connect(mapStateToProps)(PublicRoute);
