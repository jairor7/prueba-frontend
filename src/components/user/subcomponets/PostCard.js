import React, { useState } from 'react'
import { Comment, Avatar } from 'antd';
import * as PropTypes from "prop-types";

function PostCard(props) {
  const [avatarColor,] = useState(['#f56a00', '#00a2ae']);
  const { postInfo, loggedUser, comments, numberComments,
    seeMore, seeEdit, setItemEdit, setModalEditVisible } = props;
  const [numberComment, setNumberComments] = useState(numberComments);
  let postComments = comments.filter((e) => e.postId === postInfo.id).sort((a, b) => b.id - a.id);

  const getLettersName = (name) => {
    let lettersName = "";
    name.split(' ').forEach(element => lettersName += element[0]);
    return lettersName;
  }

  const Post = ({ children, postI, userI, isPost }) => (
    <Comment className="post-main"
      actions={isPost ? ([
        seeMore && <span key="comment-basic-reply-to" onClick={() => setNumberComments(numberComment + 1)}>Ver más</span>,
        seeEdit && <span key="comment-basic-reply-to" onClick={() => {
          setModalEditVisible(true);
          setItemEdit(postI.id)
        }
        }>Editar</span>
      ]) : []}
      author={isPost ? userI.name : postI.email + " (" + postI.name + ")"}
      avatar={
        <Avatar className="avatar-profile" shape="square"
          style={{ backgroundColor: isPost ? avatarColor[userI.id % 2] : avatarColor[postI.id % 2] }}
          size="large">
          {isPost ? getLettersName(loggedUser.name) : getLettersName(postI.name)}
        </Avatar>
      }
      content={
        <div>
          <h3>{postI.title}</h3>
          <p>
            {postI.body}
          </p>
        </div>
      }
    >
      {children}
    </Comment>
  );

  return (
    <div className="post-container">
      <Post postI={postInfo} userI={loggedUser} isPost={true}>
        {postComments.map((pc, index) =>
          numberComment ?
            (index < numberComment && <Post isPost={false} key={pc.id} postI={pc} />)
            : (<Post isPost={false} key={pc.id} postI={pc} />)
        )}
      </Post>
    </div>
  )
}

PostCard.propTypes = {
  numberComments: PropTypes.number,
  comments: PropTypes.array.isRequired,
  postInfo: PropTypes.object.isRequired,
  loggedUser: PropTypes.object.isRequired,
};

export default PostCard;