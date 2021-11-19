import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";
import getUserMsisdn from "./GlobalFunction";
import { useHistory } from "react-router-dom";
// function ProtectedRoute({ isAuth: isAuth, component: Component, ...rest }) {
function ProtectedRoute(props) {
  const Component = props.component;
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      history.push("/login");
    }
  }, []);
  return (
    // <Route
    //   {...rest}
    //   render={(props) => {
    //     const msisdn = getUserMsisdn();
    //     if (msisdn) {
    //       return <Component {...props} {...rest} />;
    //     } else if (!msisdn) {
    //       return (
    //         <Redirect
    //           to={{ pathname: "/login", state: { from: props.location } }}
    //         />
    //       );
    //     }
    //   }}
    // />
    <Component />
  );
}
export default ProtectedRoute;
