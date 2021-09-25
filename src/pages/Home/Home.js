import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import {
  bannerData1,
  bannerDataCategory,
} from '../../assets/fake-data/banner-data';
import infoImages from '../../assets/fake-data/infoImages';
import productsData from '../../assets/fake-data/products';
import ProductCard from '../../components/ProductCard/ProductCard';
import Grid from '../../components/Shared/Grid';
import Helmet from '../../components/Shared/Helmet/Helmet';
import Section, {
  SectionBody,
  SectionTitle,
} from '../../components/Shared/Section/Section';
import SVGIcon from '../../components/Shared/SVGIcon/SVGIcon';
import Banner from './Banner';
import BannerItem from './BannerItem';
import HeroSlider from './HeroSlider';
import Service from './Service';

function Home(props) {
  function Arrow(props) {
    const { className, onClick, icon } = props;
    return (
      <div className={className} onClick={onClick}>
        {icon}
      </div>
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <Arrow
        className="slick-arrow"
        icon={<SVGIcon name="rightLengthArrow" width="15px" height="24px" />}
      />
    ),
    prevArrow: (
      <Arrow
        className="slick-arrow"
        icon={<SVGIcon name="leftLengthArrow" width="15px" height="24px" />}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Helmet title="HONO - Home">
      <HeroSlider />
      <div className="container">
        <Service />
        <Banner />

        {/* new arrival */}
        <Section>
          <div className="section__container">
            <SectionTitle>
              <h3>The new arrivals</h3>
              <p>Preorder now to receive exclusive deals & gifts</p>
            </SectionTitle>
            <SectionBody>
              <Slider {...settings}>
                {productsData.getAllProducts().map((item, index) => (
                  <div key={index}>
                    <ProductCard item={item} />
                  </div>
                ))}
              </Slider>
            </SectionBody>
          </div>
        </Section>
        {/* end new arrival */}

        {/* Single banner */}
        <Section>
          <div className="section__container">
            <SectionBody>
              <BannerItem
                single={true}
                item={bannerData1[1]}
                className="banner__item--large"
              />
            </SectionBody>
          </div>
        </Section>
        {/* End single banner */}
      </div>
      {/* Best seller  */}
      <div
        className="container"
        style={{
          backgroundColor: '#f6f6f6',
        }}
      >
        <Section className="section__padding">
          <div className="section__container">
            <SectionTitle>
              <h3>BEST SELLERS</h3>
              <p>Add our best sellers to your weekly lineup.</p>
            </SectionTitle>
            <SectionBody>
              <Slider {...settings}>
                {productsData.getAllProducts().map((item, index) => (
                  <div key={index}>
                    <ProductCard item={item} />
                  </div>
                ))}
              </Slider>
            </SectionBody>
          </div>
        </Section>
      </div>
      {/* end Best seller  */}

      {/* Banner category */}
      <SectionBody>
        <Grid col={4} mdCol={2} smCol={1}>
          {bannerDataCategory.map((item, index) => (
            <BannerItem
              subtitle={true}
              key={index}
              item={item}
              className="banner-category"
              icon={
                <SVGIcon name="rightLengthArrow" width="15px" height="24px" />
              }
            />
          ))}
        </Grid>
      </SectionBody>
      {/* Banner category */}

      {/* info section */}
      <Section className="section__padding">
        <div className="section__container">
          <SectionBody className="section__position">
            <Grid col="6" smCol="1">
              {infoImages.map((image, index) => (
                <div className="banner-animation" key={index}>
                  <img src={image} alt="" width="100%" height="100%" />
                </div>
              ))}
            </Grid>
            <a
              href="https://www.facebook.com/trihoa.ngo/"
              class="btn btn--hono"
              target="_blank"
              rel="noreferrer"
            >
              HONOTEMPLATE
            </a>
          </SectionBody>
        </div>
      </Section>
      {/* end info section */}
    </Helmet>
  );
}

export default Home;
