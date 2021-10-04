import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as PropTypes from "prop-types";
import { Modal, Button } from 'antd';
import PostCard from "./PostCard";

function DetailModal(props) {
  const { onClickBack, post, loggedUser, comments, posts } = props;
  let postItem = posts.filter((p) => p.id === post.postId);
  return (
    <Modal title={"Ver detalle de la publicación"} width={700} destroyOnClose={true} keyboard={false} closable={false}
      visible={true}
      footer={[
        <Button key="submit" type="primary" onClick={() => onClickBack(false)}>
          Cerrar
        </Button>
      ]}>
      <PostCard key={post.id} postInfo={postItem[0]} isPost={true} seeMore={false} seeEdit={false}
        loggedUser={loggedUser} comments={comments} />
    </Modal>
  );
};

DetailModal.propTypes = {
  comments: PropTypes.array.isRequired,
  post: PropTypes.object.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailModal));