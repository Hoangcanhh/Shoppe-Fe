import axios from "axios"
import { toast } from "react-toastify";
//khởi tạo một đối tượng axios mục đích để custom và cấu hình chung cho dự án
let authorzeAxiosInstance = axios. create()

//thời gian chờ tối đa của 1 request
authorzeAxiosInstance.defaults.timeout = 1000 * 60 * 10

//withCreadentials: sẽ cho phép axios tự động đính kèm và gửi cookie trong mỗi request lên BE( phục vụ trường hợp chúng ta sử dụng JWT token theo cơ chế http cookie)
// authorzeAxiosInstance.defaults.withCredentials = true


//cấu hình interceptors

// Add a request interceptor: can thiệp vào giữa những cái request api
authorzeAxiosInstance.interceptors.request.use((config) => {
    // Do something before request is sent
    return config;
  }, (error) => {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor: can thiệp vào giữa những cái response nhận về từ api
authorzeAxiosInstance.interceptors.response.use((response) => {
    //mọi mã http status code nằm trong khoảng 200-299 sẽ là success và rơi vào đây

    return response;
  }, (error) => {
    if(error.response?.status !== 410){
        toast.error(error.response?.data?.message || error?.message)
    }


    //mọi mã http status code nằm ngoài khoảng 200-299 sẽ là error và rơi vào đây
    return Promise.reject(error);
  });

export default authorzeAxiosInstance