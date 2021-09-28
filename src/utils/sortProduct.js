const sortProduct = (products, typeSort) => {
  let newProducts = products;
  if (typeSort === 1) {
    newProducts = products.sort((item1, item2) => {
      const name1 = item1.name.toLowerCase();
      const name2 = item2.name.toLowerCase();
      if (name1 < name2) return -1;
      if (name1 > name2) return 1;
      return 0;
    });
  }
  if (typeSort === 2) {
    newProducts = products.sort((item1, item2) => {
      const name1 = item1.name.toLowerCase();
      const name2 = item2.name.toLowerCase();
      if (name1 < name2) return 1;
      if (name1 > name2) return -1;
      return 0;
    });
  }
  if (typeSort === 3) {
    newProducts = products.sort((item1, item2) => item2.stars - item1.stars);
  }
  if (typeSort === 4) {
    newProducts = products.sort((item1, item2) => item1.price - item2.price);
  }
  if (typeSort === 5) {
    newProducts = products.sort((item1, item2) => item2.price - item1.price);
  }
  return [...newProducts];
};

export default sortProduct;
