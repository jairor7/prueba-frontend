import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentsList from './subcomponets/CommentsList';
import FilterComments from './subcomponets/FilterComments';
import DetailModal from './subcomponets/DetailModal';
import EditModal from './subcomponets/EditModal';
import * as PropTypes from "prop-types";


function Comments(props) {
  const { loggedUser, posts, comments } = props;
  const [commentsUser, setCommentsUser] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalDetailVisible, setModalDetailVisible] = useState(false);
  const [modalEditVisible, setModalEditVisible] = useState(false);
  const [allCommentsUser, setAllCommentsUser] = useState([]);

  useEffect(() => {
    let postUser = posts.filter((p) => p.userId === loggedUser.id);
    let commentsUserAux = []
    postUser.forEach((pu) => {
      let currentComments = comments.filter((c) => c.postId === pu.id);
      commentsUserAux = commentsUserAux.concat(currentComments);
    })
    setCommentsUser(commentsUserAux);
    setAllCommentsUser(commentsUserAux);
  }, [comments, loggedUser.id, posts])

  return (
    <>
      {modalDetailVisible &&
        <DetailModal onClickBack={setModalDetailVisible} posts={posts}
          post={itemSelected} comments={comments} loggedUser={loggedUser} />
      }
      {modalEditVisible &&
        <EditModal onClickBack={setModalEditVisible} item={itemSelected} posts={posts} />
      }
      <FilterComments comments={allCommentsUser} setCommentsUser={setCommentsUser} />
      <CommentsList comments={commentsUser} setModalDetailVisible={setModalDetailVisible}
        setItemSelected={setItemSelected} setModalEditVisible={setModalEditVisible} />
    </>
  );
};

Comments.propTypes = {
  posts: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
  loggedUser: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    loggedUser: state.userReducer.loggedUser,
    posts: state.userReducer.posts,
    comments: state.userReducer.comments,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Comments));