import React, { useState } from 'react'
import { connect } from 'react-redux';
import * as PropTypes from "prop-types";
import { Row, Col, Avatar } from 'antd';

function ProfileHeader(props) {
  const [avatarColor,] = useState(['#f56a00', '#00a2ae']);
  const { loggedUser } = props;
  return (
    <Row className="container-profile">
      <Col xs={9} sm={6} md={6} lg={6} className="center-align">
        <Avatar className="avatar-profile" shape="square"
          style={{ backgroundColor: avatarColor[loggedUser.id % 2] }} size="large">
          {loggedUser.name}
        </Avatar>
      </Col>
      <Col xs={13} sm={18} md={18} lg={18} className={"right-align"}>
        <h1>{loggedUser.name} (@{loggedUser.username})</h1>
        ({loggedUser.phone}) <br />
        <a href={"mailto:" + loggedUser.email}>{loggedUser.email}</a>
      </Col>
    </Row>
  )
}


ProfileHeader.propTypes = {
  loggedUser: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);