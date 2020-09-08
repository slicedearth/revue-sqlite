import axios from "axios";

export default () => {
  return axios.create({
    baseURL: process.env.apiURL || "http://localhost:8081",
  });
};
