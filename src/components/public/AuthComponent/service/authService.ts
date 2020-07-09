import { get, post } from '../../../../base/networkServices/ajaxService';
import handleAjaxError from '../../../../base/utils/genericAjaxErrorHandler';
import RegisterModel from '../models/registerModel';
import LoginModel from '../models/LoginModel';

const basicHeaders = { 'Content-Type': 'application/json' };

export const authRegister = (SERVER_BASE_URL: string, data: RegisterModel) => {
  try {
    return post(`${SERVER_BASE_URL}/register`, basicHeaders, data);
  } catch (error) {
    return handleAjaxError(error);
  }
};

export const authLogin = (SERVER_BASE_URL: string, data: LoginModel) => {
  try {
    return post(`${SERVER_BASE_URL}/login`, basicHeaders, data);
  } catch (error) {
    return handleAjaxError(error);
  }
};

export const authLogout = (SERVER_BASE_URL: string) => {
  try {
    return get(`${SERVER_BASE_URL}/logout`, basicHeaders);
  } catch (error) {
    return handleAjaxError(error);
  }
};
