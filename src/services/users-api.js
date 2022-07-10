import axios from 'axios';

axios.defaults.baseURL = 'https://sheltered-fjord-67703.herokuapp.com/';

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
  token.set(data.token);
  return data;
};

export const logOutUser = async () => {
  const { data } = await axios.post('/users/logout');
  token.unset();
  return data;
};

export const currentUserRefresh = async persistedToken => {
  if (!persistedToken) {
    throw Error(console.log('no token!'));
  }
  token.set(persistedToken);
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    return error;
  }
};
