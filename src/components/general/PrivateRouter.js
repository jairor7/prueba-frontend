import React from "react";
import { Route, Redirect } from 'react-router-dom';

import routes from "../../utils/routes";

function PrivateRoute({ component: Component, loggedIn }) {
  return (
    <Route render={() =>
      loggedIn
        ? <Component />
        : <Redirect to={{ pathname: routes.login }} />
    }
    />
  )
}

export default PrivateRoute;