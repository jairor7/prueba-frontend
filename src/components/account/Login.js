import React from 'react'
import { Row, Col, Input, Button, Form, Icon, message } from 'antd';
import { connect } from "react-redux";
//Services
import { login } from "../../store/redux/actions/account/accountActions";


//Constats
const { Item } = Form;

function Login(props) {
  const { getFieldDecorator } = props.form;

  const onClickLogin = () => {
    props.form.validateFields((errors, values) => {
      if (errors) {
        return;
      }
      else {
        if (values.userName !== values.password) {
          message.error('Credenciales incorrectas', 2);
        }
        else {
          props.login(values);
        }
      }
    })
  }

  return (
    <Row className={"session-container-main"}>
      <Form className={"session-container"}>
        <h1>Inicio de sesión</h1>
        <Col>
          <Item label="">
            {getFieldDecorator("userName", {
              rules: [
                { required: true, message: "Campo requerido", whitespace: true }
              ]
            })(
              <Input type="text" size="default" autoComplete="off" placeholder="Nombre de usuario"
                prefix={<Icon type="user" />} />
            )}
          </Item>
        </Col>
        <Col>
          <Item label="">
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Campo requerido", whitespace: true }
              ]
            })(
              <Input type="password" size="default" autoComplete="off" placeholder="Contraseña"
                prefix={<Icon type="lock" />} />
            )}
          </Item>
        </Col>
        <Col xs={24}>
          <Button type="primary" onClick={onClickLogin}>Ingresar</Button>
        </Col>
      </Form>
    </Row>
  )
}

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(login(data)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login));