import React from "react";
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";

const AdminRoute = ({
  component: Component,
  isAdmin,
  ...routeProps
}) => {
  return (<Route
      {...routeProps}
      render={props =>
        isAdmin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const mapStateToProps = state => ({
  isAdmin: state.login.credentials?.isAdmin
});

export default connect(mapStateToProps)(AdminRoute);
