import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import * as PropTypes from "prop-types";
import { Row, Col, Divider } from 'antd';

//Services
import { users } from "../../store/redux/actions/user/userActions";

//Components
import HeaderMenu from '../user/HeaderMenu';
import ProfileHeader from '../user/ProfileHeader';

function Content(props) {
  const { loggedIn, users } = props;
  useEffect(() => {
    if (!loggedIn) {
      users();
    }
  }, [loggedIn, users]);
  return (
    <Row>
      {loggedIn &&
        <Col>
          <ProfileHeader loggedUser={props.loggedUser} />
          <Divider />
          <HeaderMenu />
        </Col>
      }
    </Row>
  )
}


Content.propTypes = {
  usersList: PropTypes.array.isRequired,
  loggedUser: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    usersList: state.userReducer.usersList,
    loggedUser: state.userReducer.loggedUser,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    users: () => dispatch(users()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);