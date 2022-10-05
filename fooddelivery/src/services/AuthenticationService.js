import axios from 'axios';
import {ApiConstants} from '../constants';

const AuthRequest = axios.create({
  baseURL: ApiConstants.BACKEND_API.BASE_API_URL,
});

const register = async user => {
  if (!user?.username || !user.email || !user.password) {
    return {status: false, message: 'please fill up the fields'};
  }
  try {
    let requestbody = {
      username: user?.username,
      email: user?.email,
      password: user?.password,
    };
    let registerResponse = await AuthRequest.post(
      ApiConstants.BACKEND_API.REGISTER,
      requestbody,
    );
    console.log(registerResponse?.data);
    return registerResponse?.data
  } catch (error) {
    console.log(error);
    return {status: false, message: 'Oops! something went wrong'};
  }
};

const login = async user => {
  if (!user?.username || !user.password) {
    return {status: false, message: 'please fill up the fields'};
  }
  try {
    let requestbody = {
      username: user?.username,
      password: user?.password,
    };
    let loginResponse = await AuthRequest.post(
      ApiConstants.BACKEND_API.LOGIN,
      requestbody,
    );
    console.log(loginResponse?.data);
    return loginResponse?.data
  } catch (error) {
    console.log(error);
    return {status: false, message: 'Oops! something went wrong'};
  }
};

const checkUserExist = async (type, value) => {
  try {
    let params = {[type]: value};
    let userCheckResponse = await AuthRequest.get(
      ApiConstants.BACKEND_API.USER_EXIST,
      {params},
    );
    return userCheckResponse?.data;
  } catch (error) {
    console.log(error);
    return {status: false, message: 'Oops! Something went wrong'};
  }
};

export default {register ,login , checkUserExist};