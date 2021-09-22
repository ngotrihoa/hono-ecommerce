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
    price: '60',
    oldPrice: '60',
    slug: 'product',
    star: 4,
  },
  {
    name: 'Donec eu libero ac',
    images: images.slice(randomNumber(0, 8), 9),
    price: '60',
    oldPrice: '60',
    slug: 'product',
    star: 4,
  },
  {
    name: 'Epicuri per lobortis',
    images: images.slice(randomNumber(0, 8), 9),
    price: '60',
    oldPrice: '60',
    slug: 'product',
    star: 4,
  },
  {
    name: 'Kaoreet lobortis sagit',
    images: images.slice(randomNumber(0, 8), 9),
    price: '60',
    oldPrice: '60',
    slug: 'product',
    star: 4,
  },
  {
    name: 'Condimentum posuere',
    images: images.slice(randomNumber(0, 8), 9),
    price: '60',
    oldPrice: '60',
    slug: 'product',
    star: 4,
  },
  {
    name: 'Cras neque metus',
    images: images.slice(randomNumber(0, 8), 9),
    price: '60',
    oldPrice: '60',
    slug: 'product',
    star: 4,
  },
  {
    name: 'Donec eu libero ac',
    images: images.slice(randomNumber(0, 8), 9),
    price: '60',
    oldPrice: '60',
    slug: 'product',
    star: 4,
  },
  {
    name: 'Epicuri per lobortis',
    images: images.slice(randomNumber(0, 8), 9),
    price: '60',
    oldPrice: '60',
    slug: 'product',
    star: 4,
  },
  {
    name: 'Kaoreet lobortis sagit',
    images: images.slice(randomNumber(0, 8), 9),
    price: '60',
    oldPrice: '60',
    slug: 'product',
    star: 4,
  },
  {
    name: 'Condimentum posuere',
    images: images.slice(randomNumber(0, 8), 9),
    price: '60',
    oldPrice: '60',
    slug: 'product',
    star: 4,
  },
];

const getAllProducts = () => products;
const getProducts = (num) => {
  const start = randomNumber(0, products.length - num);
  return products.slice(start, start + num);
};
const productsData = {
  getAllProducts,
  getProducts,
};
export default productsData;
