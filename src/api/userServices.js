import request from "./requestWrapper";

function getUsers() {
  return request({
    url: '/users',
    method: 'GET',
  });
}

function getPostsUsers() {
  return request({
    url: '/posts',
    method: 'GET',
  });
}

function getCommentsUsers() {
  return request({
    url: '/comments',
    method: 'GET',
  });
}

function getCommentsUsers2() {
  return request({
    url: '/comments2',
    method: 'GET',
  });
}

export {
  getUsers,
  getPostsUsers,
  getCommentsUsers,
  getCommentsUsers2,
}