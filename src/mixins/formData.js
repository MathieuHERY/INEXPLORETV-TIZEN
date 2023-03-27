import axiosInstance from "./axiosInstance";
import axios from "axios";

export const dataFormat = () => {
  const formData = new FormData();
  return formData;
};

export const postData = async (url, datas) => {
  const ipResponse = await axios.get("https://geolocation-db.com/json/");
  const userIp = ipResponse.data.IPv4;
  datas.append("ip", userIp);
  datas.append("OS", "Samsung");
  datas.append("support", "TV");

  const response = await axiosInstance.post(url, datas);
  return response;
};
