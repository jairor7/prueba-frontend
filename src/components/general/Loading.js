import React from 'react';
import { Spin, Icon } from "antd";

function Loading() {
  const antIcon = <Icon type="loading" style={{ fontSize: 70 }} spin />;

  return (
    <div className="spinner-content">
      <div className="loader">
        <Spin tip="Cargando..." indicator={antIcon} />
      </div>
    </div>
  );
};

export default Loading;