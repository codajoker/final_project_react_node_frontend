import axios from 'axios';

export const addProduct = async product => {
  const { data } = await axios.post('/product/addDiaryFood', product);
  return data;
};

export const changeProduct = async (date, meal) => {
  const { data } = await axios.patch('/product/changeProduct', {day: date, meal});
  return data;
};

export const deleteProduct = async (date, id) => {
  const deletedProduct = await axios.delete(
    `/product/delDiaryFood/?day=${date}&id=${id}`
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
      day: date,
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
