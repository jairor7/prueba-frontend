import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { Layout } from "antd";
import * as PropTypes from "prop-types";

//Components
import PrivateRoute from './PrivateRouter';
import Login from "../account/Login";
import Content from "../general/Content";

// Constants
import routes from '../../utils/routes';

function Router(props) {
  const { loggedIn } = props;
  return (
    <Layout.Content className={"content"}>
      <Switch>
        {!loggedIn && <Route exact path={routes.login} render={() => <Login />} />}

        {<PrivateRoute exact path={routes.user} loggedIn={loggedIn} component={Content} />}

        <Route render={() => <Redirect to={{ pathname: loggedIn ? routes.user : routes.login }} />} />
      </Switch>
    </Layout.Content>
  );
}

Router.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default withRouter(Router);