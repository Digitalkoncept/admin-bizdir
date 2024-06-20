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

export const UPDATE_LISTING = gql`
  mutation UpdateListing($id: ID!, $data: ListingData!) {
    updateListing(_id: $id, data: $data) {
      code
      success
      message
      listing {
        _id
        user
        user_name
        user_status
      }
    }
  }
`;

export const DELETE_LISTING = gql`
  mutation DeleteListing($id: ID!) {
    deleteListing(_id: $id) {
      code
      message
      listing {
        _id
      }
      success
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

export const UPDATE_EMPLOYEE = gql`
  mutation UpdateEmployee($id: ID!, $data: EmployeeData) {
    updateEmployee(_id: $id, data: $data) {
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
          description
          role_name
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
export const UPDATE_USER = gql`
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

// CLAIMS ====================================>
export const DELETE_CLAIM = gql`
  mutation DeleteClaim($id: ID!) {
    deleteClaim(_id: $id) {
      code
      success
      message
    }
  }
`;

export const APPROVE_CLAIM_STATUS = gql`
  mutation DeleteClaim(
    $claimId: ID!
    $claimMessage: String
    $claimStatus: String!
  ) {
    claimListing(
      claim_id: $claimId
      claim_message: $claimMessage
      claim_status: $claimStatus
    ) {
      code
      success
      message
      claim {
        _id
        listing_name
        listing_id
        listing_image
        listing_date
        name
        phone_number
        email
        description
        verification_image
        claim_status
        claimed_through {
          role
          message
          id
        }
        createdAt
        updatedAt
      }
    }
  }
`;

// CATEGORY ==================================>
export const CREATE_CATEGORY = gql`
  mutation CreateCategory($data: CategoryBody!) {
    createCategory(data: $data) {
      code
      success
      message
    }
  }
`;

export const CREATE_SUB_CATEGORY = gql`
  mutation CreateSubcategory($data: SubcategoryBody!) {
    createSubcategory(data: $data) {
      code
      message
      success
      subcategory {
        _id
      }
    }
  }
`;

export const UPDATE_CATEGORY = gql`
  mutation UpdateCategory(
    $id: ID!
    $categoryName: String
    $subcategories: [String]
  ) {
    updateCategory(
      _id: $id
      category_name: $categoryName
      subcategories: $subcategories
    ) {
      code
      success
      message
    }
  }
`;
