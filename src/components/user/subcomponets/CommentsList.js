import React, { useState } from 'react'
import connect from 'react-redux/es/connect/connect';
import { Table, Tooltip, Icon, Empty } from 'antd';
import { commentsColumns } from '../../../utils/tableColumns';
import { PAGINATION_CONFIG } from '../../../utils/constants';
import * as PropTypes from "prop-types";

function CommentsList(props) {
  const { comments, setModalDetailVisible, setItemSelected, setModalEditVisible } = props;


  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 5,
  });

  const onChangePaginationConfig = (current, size) => {
    setPagination({
      page: current,
      pageSize: size,
    });
  }

  const setTableData = () => {
    let dataTable = [];
    comments.forEach(item => {
      let elementToPush = {
        id: item.id,
        name: item.name,
        email: item.email,
        body: item.body,
        actions: <div>
          <Tooltip title={"Ver post"} placement={'top'}>
            <Icon type={"eye"} onClick={() => {
              setItemSelected(item);
              setModalDetailVisible(true);
            }} />
          </Tooltip> &nbsp;&nbsp;
          <Tooltip title={"Editar post"} placement={'top'}>
            <Icon type={"edit"} onClick={() => {
              setItemSelected(item);
              setModalEditVisible(true);
            }} />
          </Tooltip>
        </div>
      };
      dataTable.push(elementToPush);
    });
    return dataTable;
  }
  let tableData = setTableData();
  return (
    comments.length !== 0 ?
      <Table size={"small"} scroll={{ x: '700px' }}
        dataSource={tableData} columns={commentsColumns}
        rowKey={'id'}
        pagination={{
          total: comments.length,
          current: pagination.page,
          showSizeChanger: PAGINATION_CONFIG.showSizeChanger,
          pageSize: pagination.pageSize,
          size: PAGINATION_CONFIG.size,
          showTotal: (total, range) => PAGINATION_CONFIG.showTotal(total, range),
          pageSizeOptions: PAGINATION_CONFIG.pageSizeOptions,
          onChange: (page, size) => {
            onChangePaginationConfig(page, size);
          },
          onShowSizeChange: (page, size) => {
            onChangePaginationConfig(page, size);
          },
        }} /> :
      <Empty style={{ "margin": "auto" }}
        description={
          <span>No hay comentarios para mostrar</span>
        }
      />
  );
}

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);