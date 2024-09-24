import React from 'react';

import { filterNames } from '@/app/consts';
import StyledItem from './CharacterItem.style';

const CharacterItem = ({ character }) => {
  return (
    <StyledItem>
      <h2>{character.name}</h2>

      {filterNames.map((name) => (
        <p key={name} className="character-item__description">
          <strong>{name}:</strong> {character[name] || '-'}
        </p>
      ))}

      <p>
        <strong>Location:</strong> {character.location.name || '-'}
      </p>

      <ol className='character-item__episodes'>
        <strong>Episodes:</strong>
        {character.episode.map(ep =>
          <li
            key={ep.name}
            className='character-item__episode-item'
          >
            {ep.name}
          </li>
        )}
      </ol>
    </StyledItem>
  );
};

export default CharacterItem;
