import styled from 'styled-components';

const StyledItem = styled.div`
  .character-item__description::first-letter {
    text-transform: capitalize;
  }

  .character-item__episodes {
    padding-left: 0;
    list-style: inside decimal;
  }

  .character-item__episode-item {
    padding: 5px;

    &::marker {
      font-weight: bold;
    }
  }
`;

export default StyledItem;
