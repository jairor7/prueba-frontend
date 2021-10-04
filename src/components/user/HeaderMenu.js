import React, { useEffect, useState } from 'react'
import { Icon, Modal, Button, Tabs } from 'antd';
import { withRouter } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
//Constants
import routes from "../../utils/routes";
import Home from "../user/Home";
import Posts from "../user/Posts";
import Comments from "../user/Comments";
const { TabPane } = Tabs;

function HeaderMenu(props) {
  const [isSmallSize, setIsSmallSize] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const operations =
    <div className="logout-button" onClick={() => setModalVisible(true)} >
      {!isSmallSize && ("Cerrar sesión ")}
      <Icon type="logout" />
    </div>
  useEffect(() => {
    window.addEventListener("resize", screenSize);
    screenSize();
    return () => {
      window.removeEventListener("resize", screenSize);
    }
  });

  const screenSize = () => {
    setIsSmallSize(window.innerWidth <= 700);
  }

  const onClickLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = routes.login;
  }

  return (
    <>
      {modalVisible &&
        <Modal title={"Cerrar sesión"} destroyOnClose={true} keyboard={false} closable={false}
          visible={true}
          footer={[
            <Button type={"default"} key="back" onClick={() => setModalVisible(false)}>
              Cancelar
            </Button>,
            <Button key="submit" type="primary" onClick={onClickLogout}>
              Cerrar sesión
            </Button>
          ]}>
          ¿Está seguro de salir de la sesión actual?
        </Modal>
      }

      <Tabs className={isSmallSize ? 'tabs-bottom' : 'tabs-top'}
        tabBarExtraContent={operations}
        tabPosition={isSmallSize ? 'left' : 'top'}>
        <TabPane tab={isSmallSize ? <Icon type="home" /> : "Home"} key={routes.home}>
          <Home />
        </TabPane>
        <TabPane tab={isSmallSize ? <Icon type="message" /> : "Comentarios"} key={routes.allComments}>
          <Comments />
        </TabPane>
        <TabPane tab={isSmallSize ? <Icon type="solution" /> : "Publicaciones"} key={routes.posts}>
          <Posts />
        </TabPane>
      </Tabs>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderMenu));