import axios from 'axios';
import moment from 'moment';

axios.defaults.baseURL = 'https://sheltered-fjord-67703.herokuapp.com/';

export const addProduct = async product => {
  try {
    const { data } = await axios.post('/product/addDiaryFood', product);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async id => {
  try {
    const deletedProduct = await axios.delete("/product/delDiaryFood", { id });
    return deletedProduct;
  } catch (error) {
    console.log(error);
  }
};

export const getProductByQuery = async query => {
  try {
    const { data } = await axios.get(`/product/${query}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductsListByDate = async date => {
  try {
    const { data } = await axios.post("/users/dayinfo", {
      day: moment(date).format('DD.MM.yyyy'),
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};