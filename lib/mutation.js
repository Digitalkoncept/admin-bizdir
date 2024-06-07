// mutations.js

import { gql } from '@apollo/client';

export const CREATE_CLAIMABLE_LISTING = gql`
  mutation CreateClaimableListing($data: ClaimableListingData!) {
    createClaimableListing(data: $data) {
      code
      success
      message
    }
  }
`;
