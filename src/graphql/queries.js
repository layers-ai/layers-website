/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWaitlist = /* GraphQL */ `
  query GetWaitlist($id: ID!) {
    getWaitlist(id: $id) {
      id
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listWaitlists = /* GraphQL */ `
  query ListWaitlists(
    $filter: ModelWaitlistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWaitlists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
