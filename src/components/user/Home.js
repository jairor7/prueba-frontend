import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import * as PropTypes from "prop-types";
import { Row, Col } from "antd";
//Services
import { postsUser, commentsUser } from "../../store/redux/actions/user/userActions";
import PostCard from "./subcomponets/PostCard";
import EditModal from './subcomponets/EditModal';

function Home(props) {
  const [isMounted, setIsMounted] = useState(false);
  const [modalEditVisible, setModalEditVisible] = useState(false);
  const [itemEdit, setItemEdit] = useState();
  const [postsLoggedUser, setPostsLoggedUser] = useState([]);
  const { posts, loggedUser, postsUser, commentsUser, comments } = props;

  useEffect(() => {
    if (!isMounted) {
      postsUser();
      commentsUser();
    }
    return () => setIsMounted(true)
  }, [commentsUser, isMounted, postsUser]);

  useEffect(() => {
    let filterPostUser = posts.filter(p => p.userId === loggedUser.id).sort((a, b) => b.id - a.id);
    setPostsLoggedUser(filterPostUser);
  }, [posts, loggedUser]);

  return (
    <Row>
      {modalEditVisible &&
        <EditModal onClickBack={setModalEditVisible} item={{ postId: itemEdit }} posts={postsLoggedUser} />
      }
      <Col xs={24}>
        <h3>Ultimas publicaciones realizadas...</h3>
      </Col>
      <Col xs={24}>
        {
          postsLoggedUser.length > 0 &&
          postsLoggedUser.map((post, index) =>
            index < 3 &&
            <PostCard key={post.id} postInfo={post} numberComments={2} isPost={true} setItemEdit={setItemEdit}
              loggedUser={loggedUser} comments={comments} seeMore={true} seeEdit={true} setModalEditVisible={setModalEditVisible} />
          )
        }
      </Col>
    </Row>
  )
}


Home.propTypes = {
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
    postsUser: () => dispatch(postsUser()),
    commentsUser: () => dispatch(commentsUser()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);