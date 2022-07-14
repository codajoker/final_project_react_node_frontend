export const getProductsList = state => {
  return {
    productsList: state.products.meal,
    isLoading: state.products.isLoading,
  };
};