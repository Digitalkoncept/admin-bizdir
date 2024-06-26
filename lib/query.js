import { gql } from "@apollo/client";

export const GET_ALL_LISTING = gql`
  query GetAllListings($type: String) {
    getAllListings(type: $type) {
      code
      success
      message
      listings {
       createdAt
        _id
        user
        user_name
        listing_name
        phone_number
        whatsapp_number
        listing_email
        category
        subcategory
        listing_status
        listing_address
        website
        country
        city
        pincode
        listing_detail
        listing_image
        gallery_images
        cover_image
        approval
        createdBy{
        name
        }
        approval_by {
          role
          message
          approver_id
        }
        views
      }
    }
  }
`;

export const GET_LISTING_BY_ID = gql`
  query GetListing($id: ID!) {
    getListing(_id: $id) {
      code
      success
      message
      listing {
        _id
        user
        listing_name
        phone_number
        whatsapp_number
        listing_email
        category
        subcategory
        tags
        listing_status
        listing_address
        website
        country
        city
        state
        area
        pincode
        listing_detail
        listing_image
        gallery_images
        cover_image
        youtube_link
        map_url
        createdBy{
        name
        }
        service_provided{
        name}
        service_location
          offer {
        offer_name
        offer_image
        offer_description
        offer_amount
        offer_type
        }
        approval
        approval_by {
          approver_id
          message
          role
        }
        views
      }
    }
  }
`;

// ROLES =================================>
export const GET_ALL_ROLES = gql`
  query Query {
    getAllRoles {
      code
      success
      message
      roles {
        _id
        role_name
        description
        permissions
      }
    }
  }
`;

export const GET_ROLE = gql`
  query GetRole($id: ID!) {
    getRole(_id: $id) {
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

// USERS ==================================>
export const GET_ALL_USERS = gql`
  query Query {
    getAllUsers {
      code
      success
      message
      users {
        _id
        name
        email
        gender
        user_status
        profile_image
        total_listing_count
        is_verified {
          status
        }
      }
    }
  }
`;

export const GET_USER_DETAILS = gql`
  query Query($id: ID!) {
    getUser(_id: $id) {
      code
      success
      message
      user {
        _id
        name
        email
        mobile_number
        gender
        cover_image
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Mutation($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      code
      success
      message
      user {
        token
        id
        name
        email
        is_verified
        image
      }
    }
  }
`;

// EMPLOYEE ===============================>
export const GET_EMPLOYEES = gql`
  query GetEmployees {
    getEmployees {
      message
      code
      success
      employee {
        _id
        name
        email
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

export const GET_EMPLOYEE_BY_ID = gql`
  query GetEmployeeById($id: ID!) {
    getEmployeeById(id: $id) {
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

// CLAIMS ===================================>
export const GET_ALL_CLAIMS = gql`
  query Query {
    getAllClaims {
      code
      success
      message
      claims {
        _id
        listing_name
        listing_id
        name
        phone_number
        email
        description
        claimed_through {
          role
          message
          id
        }
        claim_status
        listing_image
        verification_image
        createdAt
        updatedAt
      }
    }
  }
`;

export const GetAllstates = gql`
  query GetAllStates {
    getAllStates {
      code
      states {
        _id
        name
        type
        code
      }
    }
  }
`;

export const GetCityByState = gql`
  query GetCityByState($getCityByStateId: String) {
    getCityByState(id: $getCityByStateId) {
      code
      success
      cities {
        _id
        name
      }
    }
  }
`;

export const GetStateByCity = gql`
  query GetStateByCity($city: String!) {
    getStateByCity(name: $city) {
      code
      city {
        name
        state {
          name
          _id
        }
      }
    }
  }
`;

export const GetAreaByCity = gql`
  query GetAreasByCity($cityId: String) {
    getAreasByCity(id: $cityId) {
      code
      success
      message
      areas {
        _id
        name
      }
    }
  }
`;

export const GET_ALL_CATEGORY = gql`
  query GetAllCategories {
    getAllCategories {
      code
      categories {
        _id
        category_name
        subcategories {
          _id
          subcategory_name
          tags
        }
      }
    }
  }
`;

// CATEGORY ===================================>
export const GET_CATEGORIES_NAME = gql`
  query Categories {
    getAllCategories {
      categories {
        _id
        category_name
      }
      code
      success
      message
    }
  }
`;

export const GET_ALL_CATEGORY_FOR_TABLE = gql`
  query GetAllCategories {
    getAllCategories {
      code
      categories {
        _id
        category_name
        image
        createdAt
        subcategories {
          _id
          subcategory_name
          tags
          image
          createdAt
        }
      }
    }
  }
`;

export const GET_CATEGORY = gql`
  query GetCategory($id: ID!) {
    getCategory(_id: $id) {
      code
      success
      message
      category {
        _id
        category_name
        image
        subcategories {
          _id
          subcategory_name
          tags
        }
        createdAt
      }
    }
  }
`;
