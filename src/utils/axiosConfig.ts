import axios from "axios";

// 创建axios实例
const axiosInstance = axios.create({
  baseURL:'/',
  timeout:5000
})

export default axiosInstance
