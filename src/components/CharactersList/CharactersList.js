import React from 'react';

import CharacterItem from '../CharacterItem/CharacterItem';
import StyledList from './CharactersList.style';

const CharactersList = ({ loading, data }) => {
  return loading
    ? <h2>Loading...</h2>
    : <StyledList>
        {data?.characters.results.map(character => (
          <CharacterItem
            key={character.id}
            character={character}
          />
        ))}
      </StyledList>
  ;
};

export default CharactersList;
