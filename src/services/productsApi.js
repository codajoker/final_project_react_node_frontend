import axios from 'axios';
import moment from 'moment';

axios.defaults.baseURL = 'https://sheltered-fjord-67703.herokuapp.com/';

export const addProduct = async product => {
  const { data } = await axios.post('/product/addDiaryFood', product);
  return data;
};

export const deleteProduct = async (date, id) => {
  const formatedDate = moment(date).format('DD.MM.yyyy');
  const deletedProduct = await axios.delete(
    `/product/delDiaryFood/?day=${formatedDate}&id=${id}`
  );
  return deletedProduct;
};

export const getProductByQuery = async query => {
  const { data } = await axios.get(`/product/${query}`);
  return data;
};

export const getProductsListByDate = async date => {
  try {
    const { data } = await axios.post('/users/dayinfo', {
      day: moment(date).format('DD.MM.yyyy'),
    });
    return data;
  } catch (error) {
    if (error.response.status === 404) {
      return {
        data: {
          foodList: [],
        },
      };
    }
    throw error;
  }
};
