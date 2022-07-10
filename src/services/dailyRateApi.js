import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

export const fetchDailyRate = async userData => {
  try {
    const { data } = await axios.post('/calories', userData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyRateAuthorized = async () => {
  const { data } = axios.post('/users/calories');
  return data;
};
