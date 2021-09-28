import { useCallback, useState } from 'react';

const usePage = (products, itemPerPage) => {
  const [productsPaging, setProductsPaging] = useState(products);

  const numPages = Math.ceil(products.length / itemPerPage);

  const setProductByPage = useCallback(
    (page) => {
      const start = (page - 1) * itemPerPage;
      const end = start + itemPerPage;
      setProductsPaging([...products.slice(start, end)]);
      return { start, end };
    },
    [itemPerPage, products]
  );

  return {
    productsPaging,
    numPages,
    setProductByPage,
  };
};

export default usePage;
//current product
//getProductByPage(products,page,itemPerPage) -> hidden product other page not change product
