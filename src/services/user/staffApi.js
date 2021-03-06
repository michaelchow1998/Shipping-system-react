import axios from "../../api/axios";

const API_URL = "https://shipsheep.herokuapp.com/api/v1/staff/";

export async function CreateOrder(body) {
  const url = API_URL + "orders/shipping";
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      credentials: "same - origin",
      AUTHORIZATION: `Bearer ${localStorage.getItem("access_token")}`,
    },
  };
  const res = await axios.post(url, JSON.stringify(body), axiosConfig);
  if (res.error) {
    throw new Error(res.error);
  }
  return res.data;
}

export async function UpdateProcessState(body) {
  const url = API_URL + body.state;

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      credentials: "same - origin",
      AUTHORIZATION: `Bearer ${localStorage.getItem("access_token")}`,
    },
  };

  const res = await axios.put(url, JSON.stringify(body), axiosConfig);
  if (res.error) {
    throw new Error(res.error);
  }
  return res.data;
}
