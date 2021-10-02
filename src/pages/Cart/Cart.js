import React from 'react';
import productsData from '../../assets/fake-data/products';
import Breadcrumb from '../../components/Shared/Breadcrumb/Breadcrumb';
import Button from '../../components/Shared/Button/Button';
import Grid from '../../components/Shared/Grid';
import Helmet from '../../components/Shared/Helmet/Helmet';
import Section, { SectionBody } from '../../components/Shared/Section/Section';
import CartTable from './CartTable';

function Cart(props) {
  const products = productsData.getProducts(3);
  return (
    <Helmet title="cart">
      <Breadcrumb
        title="Cart"
        links={[
          { display: 'home', href: '/' },
          { display: 'catalog', href: '/catalog' },
          { display: 'cart', href: '/cart' },
        ]}
      />
      <div className="container">
        <Section className="section__container">
          <SectionBody>
            <CartTable products={products} />
          </SectionBody>
        </Section>
        <Section className="section__container">
          <SectionBody>
            <Grid className="cart-checkout" col={2} mdCol={1} gap={20}>
              <div className="cart-checkout__item">
                <div className="cart-checkout__item__title">coupon</div>
                <div className="cart-checkout__item__coupon">
                  <p>Enter your coupon code if you have one.</p>
                  <form>
                    <input type="text" placeholder="Coupon code" />
                    <Button>Apply coupon</Button>
                  </form>
                </div>
              </div>
              <div className="cart-checkout__item">
                <div className="cart-checkout__item__title">coupon</div>
                <div className="cart-checkout__item__content">
                  <div className="cart-checkout__item__subtotal">
                    <p>Subtotal</p>
                    <p>$250</p>
                  </div>
                  <div className="cart-checkout__item__discount">
                    <p>discount</p>
                    <p>- {`$0`}</p>
                  </div>
                  <div className="cart-checkout__item__total">
                    <p>total</p>
                    <p>$250</p>
                  </div>
                  <div className="cart-checkout__item__checkout">
                    <Button>Proceed to checkout</Button>
                  </div>
                </div>
              </div>
            </Grid>
          </SectionBody>
        </Section>
      </div>
    </Helmet>
  );
}

export default Cart;
