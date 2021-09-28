import image1 from '../images/product-1.jpg';
import image2 from '../images/product-2.jpg';
import image3 from '../images/product-3.jpg';
import image4 from '../images/product-4.jpg';
import image5 from '../images/product-5.jpg';
import image6 from '../images/product-6.jpg';
import image7 from '../images/product-7.jpg';
import image8 from '../images/product-8.jpg';
import image9 from '../images/product-9.jpg';
import image10 from '../images/product-10.jpg';
// prettier-ignore
const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
const products = [
  {
    name: 'Cras neque metus',
    images: images.slice(randomNumber(0, 8), 9),
    price: 60,
    oldPrice: 200,
    slug: 'product1',
    colors: ['black', 'white', 'pink'],
    stars: 1,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda veniam voluptate accusamus exercitationem officia quam vel animi delectus praesentium molestias eaque est nobis dolorum, aspernatur adipisci iusto amet itaque. Aperiam!
    Magnam eum reiciendis omnis exercitationem eaque ipsam totam, dicta beatae nisi. Ipsa voluptatibus, provident illum natus facilis maiores ipsam repellat accusamus quae vel illo dolore repellendus! Tempora quae asperiores soluta?`,
  },
  {
    name: 'Donec eu libero ac',
    images: images.slice(randomNumber(0, 8), 9),
    price: 80,
    oldPrice: 200,
    slug: 'product2',
    colors: ['pink', 'yellow', 'blue'],
    stars: 2,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda veniam voluptate accusamus exercitationem officia quam vel animi delectus praesentium molestias eaque est nobis dolorum, aspernatur adipisci iusto amet itaque. Aperiam!
    Magnam eum reiciendis omnis exercitationem eaque ipsam totam, dicta beatae nisi. Ipsa voluptatibus, provident illum natus facilis maiores ipsam repellat accusamus quae vel illo dolore repellendus! Tempora quae asperiores soluta?`,
  },
  {
    name: 'Epicuri per lobortis',
    images: images.slice(randomNumber(0, 8), 9),
    price: 75,
    oldPrice: 200,
    slug: 'product3',
    colors: ['black', 'yellow'],
    stars: 3,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda veniam voluptate accusamus exercitationem officia quam vel animi delectus praesentium molestias eaque est nobis dolorum, aspernatur adipisci iusto amet itaque. Aperiam!
    Magnam eum reiciendis omnis exercitationem eaque ipsam totam, dicta beatae nisi. Ipsa voluptatibus, provident illum natus facilis maiores ipsam repellat accusamus quae vel illo dolore repellendus! Tempora quae asperiores soluta?`,
  },
  {
    name: 'Kaoreet lobortis sagit',
    images: images.slice(randomNumber(0, 8), 9),
    price: 100,
    oldPrice: 200,
    slug: 'product4',
    colors: ['black', 'blue'],
    stars: 4,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda veniam voluptate accusamus exercitationem officia quam vel animi delectus praesentium molestias eaque est nobis dolorum, aspernatur adipisci iusto amet itaque. Aperiam!
    Magnam eum reiciendis omnis exercitationem eaque ipsam totam, dicta beatae nisi. Ipsa voluptatibus, provident illum natus facilis maiores ipsam repellat accusamus quae vel illo dolore repellendus! Tempora quae asperiores soluta?`,
  },
  {
    name: 'Condimentum posuere',
    images: images.slice(randomNumber(0, 8), 9),
    price: 105,
    oldPrice: 200,
    slug: 'product5',
    colors: ['pink', 'yellow'],
    stars: 4,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda veniam voluptate accusamus exercitationem officia quam vel animi delectus praesentium molestias eaque est nobis dolorum, aspernatur adipisci iusto amet itaque. Aperiam!
    Magnam eum reiciendis omnis exercitationem eaque ipsam totam, dicta beatae nisi. Ipsa voluptatibus, provident illum natus facilis maiores ipsam repellat accusamus quae vel illo dolore repellendus! Tempora quae asperiores soluta?`,
  },
  {
    name: 'Cras neque metus',
    images: images.slice(randomNumber(0, 8), 9),
    price: 120,
    oldPrice: 200,
    slug: 'product6',
    colors: ['yellow', 'blue'],
    stars: 5,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda veniam voluptate accusamus exercitationem officia quam vel animi delectus praesentium molestias eaque est nobis dolorum, aspernatur adipisci iusto amet itaque. Aperiam!
    Magnam eum reiciendis omnis exercitationem eaque ipsam totam, dicta beatae nisi. Ipsa voluptatibus, provident illum natus facilis maiores ipsam repellat accusamus quae vel illo dolore repellendus! Tempora quae asperiores soluta?`,
  },
  {
    name: 'Donec eu libero ac',
    images: images.slice(randomNumber(0, 8), 9),
    price: 89,
    oldPrice: 200,
    slug: 'product7',
    colors: ['blue'],
    stars: 5,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda veniam voluptate accusamus exercitationem officia quam vel animi delectus praesentium molestias eaque est nobis dolorum, aspernatur adipisci iusto amet itaque. Aperiam!
    Magnam eum reiciendis omnis exercitationem eaque ipsam totam, dicta beatae nisi. Ipsa voluptatibus, provident illum natus facilis maiores ipsam repellat accusamus quae vel illo dolore repellendus! Tempora quae asperiores soluta?`,
  },
  {
    name: 'Epicuri per lobortis',
    images: images.slice(randomNumber(0, 8), 9),
    price: 100,
    oldPrice: 200,
    slug: 'product8',
    colors: ['black'],
    stars: 2,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda veniam voluptate accusamus exercitationem officia quam vel animi delectus praesentium molestias eaque est nobis dolorum, aspernatur adipisci iusto amet itaque. Aperiam!
    Magnam eum reiciendis omnis exercitationem eaque ipsam totam, dicta beatae nisi. Ipsa voluptatibus, provident illum natus facilis maiores ipsam repellat accusamus quae vel illo dolore repellendus! Tempora quae asperiores soluta?`,
  },
  {
    name: 'Kaoreet lobortis sagit',
    images: images.slice(randomNumber(0, 8), 9),
    price: 78,
    oldPrice: 200,
    slug: 'product9',
    colors: ['black', 'yellow'],
    stars: 2,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda veniam voluptate accusamus exercitationem officia quam vel animi delectus praesentium molestias eaque est nobis dolorum, aspernatur adipisci iusto amet itaque. Aperiam!
    Magnam eum reiciendis omnis exercitationem eaque ipsam totam, dicta beatae nisi. Ipsa voluptatibus, provident illum natus facilis maiores ipsam repellat accusamus quae vel illo dolore repellendus! Tempora quae asperiores soluta?`,
  },
  {
    name: 'Condimentum posuere',
    images: images.slice(randomNumber(0, 8), 9),
    price: 60,
    oldPrice: 200,
    slug: 'product10',
    colors: ['white'],
    stars: 4,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda veniam voluptate accusamus exercitationem officia quam vel animi delectus praesentium molestias eaque est nobis dolorum, aspernatur adipisci iusto amet itaque. Aperiam!
    Magnam eum reiciendis omnis exercitationem eaque ipsam totam, dicta beatae nisi. Ipsa voluptatibus, provident illum natus facilis maiores ipsam repellat accusamus quae vel illo dolore repellendus! Tempora quae asperiores soluta?`,
  },
  {
    name: 'Cras neque metus',
    images: images.slice(randomNumber(0, 8), 9),
    price: 60,
    oldPrice: 200,
    slug: 'product11',
    colors: ['black', 'white', 'pink'],
    stars: 1,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda veniam voluptate accusamus exercitationem officia quam vel animi delectus praesentium molestias eaque est nobis dolorum, aspernatur adipisci iusto amet itaque. Aperiam!
    Magnam eum reiciendis omnis exercitationem eaque ipsam totam, dicta beatae nisi. Ipsa voluptatibus, provident illum natus facilis maiores ipsam repellat accusamus quae vel illo dolore repellendus! Tempora quae asperiores soluta?`,
  },
  {
    name: 'Donec eu libero ac',
    images: images.slice(randomNumber(0, 8), 9),
    price: 80,
    oldPrice: 200,
    slug: 'product12',
    colors: ['pink', 'yellow', 'blue'],
    stars: 2,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda veniam voluptate accusamus exercitationem officia quam vel animi delectus praesentium molestias eaque est nobis dolorum, aspernatur adipisci iusto amet itaque. Aperiam!
    Magnam eum reiciendis omnis exercitationem eaque ipsam totam, dicta beatae nisi. Ipsa voluptatibus, provident illum natus facilis maiores ipsam repellat accusamus quae vel illo dolore repellendus! Tempora quae asperiores soluta?`,
  },
  {
    name: 'Epicuri per lobortis',
    images: images.slice(randomNumber(0, 8), 9),
    price: 75,
    oldPrice: 200,
    slug: 'product13',
    colors: ['black', 'yellow'],
    stars: 3,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda veniam voluptate accusamus exercitationem officia quam vel animi delectus praesentium molestias eaque est nobis dolorum, aspernatur adipisci iusto amet itaque. Aperiam!
    Magnam eum reiciendis omnis exercitationem eaque ipsam totam, dicta beatae nisi. Ipsa voluptatibus, provident illum natus facilis maiores ipsam repellat accusamus quae vel illo dolore repellendus! Tempora quae asperiores soluta?`,
  },
  {
    name: 'Kaoreet lobortis sagit',
    images: images.slice(randomNumber(0, 8), 9),
    price: 100,
    oldPrice: 200,
    slug: 'product14',
    colors: ['black', 'blue'],
    stars: 4,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda veniam voluptate accusamus exercitationem officia quam vel animi delectus praesentium molestias eaque est nobis dolorum, aspernatur adipisci iusto amet itaque. Aperiam!
    Magnam eum reiciendis omnis exercitationem eaque ipsam totam, dicta beatae nisi. Ipsa voluptatibus, provident illum natus facilis maiores ipsam repellat accusamus quae vel illo dolore repellendus! Tempora quae asperiores soluta?`,
  },
  {
    name: 'Condimentum posuere',
    images: images.slice(randomNumber(0, 8), 9),
    price: 105,
    oldPrice: 200,
    slug: 'product15',
    colors: ['pink', 'yellow'],
    stars: 4,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda veniam voluptate accusamus exercitationem officia quam vel animi delectus praesentium molestias eaque est nobis dolorum, aspernatur adipisci iusto amet itaque. Aperiam!
    Magnam eum reiciendis omnis exercitationem eaque ipsam totam, dicta beatae nisi. Ipsa voluptatibus, provident illum natus facilis maiores ipsam repellat accusamus quae vel illo dolore repellendus! Tempora quae asperiores soluta?`,
  },
  {
    name: 'Cras neque metus',
    images: images.slice(randomNumber(0, 8), 9),
    price: 120,
    oldPrice: 200,
    slug: 'product16',
    colors: ['yellow', 'blue'],
    stars: 5,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda veniam voluptate accusamus exercitationem officia quam vel animi delectus praesentium molestias eaque est nobis dolorum, aspernatur adipisci iusto amet itaque. Aperiam!
    Magnam eum reiciendis omnis exercitationem eaque ipsam totam, dicta beatae nisi. Ipsa voluptatibus, provident illum natus facilis maiores ipsam repellat accusamus quae vel illo dolore repellendus! Tempora quae asperiores soluta?`,
  },
  {
    name: 'Donec eu libero ac',
    images: images.slice(randomNumber(0, 8), 9),
    price: 89,
    oldPrice: 200,
    slug: 'product17',
    colors: ['blue'],
    stars: 5,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda veniam voluptate accusamus exercitationem officia quam vel animi delectus praesentium molestias eaque est nobis dolorum, aspernatur adipisci iusto amet itaque. Aperiam!
    Magnam eum reiciendis omnis exercitationem eaque ipsam totam, dicta beatae nisi. Ipsa voluptatibus, provident illum natus facilis maiores ipsam repellat accusamus quae vel illo dolore repellendus! Tempora quae asperiores soluta?`,
  },
  {
    name: 'Epicuri per lobortis',
    images: images.slice(randomNumber(0, 8), 9),
    price: 100,
    oldPrice: 200,
    slug: 'product18',
    colors: ['black'],
    stars: 2,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda veniam voluptate accusamus exercitationem officia quam vel animi delectus praesentium molestias eaque est nobis dolorum, aspernatur adipisci iusto amet itaque. Aperiam!
    Magnam eum reiciendis omnis exercitationem eaque ipsam totam, dicta beatae nisi. Ipsa voluptatibus, provident illum natus facilis maiores ipsam repellat accusamus quae vel illo dolore repellendus! Tempora quae asperiores soluta?`,
  },
  {
    name: 'Kaoreet lobortis sagit',
    images: images.slice(randomNumber(0, 8), 9),
    price: 78,
    oldPrice: 200,
    slug: 'product19',
    colors: ['black', 'yellow'],
    stars: 2,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda veniam voluptate accusamus exercitationem officia quam vel animi delectus praesentium molestias eaque est nobis dolorum, aspernatur adipisci iusto amet itaque. Aperiam!
    Magnam eum reiciendis omnis exercitationem eaque ipsam totam, dicta beatae nisi. Ipsa voluptatibus, provident illum natus facilis maiores ipsam repellat accusamus quae vel illo dolore repellendus! Tempora quae asperiores soluta?`,
  },
  {
    name: 'Condimentum posuere',
    images: images.slice(randomNumber(0, 8), 9),
    price: 60,
    oldPrice: 200,
    slug: 'product20',
    colors: ['white'],
    stars: 4,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda veniam voluptate accusamus exercitationem officia quam vel animi delectus praesentium molestias eaque est nobis dolorum, aspernatur adipisci iusto amet itaque. Aperiam!
    Magnam eum reiciendis omnis exercitationem eaque ipsam totam, dicta beatae nisi. Ipsa voluptatibus, provident illum natus facilis maiores ipsam repellat accusamus quae vel illo dolore repellendus! Tempora quae asperiores soluta?`,
  },
];

const getAllProducts = () => products;
const getProducts = (num) => {
  const start = randomNumber(0, products.length - num);
  return products.slice(start, start + num);
};

const maxPrice = products.reduce((cur, product) => {
  return cur < product.price ? product.price : cur;
}, 0);

const minPrice = products.reduce((cur, product) => {
  return product.price < cur ? product.price : cur;
}, 9999999999);

const productsData = {
  getAllProducts,
  getProducts,
  maxPrice,
  minPrice,
};
export default productsData;
