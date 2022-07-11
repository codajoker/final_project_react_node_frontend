import axios from 'axios';

export const fetchDailyRate = async userData => {
  const { data } = await axios.post('/calories', userData);
  return data;
};

export const fetchDailyRateAuthorized = async userData => {
  const { data } = axios.post('/users/calories', userData);
  return data;
};
