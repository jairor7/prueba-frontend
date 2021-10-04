import React from 'react';
import { connect } from "react-redux";
import * as PropTypes from "prop-types";

import { ConfigProvider, Layout } from "antd";
import locale from 'antd/lib/locale/es_ES';

//Components
import Content from "./components/general/Content";
import Router from "./components/general/Router";
import Loading from './components/general/Loading';

import "antd/dist/antd.css";
import "./styles/app.scss";
import 'moment/locale/es-mx';

function App(props) {
  const { isLoading, loggedIn } = props;

  return (
    <ConfigProvider locale={locale}>
      <Layout className={"main-layout"}>
        {isLoading && <Loading />}
        <Content loggedIn={loggedIn} />
        <Router loggedIn={loggedIn} />
      </Layout>
    </ConfigProvider>
  );
};

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.generalReducer.isLoading,
    loggedIn: state.accountReducer.loggedIn
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
