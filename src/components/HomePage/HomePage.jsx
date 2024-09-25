import React from 'react';
import { useRouter } from 'next/router';

import Filter from '@/components/CharactersFilter/Filter';
import CharactersList from '@/components/CharactersList/CharactersList';

import { pickFieldsFromObjByKeys } from '@/helpers';
import { filterNames } from '@/consts';
import StyledHome from './HomePage.style';

const HomePage = ({ loading, data }) => {
  const router = useRouter();
  const filter = pickFieldsFromObjByKeys(filterNames, router.query);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newQuery = {
      ...router.query,
      [name]: value,
    };

    if (!value) delete newQuery[name];
    router.query = newQuery;
    router.push(router);
  };

  return (
    <StyledHome>
      <h1>Rick & Morty Characters</h1>
      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
      <CharactersList
        data={data}
        loading={loading}
      />
    </StyledHome>
  );
};

export default HomePage;
