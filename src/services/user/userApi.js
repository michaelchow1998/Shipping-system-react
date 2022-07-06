import axios from "../../api/axios";

const API_URL = "http://localhost:8080/api/v1/orders/";

export async function UserAPI(url, body) {
  const headers = {
    "Content-Type": "application/json",
    credentials: "same-origin",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  };

  const res = await axios.post(API_URL + url, JSON.stringify(body), {
    headers: headers,
  });
  if (res.error) {
    throw new Error(res.error);
  }
  return res.data;
}
