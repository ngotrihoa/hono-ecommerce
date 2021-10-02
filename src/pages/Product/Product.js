import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import productsData from '../../assets/fake-data/products';
import MainSlider from '../../components/MainSlider/MainSlider';
import ProductCard from '../../components/ProductCard/ProductCard';
import Breadcrumb from '../../components/Shared/Breadcrumb/Breadcrumb';
import Helmet from '../../components/Shared/Helmet/Helmet';
import Section, {
  SectionBody,
  SectionTitle,
} from '../../components/Shared/Section/Section';
import Star from '../../components/Shared/Star/Star';
import SVGIcon from '../../components/Shared/SVGIcon/SVGIcon';
import Tabs from '../../components/Tabs/Tabs';
import ProductAction from './ProductAction';
import ProductPreview from './ProductPreview';

function Product(props) {
  const { slug } = useParams();
  const product = productsData.getProductBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return <Redirect to="/404" />;
  }

  return (
    <Helmet title="HONO - Product">
      <Breadcrumb
        title="HONO - Product detail"
        links={[
          { display: 'home', href: '/' },
          { display: 'catalog', href: '/catalog' },
          { display: 'product detail', href: `${props.match.url}` },
        ]}
      />
      <div className="container">
        <Section className="section__container ">
          <SectionBody>
            <div className="product-detail">
              <div className="product-detail__left">
                <ProductPreview product={product} />
              </div>

              <div className="product-detail__right">
                <div className="product-detail__right__item">
                  <div className="product-detail__right__content">
                    <div className="product-detail__right__content__title">
                      {product.name}
                    </div>
                    <div className="product-detail__right__content__star">
                      <Star stars={product.stars} disable={true} size="small" />
                      <span>(Customer review)</span>
                    </div>
                    <div className="product-detail__right__content__price">
                      <span>${product.price}</span>
                      {product.oldPrice && product.oldPrice < product.price && (
                        <del>${product.oldPrice}</del>
                      )}
                    </div>
                    <div className="product-detail__right__content__description">
                      <p>{product.description}</p>
                    </div>
                  </div>
                </div>
                <div className="product-detail__right__item">
                  <ProductAction product={product} />
                </div>
                <div className="product-detail__right__item">
                  <div className="product-detail__right__social">
                    <div className="product-detail__right__social__title">
                      Categories:
                    </div>
                    <ul>
                      <li>
                        <Link to="#">Bar stool{', '}</Link>
                      </li>
                      <li>
                        <Link to="#">kitchen utensils{', '}</Link>
                      </li>
                      <li>
                        <Link to="#">kitchen utensils</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail__right__social">
                    <div className="product-detail__right__social__title">
                      Share this product:
                    </div>
                    <ul>
                      <li>
                        <Link to="#">
                          <SVGIcon name="facebook" width="15px" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <SVGIcon name="twitter" width="15px" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <SVGIcon name="instagram" width="15px" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <SVGIcon name="linkedin" width="15px" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SectionBody>
        </Section>
        <Section>
          <SectionBody className="section__container">
            <Tabs>
              <Tabs.TabPain title="description">
                {product.description}
              </Tabs.TabPain>
              <Tabs.TabPain title="specification">
                {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rerum est quasi, doloremque veniam alias fugit magni sequi dolor natus dicta fugiat corporis similique aspernatur corrupti, inventore commodi iste sapiente.
                Similique nobis totam nihil omnis dolorum ea veniam quaerat at molestias est recusandae quisquam reiciendis magnam eos cupiditate quas consectetur natus et, doloremque iste ducimus. Sit, architecto ipsum! Dolore, facere?
                Similique aliquam temporibus dignissimos perspiciatis, assumenda mollitia exercitationem, ad vitae dolores cupiditate minima fugit modi dolorum illum rerum ipsum hic laboriosam quis delectus dolorem rem earum nostrum. Possimus, error libero.
                Beatae rerum fugit soluta necessitatibus voluptate quas animi labore culpa, hic quae, illo error quisquam odit? Ipsum maiores hic voluptatem incidunt blanditiis ipsam laborum dicta non. Rem esse error fugit.`}
              </Tabs.TabPain>
              <Tabs.TabPain title="reviews">{product.description}</Tabs.TabPain>
            </Tabs>
          </SectionBody>
        </Section>
        <Section>
          <div className="section__container">
            <SectionTitle>
              <h3>BEST SELLERS</h3>
              <p>Add our best sellers to your weekly lineup.</p>
            </SectionTitle>
            <SectionBody>
              <MainSlider>
                {productsData.getAllProducts().map((item, index) => (
                  <div key={index}>
                    <ProductCard item={item} />
                  </div>
                ))}
              </MainSlider>
            </SectionBody>
          </div>
        </Section>
      </div>
    </Helmet>
  );
}

export default Product;
