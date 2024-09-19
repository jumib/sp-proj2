import { post } from "./index";

interface ILogin {
  id: string;
  password: string;
}

const login = async (payload: ILogin) => {
  return await post(`url`, payload);
};

const logout = async () => {
  return await post(`url`);
};

const checkAuth = async () => {
  return await post(`url`);
};

export { login, logout, checkAuth };
