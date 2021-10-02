import React, { useEffect, useRef, useState } from 'react';
import AddedSuccess from '../../components/SuccessAdded/AddedSuccess';
import Button from '../../components/Shared/Button/Button';
import RadioInput from '../../components/Shared/RadioInput/Radio';
import Select from '../../components/Shared/Select/Select';
import SVGIcon from '../../components/Shared/SVGIcon/SVGIcon';

function ProductAction(props) {
  const { product } = props;

  const empty = product.stock < 1;

  const [size, setSize] = useState(0);
  const [color, setColor] = useState(undefined);
  const quantityRef = useRef(null);

  const [addAccess, setAddAccess] = useState(false);
  const handleClose = () => {
    setAddAccess(false);
  };

  const handleAdd = () => {
    if (empty) return;
    if (!color) {
      alert('Please choose color!');
      return;
    }
    if (!size || size === 0) {
      alert('Please choose size!');
      return;
    }
    if (
      quantityRef.current.value > product.stock ||
      quantityRef.current.value < 1
    ) {
      alert('Please choose valid quantity!');
      return;
    }
    setAddAccess(true);
  };

  useEffect(() => {
    setColor(undefined);
    setSize(0);
    quantityRef.current.value = 1;
  }, [product]);

  return (
    <>
      {addAccess && <AddedSuccess product={product} onClose={handleClose} />}
      <div className="product-detail__right__action">
        <div className="product-detail__right__action__title">
          Available options
        </div>
        <div className="product-detail__right__action__product-stock">
          <span className={`${empty ? 'empty' : ''}`}></span>
          {product.stock} IN STOCK
        </div>
        <div className="product-detail__right__action__item">
          <span>Color</span>
          <div className="product-detail__right__action__flex">
            {product.colors.map((item, index) => (
              <RadioInput
                name="product-color"
                background={item}
                key={index}
                className="radio-color"
                onChange={(e) => {
                  setColor(index);
                }}
                checked={index === color}
              />
            ))}
          </div>
        </div>
        <div className="product-detail__right__action__item">
          <span>Size</span>
          <div className="product-detail__right__action__flex">
            <Select
              options={['size in option'].concat(product.sizes)}
              defaultOption={0}
              onChange={setSize}
              value={size}
            />
          </div>
        </div>
        <div className="product-detail__right__action__item">
          <span>Quantity</span>
          <div className="product-detail__right__action__flex">
            <input
              type="number"
              id=""
              min={1}
              max={product.stock}
              defaultValue={empty ? 0 : 1}
              disabled={empty ? true : false}
              ref={quantityRef}
            />
            <Button className={`${empty ? 'empty' : ''}`} onClick={handleAdd}>
              {empty ? 'Out of stock' : '+ Add to cart'}
            </Button>
          </div>
        </div>
        <div className="product-detail__right__action__flex">
          <div className="product-detail__right__action__wishlist">
            <SVGIcon name="wishlist" width="15px" />
            <span>Add to wishlist</span>
          </div>
          <div className="product-detail__right__action__compare">
            <SVGIcon name="compare" width="15px" />
            <span>Compare</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductAction;
