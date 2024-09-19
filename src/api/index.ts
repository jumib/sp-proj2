import Axios from "axios";
const axios = Axios.create();

const http = axios.create({
  baseURL: "http://localhost:8080/api", // Ensure HTTP is used
  httpsAgent: false, // Disable HTTPS
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    // const source = axios.CancelToken.source()
    // config.cancelToken = source.token
    // store.commit('addCancelToken', source)
    // store.commit('increaseRequestCount')
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("API call failed:", error);
    // Handle specific error cases
    if (error.response.status === 401) {
      // Unauthorized
    } else if (error.response.status === 404) {
      // Not found
    }
    return Promise.reject(error);
  }
);

function get<Response = unknown>(url: string) {
  return http.get<Response>(url).then((res) => res.data);
}

function post<Response = unknown, Request = any>(url: string, body?: Request) {
  return http.post<Response>(url, body).then((res) => res.data);
}

export { get, post };
