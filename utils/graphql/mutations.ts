/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createIcon = /* GraphQL */ `mutation CreateIcon(
  $input: CreateIconInput!
  $condition: ModelIconConditionInput
) {
  createIcon(input: $input, condition: $condition) {
    id
    alt
    src
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateIconMutationVariables,
  APITypes.CreateIconMutation
>;
export const updateIcon = /* GraphQL */ `mutation UpdateIcon(
  $input: UpdateIconInput!
  $condition: ModelIconConditionInput
) {
  updateIcon(input: $input, condition: $condition) {
    id
    alt
    src
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateIconMutationVariables,
  APITypes.UpdateIconMutation
>;
export const deleteIcon = /* GraphQL */ `mutation DeleteIcon(
  $input: DeleteIconInput!
  $condition: ModelIconConditionInput
) {
  deleteIcon(input: $input, condition: $condition) {
    id
    alt
    src
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteIconMutationVariables,
  APITypes.DeleteIconMutation
>;
export const createServices = /* GraphQL */ `mutation CreateServices(
  $input: CreateServicesInput!
  $condition: ModelServicesConditionInput
) {
  createServices(input: $input, condition: $condition) {
    id
    serviceTitle
    serviceBodyText
    Icon {
      id
      alt
      src
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    servicesIconId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateServicesMutationVariables,
  APITypes.CreateServicesMutation
>;
export const updateServices = /* GraphQL */ `mutation UpdateServices(
  $input: UpdateServicesInput!
  $condition: ModelServicesConditionInput
) {
  updateServices(input: $input, condition: $condition) {
    id
    serviceTitle
    serviceBodyText
    Icon {
      id
      alt
      src
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    servicesIconId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateServicesMutationVariables,
  APITypes.UpdateServicesMutation
>;
export const deleteServices = /* GraphQL */ `mutation DeleteServices(
  $input: DeleteServicesInput!
  $condition: ModelServicesConditionInput
) {
  deleteServices(input: $input, condition: $condition) {
    id
    serviceTitle
    serviceBodyText
    Icon {
      id
      alt
      src
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    servicesIconId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteServicesMutationVariables,
  APITypes.DeleteServicesMutation
>;
export const createTeamMember = /* GraphQL */ `mutation CreateTeamMember(
  $input: CreateTeamMemberInput!
  $condition: ModelTeamMemberConditionInput
) {
  createTeamMember(input: $input, condition: $condition) {
    id
    firstName
    lastName
    bio
    link
    title
    isFeatured
    Image {
      id
      src
      alt
      imageTitle
      createdAt
      updatedAt
      __typename
    }
    isLeader
    createdAt
    updatedAt
    teamMemberImageId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTeamMemberMutationVariables,
  APITypes.CreateTeamMemberMutation
>;
export const updateTeamMember = /* GraphQL */ `mutation UpdateTeamMember(
  $input: UpdateTeamMemberInput!
  $condition: ModelTeamMemberConditionInput
) {
  updateTeamMember(input: $input, condition: $condition) {
    id
    firstName
    lastName
    bio
    link
    title
    isFeatured
    Image {
      id
      src
      alt
      imageTitle
      createdAt
      updatedAt
      __typename
    }
    isLeader
    createdAt
    updatedAt
    teamMemberImageId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTeamMemberMutationVariables,
  APITypes.UpdateTeamMemberMutation
>;
export const deleteTeamMember = /* GraphQL */ `mutation DeleteTeamMember(
  $input: DeleteTeamMemberInput!
  $condition: ModelTeamMemberConditionInput
) {
  deleteTeamMember(input: $input, condition: $condition) {
    id
    firstName
    lastName
    bio
    link
    title
    isFeatured
    Image {
      id
      src
      alt
      imageTitle
      createdAt
      updatedAt
      __typename
    }
    isLeader
    createdAt
    updatedAt
    teamMemberImageId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTeamMemberMutationVariables,
  APITypes.DeleteTeamMemberMutation
>;
export const createHeadshot = /* GraphQL */ `mutation CreateHeadshot(
  $input: CreateHeadshotInput!
  $condition: ModelHeadshotConditionInput
) {
  createHeadshot(input: $input, condition: $condition) {
    id
    src
    alt
    imageTitle
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateHeadshotMutationVariables,
  APITypes.CreateHeadshotMutation
>;
export const updateHeadshot = /* GraphQL */ `mutation UpdateHeadshot(
  $input: UpdateHeadshotInput!
  $condition: ModelHeadshotConditionInput
) {
  updateHeadshot(input: $input, condition: $condition) {
    id
    src
    alt
    imageTitle
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateHeadshotMutationVariables,
  APITypes.UpdateHeadshotMutation
>;
export const deleteHeadshot = /* GraphQL */ `mutation DeleteHeadshot(
  $input: DeleteHeadshotInput!
  $condition: ModelHeadshotConditionInput
) {
  deleteHeadshot(input: $input, condition: $condition) {
    id
    src
    alt
    imageTitle
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteHeadshotMutationVariables,
  APITypes.DeleteHeadshotMutation
>;
