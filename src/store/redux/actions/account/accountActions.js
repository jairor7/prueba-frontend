import { generalTypes } from "../../types";
import { getUsers } from "../../../../api/userServices";
import routes from "../../../../utils/routes";
import { message } from "antd";

const setLoading = (isLoading) => {
  return {
    type: generalTypes.LOADING,
    isLoading
  }
};

export const login = ({ userName }) => {
  return dispatch => {
    dispatch(setLoading(true));
    getUsers()
      .then(response => {
        const users = response.data[0].users[0];
        const validateUser = users.find(e => e.username === userName)
        if (validateUser) {
          localStorage.setItem("user_name", validateUser.username);
          localStorage.setItem("user_id", validateUser.id);
          dispatch(setLoading(false));
          window.location.href = routes.home;
        }
        else {
          message.error('Credenciales incorrectas', 2);
        }
        dispatch(setLoading(false));
      })
      .catch(err => {
        message.error('Ha ocurrido un error ' + err.data, 2);
        dispatch(setLoading(false));
      })
  }
};