import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export async function fetchData() {
  const response = await axios.get(`${API_URL}dashboards/`);
  return response.data;
}

export async function postData(data) {
  const response = await axios.post(`${API_URL}dashboards/`, data);
  return response.data;
}
