import { generalTypes, userTypes } from "../../types";
import { getUsers, getPostsUsers, getCommentsUsers, getCommentsUsers2 } from "../../../../api/userServices";
import { message } from "antd";

const setLoading = (isLoading) => {
  return {
    type: generalTypes.LOADING,
    isLoading
  }
};

export const users = () => {
  return dispatch => {
    dispatch(setLoading(true));
    getUsers()
      .then(response => {
        const users = response.data[0].users[0];
        let userName = localStorage.getItem('user_name');
        const validateUser = users.find(e => e.username === userName);
        if (validateUser) {
          dispatch({
            type: userTypes.LOGGED_USER,
            loggedUser: validateUser
          });
          dispatch({
            type: userTypes.USERS,
            usersList: users
          });
          dispatch(setLoading(false));
        }
        dispatch(setLoading(false));
      })
      .catch(err => {
        message.error('Ha ocurrido un error ' + err.data, 2);
        dispatch(setLoading(false));
      })
  }
};

export const postsUser = () => {
  return dispatch => {
    dispatch(setLoading(true));
    getPostsUsers()
      .then(response => {
        const posts = response.data[0].posts;
        dispatch({
          type: userTypes.POSTS_USERS,
          posts
        });
        dispatch(setLoading(false));
      })
      .catch(err => {
        message.error('Ha ocurrido un error ' + err.data, 2);
        dispatch(setLoading(false));
      })
  }
};

export const commentsUser = () => {
  return dispatch => {
    dispatch(setLoading(true));
    getCommentsUsers()
      .then(response => {
        getCommentsUsers2()
          .then(response2 => {
            const comments = response.data[0].comments1.concat(response2.data[0].comments);
            dispatch({
              type: userTypes.COMMENTS_USERS,
              comments
            });
            dispatch(setLoading(false));
          })
          .catch((err) => {
            message.error('Ha ocurrido un error (comentarios) ' + err.data, 2);
            dispatch(setLoading(false));
          })
      })
      .catch(err => {
        message.error('Ha ocurrido un error (comentarios 2)' + err.data, 2);
        dispatch(setLoading(false));
      })
  }
};