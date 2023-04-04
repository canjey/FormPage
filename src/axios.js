import axios from "axios";

export default function axiosInstance() {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL:
      "localhost:8080/api/v1/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    }
  });
}
