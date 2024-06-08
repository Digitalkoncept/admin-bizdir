import { gql } from "@apollo/client";

export const GET_ALL_LISTING = gql`
  query ($type: String!) {
    getAllListings(type: $type) {
      code
      success
      message
      listings {
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
        cities
        pincode
        map_url
        listing_detail
        listing_image
        gallery_images
        cover_image
        youtube_link
        service_location
        approval
        views
        approval_by {
          role
          message
          approver_id
        }
        service_provided {
          name
          image
        }
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
