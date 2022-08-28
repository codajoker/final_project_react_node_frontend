import axios from 'axios';

export const addProduct = async product => {
  const { data } = await axios.post('/product/addDiaryFood', product);
  return data;
};

export const changeProduct = async (day, product) => {
  const { data } = await axios.patch('/product/changeProduct', {day, product});
  return data;
};

export const deleteProduct = async (date, id, meal) => {
  const {data} = await axios.delete(
    `/product/deleteDiaryFood/?day=${date}&id=${id}&meal=${meal}`
  );
 const deletedProduct = data.product;
 return deletedProduct
};

export const getProductByQuery = async (name, lang) => {
  const { data } = await axios.get(`/product/?name=${name}&lang=${lang}`);
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
          foodList: [],
      };
    }
    throw error;
  }
};
