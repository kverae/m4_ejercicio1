import axios from "axios";

let baseURL = "https://three-points.herokuapp.com";

export function  login(username, password) {
    return axios
        .post(baseURL + "/api/login", {username, password})
        .then((response) => response.data);
}

export function getPostList() {
    return axios
      .get(baseURL + "/api/posts", {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => response.data);
}

export function getProfile(userId) {
    return axios
      .get(baseURL + "/api/users/" + userId, {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => response.data);
}

export function like(postId) {
    return axios
      .post(baseURL + "/api/posts/" + postId + "/like", {} , {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => response.data);
}