import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import categories from '../../../assets/fake-data/category';
import colors from '../../../assets/fake-data/product-color';
import tags from '../../../assets/fake-data/product-tag';
import productsData from '../../../assets/fake-data/products';
import banner from '../../../assets/images/side-banner.jpg';
import Checkbox from '../../../components/Shared/CheckBox/Checkbox';
import SliderRange from '../../../components/Shared/SliderRanger/SliderRange';
import Star from '../../../components/Shared/Star/Star';
import SVGIcon from '../../../components/Shared/SVGIcon/SVGIcon';
import TagLink from '../../../components/Shared/TagLink/TagLink';
import SideBarItem from './SideBarItem';

const { maxPrice } = productsData;

const SideBar = React.forwardRef((props, ref) => {
  const { dispatchFilter: dispatch, filter, reset } = props;

  const handleSliderRangeChange = useCallback(
    (firstValue, secondValue) => {
      dispatch({
        type: 'PRICE',
        price: { from: firstValue, to: secondValue },
      });
    },
    [dispatch]
  );

  return (
    <div className="sidebar" ref={ref}>
      <div
        className="sidebar__close"
        onClick={() => {
          ref.current.classList.remove('active');
        }}
      >
        <SVGIcon name="close" width="16px" />
      </div>
      <SideBarItem title="category">
        <ul className="sidebar__category">
          {categories.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </SideBarItem>

      <SideBarItem title="filter by price">
        <SliderRange
          min={0}
          max={maxPrice}
          step={10}
          reset={reset}
          onChange={handleSliderRangeChange}
        />
      </SideBarItem>

      <SideBarItem title="star">
        <ul className="sidebar__checkbox">
          {[...Array(5)].map((_, index) => (
            <li className="sidebar__checkbox__item" key={index}>
              <Checkbox
                onFilter={(el) =>
                  dispatch({
                    type: 'STAR',
                    stars: index + 1,
                    checked: el.checked,
                  })
                }
                checked={filter.stars.includes(index + 1)}
              >
                <Star stars={index + 1} disable={true} size="small" />
              </Checkbox>
            </li>
          ))}
        </ul>
      </SideBarItem>

      <SideBarItem title="Select by color">
        <ul className="sidebar__checkbox">
          {colors.map((item, index) => (
            <li className="sidebar__checkbox__item" key={index}>
              <Checkbox
                onFilter={(el) =>
                  dispatch({
                    type: 'COLOR',
                    color: item.color,
                    checked: el.checked,
                  })
                }
                checked={filter.colors.includes(item.color)}
              >
                {item.display}
              </Checkbox>
            </li>
          ))}
        </ul>
      </SideBarItem>

      <SideBarItem title="tag products">
        <div className="sidebar__tags">
          {tags.map((tag, index) => (
            <TagLink to={tag.path} key={index}>
              {tag.display}
            </TagLink>
          ))}
        </div>
      </SideBarItem>

      <SideBarItem>
        <div to="/catalog" className="sidebar__banner">
          <Link to="/catalog">
            <img src={banner} alt="" />
          </Link>
        </div>
      </SideBarItem>
    </div>
  );
});

export default React.memo(SideBar);
