import React from 'react';
import { Link } from 'react-router-dom';
import InputNumber from '../../components/Shared/Input/InputNumber';
import Select from '../../components/Shared/Select/Select';
import SVGIcon from '../../components/Shared/SVGIcon/SVGIcon';

function CartTable({ products, ...rest }) {
  return (
    <div className="cart-table">
      <table>
        <thead>
          <tr>
            <th>Delete</th>
            <th>Image</th>
            <th>Product</th>
            <th>Color</th>
            <th>Size</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="product-cart">
              <td className="product-cart__delete">
                <SVGIcon name="trash" width="18px" />
              </td>
              <td className="product-cart__image">
                <Link to={`/catalog/${product.slug}`}>
                  <img src={product.images[0]} alt="" />
                </Link>
              </td>
              <td className="product-cart__name">{product.name}</td>
              <td className="product-cart__color">
                <Select options={product.colors} defaultOption={0} />
              </td>
              <td className="product-cart__size">
                <Select options={product.sizes} defaultOption={0} />
              </td>
              <td className="product-cart__price">{product.price}</td>
              <td className="product-cart__quantity">
                <span>Quantity:</span>
                <InputNumber min={1} max={product.stock} defaultValue={1} />
              </td>
              <td className="product-cart__total">Total</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
