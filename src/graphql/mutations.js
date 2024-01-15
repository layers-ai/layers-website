/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWaitlist = /* GraphQL */ `
  mutation CreateWaitlist(
    $input: CreateWaitlistInput!
    $condition: ModelWaitlistConditionInput
  ) {
    createWaitlist(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateWaitlist = /* GraphQL */ `
  mutation UpdateWaitlist(
    $input: UpdateWaitlistInput!
    $condition: ModelWaitlistConditionInput
  ) {
    updateWaitlist(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteWaitlist = /* GraphQL */ `
  mutation DeleteWaitlist(
    $input: DeleteWaitlistInput!
    $condition: ModelWaitlistConditionInput
  ) {
    deleteWaitlist(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createWaitlistCount = /* GraphQL */ `
  mutation CreateWaitlistCount(
    $input: CreateWaitlistCountInput!
    $condition: ModelWaitlistCountConditionInput
  ) {
    createWaitlistCount(input: $input, condition: $condition) {
      id
      count
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateWaitlistCount = /* GraphQL */ `
  mutation UpdateWaitlistCount(
    $input: UpdateWaitlistCountInput!
    $condition: ModelWaitlistCountConditionInput
  ) {
    updateWaitlistCount(input: $input, condition: $condition) {
      id
      count
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteWaitlistCount = /* GraphQL */ `
  mutation DeleteWaitlistCount(
    $input: DeleteWaitlistCountInput!
    $condition: ModelWaitlistCountConditionInput
  ) {
    deleteWaitlistCount(input: $input, condition: $condition) {
      id
      count
      createdAt
      updatedAt
      __typename
    }
  }
`;
