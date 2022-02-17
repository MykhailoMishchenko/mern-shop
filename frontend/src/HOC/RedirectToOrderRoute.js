import React from "react";
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";

const RedirectToOrderRoute = ({
  component: Component,
  order,
  redirectTo,
  props1,
  ...routeProps
}) => {
  return (<Route
      {...routeProps}
      render={props =>
        order && routeProps.restricted
          ? <Redirect to={`/order/${order._id}`} />
          : <Component {...props} />
      }
    />
  );
};

const mapStateToProps = state => ({
  order: state.createOrder.order
});

export default connect(mapStateToProps)(RedirectToOrderRoute);
