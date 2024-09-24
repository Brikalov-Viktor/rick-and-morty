import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters($filter: FilterCharacter) {
    characters(filter: $filter) {
      results {
        id
        name
        status
        species
        gender
        type
        location {
          name
        }
        episode {
          name
        }
      }
    }
  }
`;
