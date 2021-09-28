import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Select from '../../../components/Shared/Select/Select';
import SVGIcon from '../../../components/Shared/SVGIcon/SVGIcon';

function CatalogSortBox(props) {
  const { numProducts, itemPerPage, options, defaultOption, onSort, onGrid } =
    props;
  const { search } = useLocation();
  const page = search ? +search.slice(-1) : 1;
  const start = (page - 1) * itemPerPage;
  const end =
    start + itemPerPage > numProducts ? numProducts : start + itemPerPage;

  const [isGrid, setIsGrid] = useState(true);

  return (
    <div className="sort-box">
      <div className="sort-box__display">
        <div
          className={`sort-box__display__icon ${isGrid ? 'active' : ''}`}
          onClick={() => {
            setIsGrid(true);
            onGrid(true);
          }}
        >
          <SVGIcon name="gridList" width="16px" />
        </div>
        <div
          to="/catalog?view=list"
          className={`sort-box__display__icon ${!isGrid ? 'active' : ''}`}
          onClick={() => {
            setIsGrid(false);
            onGrid(false);
          }}
        >
          <SVGIcon name="list" width="16px" />
        </div>
        <span className="sort-box__display__result">
          Showing {start + 1}–{end} of {numProducts} results
        </span>
      </div>
      <div className="sort-box__select">
        <label>Sort By:</label>
        <Select
          options={options}
          defaultOption={defaultOption}
          onChange={onSort}
        />
      </div>
    </div>
  );
}

export default CatalogSortBox;
