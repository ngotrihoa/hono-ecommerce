import { useCallback, useReducer } from 'react';
import productsData from '../assets/fake-data/products';
import sortProduct from '../utils/sortProduct';
const { maxPrice } = productsData;

const initFilter = {
  price: { from: 0, to: maxPrice },
  stars: [],
  colors: [],
};

const filterReducer = (state, action) => {
  if (action.type === 'STAR') {
    let newStars = state.stars.filter((item) => item !== action.stars);
    if (action.checked === true) newStars.push(action.stars);

    return {
      ...state,
      stars: newStars,
    };
  }
  if (action.type === 'COLOR') {
    let newColors = state.colors.filter((item) => item !== action.color);
    if (action.checked === true) newColors.push(action.color);

    return {
      ...state,
      colors: newColors,
    };
  }
  if (action.type === 'PRICE') {
    return {
      ...state,
      price: action.price,
    };
  }
  if (action.type === 'CLEAR') {
    return {
      ...initFilter,
    };
  }
  return { ...state };
};

const useFilter = () => {
  const [filter, dispatchFilter] = useReducer(filterReducer, initFilter);

  const handleFilter = useCallback((products, filter, typeSort = 0) => {
    const newProducts = products.filter((product) => {
      const hasStar =
        filter.stars.length === 0
          ? true
          : filter.stars.some((star) => product.stars === star);
      const hasColor =
        filter.colors.length === 0
          ? true
          : filter.colors.some((color) => product.colors.includes(color));

      const hasPrice =
        product.price <= filter.price.to && product.price >= filter.price.from
          ? true
          : false;

      return hasStar && hasColor && hasPrice;
    });
    return sortProduct(newProducts, typeSort);
  }, []);

  return {
    filter,
    dispatchFilter,
    handleFilter,
  };
};

export default useFilter;
