//Libraries
import axios from 'axios';

//Subcomponents
import baseUrl from "./baseUrl";

/*** Create an Axios Client with defaults ***/
let client = null;

export const initializeClient = function () {
  client = axios.create({
    baseURL: baseUrl,
    headers: { 'Authorization': 'Bearer ' + localStorage.getItem('access_token') }
  });
};

initializeClient();

/*** Request Wrapper with default success/error actions ***/
const request = function (options) {

  const onSuccess = function (response) {
    //console.info('Request Successful: response: ', response);
    return response;
  };

  const onError = function (error) {
    console.error('Request Failed: Config Sent:', error.config);

    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
      console.error('Headers:', error.response.headers);

      if (error.response.status === 500) {
        error.response.data = "Error en el servidor";
      }
    } else {
      console.error('Error Message:', error.message);
    }
    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;