import axios from 'axios';

export const registerUser = async body => {
  const { data } = await axios.post('users/register', body);
  return data;
};

export const logInUser = async body => {
  const { data } = await axios.post('users/login', body);
  return data;
};

export const refreshToken = async () => {
  const { data } = await axios.get('users/refresh-token');
  return data;
};

export const logOutUser = async () => {
  const { data } = await axios.get('/users/logout');
  return data;
};

export const currentUserRefresh = async () => {
  const { data } = await axios.get('/users/current');
  return data;
};

export const verifiedUser = async verificationToken => {
  const { data } = await axios.get(`/users/verify/${verificationToken}`);
  return data;
};

export const resendVerifyUser = async body => {
  const { data } = await axios.post('/users/verify', body);
  return data;
};

export const userForgotPassword = async body => {
  const { data } = await axios.post('/users/refreshPassword', body);
  return data;
};

export const userResetPassword = async (id, body) => {
  const { data } = await axios.patch(`/users/refreshPassword/${id}`, body);
  return data;
};
