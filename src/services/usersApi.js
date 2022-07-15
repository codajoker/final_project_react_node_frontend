import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = async body => {
  const { data } = await axios.post('users/register', body);
  return data;
};

export const logInUser = async body => {
  const { data } = await axios.post('users/login', body);
  token.set(data.data.token);
  return data;
};

export const logOutUser = async () => {
  const { data } = await axios.get('/users/logout');
  token.unset();
  return data;
};

export const currentUserRefresh = async persistedToken => {
  if (!persistedToken) {
    throw Error(console.log('no token!'));
  }

  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    return error;
  }
};

export const tokenFindUser = async () => {

  try {
    const { data } = await axios.get('/users/token');
    console.log(data);
    return data;
  } catch (error) {
      throw new Error(error) ;
  }
  }
