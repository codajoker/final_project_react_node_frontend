import axios from 'axios';

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
    await axios.delete(`/product/${id}`);
    return id;
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
    const { data } = await axios.get(`/product/${date}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
