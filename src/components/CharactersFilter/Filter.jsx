import React from 'react';

import { filtersList } from '@/app/consts';
import StyledFilter from './Filter.style';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <StyledFilter>
      {filtersList.map((item) => (
        <select
          key={item.name}
          className="filter__select"
          name={item.name}
          onChange={handleFilterChange}
          value={filter[item.name]}
        >
          <option value="">
            {`Select ${item.name}`}
          </option>
          {item.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ))}
    </StyledFilter>
  );
};

export default Filter;
