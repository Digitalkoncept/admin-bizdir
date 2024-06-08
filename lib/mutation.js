// mutations.js

import { gql } from "@apollo/client";

// LISTING =============================>
export const CREATE_CLAIMABLE_LISTING = gql`
  mutation CreateClaimableListing($data: ClaimableListingData!) {
    createClaimableListing(data: $data) {
      code
      success
      message
    }
  }
`;

export const APPROVE_LISTING_STATUS = gql`
  mutation ApproveListingStatus(
    $approveListingStatusId: ID!
    $approverData: ApproveListingData
  ) {
    approveListingStatus(
      id: $approveListingStatusId
      approverData: $approverData
    ) {
      code
      success
      message
      listing {
        _id
      }
    }
  }
`;

// ROLES =================================>
export const CREATE_ROLE = gql`
  mutation Mutation($data: RoleData!) {
    createRole(data: $data) {
      code
      success
      message
      role {
        _id
        role_name
        description
        permissions
      }
    }
  }
`;

export const UPDATE_ROLE = gql`
  mutation Mutation($id: ID!, $data: RoleData!) {
    updateRole(_id: $id, data: $data) {
      code
      success
      message
      role {
        _id
        role_name
        description
        permissions
      }
    }
  }
`;

export const DELETE_ROLE = gql`
  mutation DeleteRole($id: ID!) {
    deleteRole(_id: $id) {
      code
      success
      message
      role {
        _id
        role_name
        description
        permissions
      }
    }
  }
`;

// EMPLOYEE ===================================>
export const CREATE_EMPLOYEE = gql`
  mutation Mutation($data: CreateEmployeeData) {
    createEmployee(data: $data) {
      code
      message
      success
      employee {
        _id
        name
        email
        gender
        image
        role {
          _id
          role_name
          description
          permissions
        }
      }
    }
  }
`;

export const DELETE_EMPLOYEE = gql`
  mutation Mutation($id: ID!) {
    deleteEmployee(_id: $id) {
      code
      message
      success
      employee {
        _id
        name
        email
        role {
          permissions
          description
          role_name
          _id
        }
        gender
        image
      }
    }
  }
`;

// USERS =====================================>
export const CHANGE_USER_STATUS = gql`
  mutation Mutation($id: ID!, $data: UserData!) {
    updateUser(_id: $id, data: $data) {
      code
      success
      message
      user {
        user_status
      }
    }
  }
`;
