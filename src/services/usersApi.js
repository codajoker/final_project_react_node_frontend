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
