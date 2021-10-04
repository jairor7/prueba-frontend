import React from 'react'
import { connect } from 'react-redux';
import * as PropTypes from "prop-types";
import { Modal, Button, Input, Form, Row, Col, message } from 'antd';

const { Item } = Form;
const { TextArea } = Input;

function EditModal(props) {
  const { onClickBack, item, posts } = props;
  const { getFieldDecorator } = props.form;
  console.log(posts);
  let post = posts.filter((p) => p.id === item.postId);
  return (
    <Modal title={"Editar publicación"} width={700} destroyOnClose={true} keyboard={false} closable={false}
      visible={true}
      footer={[
        <Button key="cancel" type="default" onClick={() => onClickBack(false)}>
          Cerrar
        </Button>,
        <Button key="submit" type="primary" onClick={() => {
          onClickBack(false);
          message.success("Editado exitosamente");
        }
        }>
          Editar
        </Button>
      ]}>
      <Form>
        <Row>
          <Col>
            <Item label="Titulo">
              {getFieldDecorator(`title`, {
                rules: [{ required: false, message: "Valor requerido" }],
                initialValue: post[0].title,
              })(
                <Input autoComplete="off" />
              )}
            </Item>
          </Col>
          <Col>
            <Item label="Contenido">
              {getFieldDecorator(`body`, {
                rules: [{ required: false, message: "Valor requerido" }],
                initialValue: post[0].body,
              })(
                <TextArea rows={5} autoComplete="off" />
              )}
            </Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

EditModal.propTypes = {
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(EditModal));