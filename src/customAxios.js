import axios from "axios";

const customAxios = axios.create({
  baseURL: `https://www.pre-onboarding-selection-task.shop`,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default customAxios;
