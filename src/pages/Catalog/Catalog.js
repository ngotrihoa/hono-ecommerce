import React, { createRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../../assets/fake-data/products';
import ProductCard from '../../components/ProductCard/ProductCard';
import Breadcrumb from '../../components/Shared/Breadcrumb/Breadcrumb';
import Button from '../../components/Shared/Button/Button';
import Grid from '../../components/Shared/Grid';
import Helmet from '../../components/Shared/Helmet/Helmet';
import Section, { SectionBody } from '../../components/Shared/Section/Section';
import SVGIcon from '../../components/Shared/SVGIcon/SVGIcon';
import useFilter from '../../hooks/useFilter';
import usePage from '../../hooks/usePage';
import CatalogSortBox from './Content/CatalogSortBox';
import SideBar from './SideBar/SideBar';

const productList = productsData.getAllProducts();

let firstRender = true;

function Catalog(props) {
  const { search } = props.location;

  const [products, setProducts] = useState(productList);
  const [reset, setReset] = useState(false);
  const [typeSort, setTypeSort] = useState(0);
  const [isGrid, setIsGrid] = useState(true);

  const { filter, dispatchFilter, handleFilter } = useFilter();

  const sidebarRef = createRef();

  //pages
  const itemPerPage = isGrid ? 9 : 5;
  const page = search ? +search.slice(-1) : 1;
  const { productsPaging, numPages, setProductByPage } = usePage(
    products,
    itemPerPage
  );

  //effect filter products
  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      return;
    }
    setProducts(handleFilter(productList, filter, typeSort));
  }, [filter, handleFilter, typeSort]);

  //effect products paging
  useEffect(() => {
    setProductByPage(page);
  }, [page, setProductByPage]);

  //effect reset filter
  useEffect(() => {
    if (reset === false) return;
    const timer = setTimeout(() => {
      setReset(false);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <Helmet title="HONO - Catalog">
      <Breadcrumb
        title="Hono - catalog"
        links={[
          { display: 'Home', href: '/' },
          { display: 'Catalog', href: '/catalog' },
        ]}
      />
      <div className="container">
        <Section className="section__container">
          <SectionBody className="catalog">
            {/* side bar */}
            <div className="catalog__toggle">
              <SVGIcon
                name="rightarrow"
                onClick={() => {
                  sidebarRef.current.classList.add('active');
                }}
              />
            </div>

            <SideBar
              filter={filter}
              dispatchFilter={dispatchFilter}
              reset={reset}
              ref={sidebarRef}
            />
            {/* end side bar */}

            <div className="catalog__content">
              <div className="catalog__content__container">
                <CatalogSortBox
                  options={[
                    'Sort by newness',
                    'Product name: A - Z',
                    'Product name: Z - A',
                    'Sort by average rating',
                    'Sort by price: low to hight',
                    'Sort by price: hight to low',
                  ]}
                  defaultOption={0}
                  onSort={setTypeSort}
                  numProducts={products.length}
                  itemPerPage={itemPerPage}
                  onGrid={setIsGrid}
                />

                <div className="catalog__content__filter-tags">
                  <Button
                    onClick={() => {
                      dispatchFilter({ type: 'CLEAR' });
                      setReset(true);
                    }}
                  >
                    Delete all filter
                  </Button>
                  <ul className="catalog__content__filter-tags__list">
                    {filter.stars.map((item, index) => (
                      <li key={index}>
                        <span>
                          {item}
                          <span style={{ margin: '0 5px' }}>
                            <SVGIcon name="star" fill="#b19361" width="12px" />
                          </span>
                        </span>
                        <SVGIcon
                          name="close"
                          width="7px"
                          onClick={() => {
                            dispatchFilter({
                              type: 'STAR',
                              stars: item,
                              checked: false,
                            });
                          }}
                        />
                      </li>
                    ))}
                    {filter.colors.map((item, index) => (
                      <li key={index}>
                        <span>{item} color</span>
                        <SVGIcon
                          name="close"
                          width="7px"
                          onClick={() => {
                            dispatchFilter({
                              type: 'COLOR',
                              color: item,
                              checked: false,
                            });
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="catalog__content__products">
                  {isGrid && (
                    <Grid col={3} mdCol={2} smCol={1} gap={30}>
                      {productsPaging.map((product) => (
                        <ProductCard key={product.slug} item={product} />
                      ))}
                    </Grid>
                  )}
                  {!isGrid && (
                    <Grid col={1} gap={30}>
                      {productsPaging.map((product) => (
                        <ProductCard
                          key={product.slug}
                          item={product}
                          className="list"
                        />
                      ))}
                    </Grid>
                  )}
                </div>

                <div className="catalog__content__pages">
                  <ul className="catalog__content__pages__list">
                    {page > 1 && (
                      <li>
                        <Link to={`/catalog?page=${page - 1}`}>
                          <SVGIcon
                            name="next"
                            width="9"
                            height="14"
                            style={{
                              transform: 'rotate(180deg)',
                              transformOrigin: 'center',
                            }}
                          />
                        </Link>
                      </li>
                    )}
                    {[...Array(numPages)].map((_, index) => (
                      <li
                        key={index}
                        className={page === index + 1 ? 'active' : ''}
                      >
                        <Link to={`/catalog?page=${index + 1}`}>
                          {index + 1}
                        </Link>
                      </li>
                    ))}
                    {page < numPages && (
                      <li>
                        <Link to={`/catalog?page=${page + 1}`}>
                          <SVGIcon name="next" width="9" height="14" />
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </SectionBody>
        </Section>
      </div>
    </Helmet>
  );
}

export default Catalog;
