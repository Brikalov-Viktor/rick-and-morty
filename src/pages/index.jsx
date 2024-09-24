import React from 'react';

import client from '../apolloClient';
import HomePage from '@/components/HomePage/HomePage';
// import StyledComponentsRegistry from '@/components/registry.js';

import { filterNames } from '@/consts';
import { pickFieldsFromObjByKeys } from '@/helpers';
import { GET_CHARACTERS } from '@/queries';

const App = ({ res }) => {
  const { data, loading } = res;

  return (
    // <StyledComponentsRegistry>
      <HomePage
        data={data}
        loading={loading}
      />
    // </StyledComponentsRegistry>
	);
}

export const getServerSideProps = async (context) => {
  const filter = pickFieldsFromObjByKeys(filterNames, context.query);
  const res = await client.query({
    query: GET_CHARACTERS,
    variables: { filter },
  });

  return {
    props: { res },
  }
};

export default App;
