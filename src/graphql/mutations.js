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
