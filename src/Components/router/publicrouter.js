import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
// import {mapSta teToProps} from "../Components/utility/mapState"

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <div>
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <div>
            <Redirect to="/Dashboard" />
          </div>
        ) : (
          <div>
            <Component {...props} />
          </div>
        )
      }
    />
  </div>
);

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth,
});

export default connect(mapStateToProps)(PublicRoute);
