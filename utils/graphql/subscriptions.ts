/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateIcon = /* GraphQL */ `subscription OnCreateIcon($filter: ModelSubscriptionIconFilterInput) {
  onCreateIcon(filter: $filter) {
    id
    src
    alt
    iconTitle
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateIconSubscriptionVariables,
  APITypes.OnCreateIconSubscription
>;
export const onUpdateIcon = /* GraphQL */ `subscription OnUpdateIcon($filter: ModelSubscriptionIconFilterInput) {
  onUpdateIcon(filter: $filter) {
    id
    src
    alt
    iconTitle
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateIconSubscriptionVariables,
  APITypes.OnUpdateIconSubscription
>;
export const onDeleteIcon = /* GraphQL */ `subscription OnDeleteIcon($filter: ModelSubscriptionIconFilterInput) {
  onDeleteIcon(filter: $filter) {
    id
    src
    alt
    iconTitle
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteIconSubscriptionVariables,
  APITypes.OnDeleteIconSubscription
>;
export const onCreateServices = /* GraphQL */ `subscription OnCreateServices($filter: ModelSubscriptionServicesFilterInput) {
  onCreateServices(filter: $filter) {
    id
    serviceTitle
    serviceBodyText
    Icon {
      id
      src
      alt
      iconTitle
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
` as GeneratedSubscription<
  APITypes.OnCreateServicesSubscriptionVariables,
  APITypes.OnCreateServicesSubscription
>;
export const onUpdateServices = /* GraphQL */ `subscription OnUpdateServices($filter: ModelSubscriptionServicesFilterInput) {
  onUpdateServices(filter: $filter) {
    id
    serviceTitle
    serviceBodyText
    Icon {
      id
      src
      alt
      iconTitle
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
` as GeneratedSubscription<
  APITypes.OnUpdateServicesSubscriptionVariables,
  APITypes.OnUpdateServicesSubscription
>;
export const onDeleteServices = /* GraphQL */ `subscription OnDeleteServices($filter: ModelSubscriptionServicesFilterInput) {
  onDeleteServices(filter: $filter) {
    id
    serviceTitle
    serviceBodyText
    Icon {
      id
      src
      alt
      iconTitle
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
` as GeneratedSubscription<
  APITypes.OnDeleteServicesSubscriptionVariables,
  APITypes.OnDeleteServicesSubscription
>;
export const onCreateTeamMember = /* GraphQL */ `subscription OnCreateTeamMember(
  $filter: ModelSubscriptionTeamMemberFilterInput
) {
  onCreateTeamMember(filter: $filter) {
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
    createdAt
    updatedAt
    teamMemberImageId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTeamMemberSubscriptionVariables,
  APITypes.OnCreateTeamMemberSubscription
>;
export const onUpdateTeamMember = /* GraphQL */ `subscription OnUpdateTeamMember(
  $filter: ModelSubscriptionTeamMemberFilterInput
) {
  onUpdateTeamMember(filter: $filter) {
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
    createdAt
    updatedAt
    teamMemberImageId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTeamMemberSubscriptionVariables,
  APITypes.OnUpdateTeamMemberSubscription
>;
export const onDeleteTeamMember = /* GraphQL */ `subscription OnDeleteTeamMember(
  $filter: ModelSubscriptionTeamMemberFilterInput
) {
  onDeleteTeamMember(filter: $filter) {
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
    createdAt
    updatedAt
    teamMemberImageId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTeamMemberSubscriptionVariables,
  APITypes.OnDeleteTeamMemberSubscription
>;
export const onCreateImage = /* GraphQL */ `subscription OnCreateImage($filter: ModelSubscriptionImageFilterInput) {
  onCreateImage(filter: $filter) {
    id
    src
    alt
    imageTitle
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateImageSubscriptionVariables,
  APITypes.OnCreateImageSubscription
>;
export const onUpdateImage = /* GraphQL */ `subscription OnUpdateImage($filter: ModelSubscriptionImageFilterInput) {
  onUpdateImage(filter: $filter) {
    id
    src
    alt
    imageTitle
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateImageSubscriptionVariables,
  APITypes.OnUpdateImageSubscription
>;
export const onDeleteImage = /* GraphQL */ `subscription OnDeleteImage($filter: ModelSubscriptionImageFilterInput) {
  onDeleteImage(filter: $filter) {
    id
    src
    alt
    imageTitle
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteImageSubscriptionVariables,
  APITypes.OnDeleteImageSubscription
>;
