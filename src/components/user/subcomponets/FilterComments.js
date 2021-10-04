import React, { useState } from 'react'
import connect from 'react-redux/es/connect/connect';
import { Form, Row, Col, Input, Button } from 'antd';
import * as PropTypes from "prop-types";


const { Item } = Form;

function FilterComments(props) {
  const [disableSearch, setDisableSearch] = useState(true);
  const { comments, setCommentsUser } = props;
  const { getFieldDecorator } = props.form;

  const validateForm = () => {
    props.form.validateFields((errors, values) => {
      if (errors) return;
      else {
        let commentsFilter = [];
        commentsFilter = comments.filter((c) => {
          return c.name.toLowerCase().indexOf(values.value.toLowerCase()) > 0 ||
            c.email.toLowerCase().indexOf(values.value.toLowerCase()) > 0 ||
            c.body.toLowerCase().indexOf(values.value.toLowerCase()) > 0
        })
        setCommentsUser(commentsFilter);
      }
    })
  }

  return (
    <Form>
      <Row gutter={[12, 0]}>
        <Col xs={24}>
          <h3>Filtro de busqueda:</h3>
          <p>Escriba una palabra clave de minímo 4 letras para buscar coincidencias.</p>
        </Col>
        <Col xs={12}>
          <Item>
            {getFieldDecorator(`value`, {
              rules: [{ required: false, message: "Valor requerido" }],
              getValueFromEvent: (e) => {
                if (e.currentTarget.value.length > 3) setDisableSearch(false);
                else {
                  setCommentsUser(comments);
                  setDisableSearch(true);
                }
                return e.currentTarget.value;
              },
            })(
              <Input autoComplete="off" />
            )}
          </Item>
        </Col>
        <Col xs={12} className="left-align">
          <Button style={{ marginTop: '2px' }} type="primary" disabled={disableSearch}
            icon="search" onClick={validateForm}> Buscar </Button>
        </Col>
      </Row>
    </Form>
  );
}

FilterComments.propTypes = {
  comments: PropTypes.array.isRequired,
  setCommentsUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(FilterComments));