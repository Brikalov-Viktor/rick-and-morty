import React from 'react';

import client from '../apolloClient';
import HomePage from '@/components/HomePage/HomePage';

import { filterNames } from '@/app/consts';
import { getObjFromKeysArray } from '@/app/helpers';
import { GET_CHARACTERS } from '@/app/queries';

const App = ({ res }) => {
  const { data, loading } = res;

  return (
    <HomePage
      data={data}
      loading={loading}
    />
	);
}

export const getServerSideProps = async (context) => {
  const filter = getObjFromKeysArray(filterNames, context.query);
  const res = await client.query({
    query: GET_CHARACTERS,
    variables: { filter },
  });

  return {
    props: { res },
  }
};

export default App;
