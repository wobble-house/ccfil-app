/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    username
    email
    Referrals {
      items {
        id
        userId
        referralsId
        user {
          id
          username
          email
          createdAt
          updatedAt
          __typename
        }
        referrals {
          id
          date
          source
          name
          followUp
          DOA
          DOADate
          reasonForDecline
          howDidYouHearAboutUs
          assistanceProvided
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    username
    email
    Referrals {
      items {
        id
        userId
        referralsId
        user {
          id
          username
          email
          createdAt
          updatedAt
          __typename
        }
        referrals {
          id
          date
          source
          name
          followUp
          DOA
          DOADate
          reasonForDecline
          howDidYouHearAboutUs
          assistanceProvided
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    username
    email
    Referrals {
      items {
        id
        userId
        referralsId
        user {
          id
          username
          email
          createdAt
          updatedAt
          __typename
        }
        referrals {
          id
          date
          source
          name
          followUp
          DOA
          DOADate
          reasonForDecline
          howDidYouHearAboutUs
          assistanceProvided
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createReferrals = /* GraphQL */ `mutation CreateReferrals(
  $input: CreateReferralsInput!
  $condition: ModelReferralsConditionInput
) {
  createReferrals(input: $input, condition: $condition) {
    id
    date
    source
    name
    followUp
    DOA
    DOADate
    reasonForDecline
    howDidYouHearAboutUs
    assistanceProvided
    users {
      items {
        id
        userId
        referralsId
        user {
          id
          username
          email
          createdAt
          updatedAt
          __typename
        }
        referrals {
          id
          date
          source
          name
          followUp
          DOA
          DOADate
          reasonForDecline
          howDidYouHearAboutUs
          assistanceProvided
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateReferralsMutationVariables,
  APITypes.CreateReferralsMutation
>;
export const updateReferrals = /* GraphQL */ `mutation UpdateReferrals(
  $input: UpdateReferralsInput!
  $condition: ModelReferralsConditionInput
) {
  updateReferrals(input: $input, condition: $condition) {
    id
    date
    source
    name
    followUp
    DOA
    DOADate
    reasonForDecline
    howDidYouHearAboutUs
    assistanceProvided
    users {
      items {
        id
        userId
        referralsId
        user {
          id
          username
          email
          createdAt
          updatedAt
          __typename
        }
        referrals {
          id
          date
          source
          name
          followUp
          DOA
          DOADate
          reasonForDecline
          howDidYouHearAboutUs
          assistanceProvided
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateReferralsMutationVariables,
  APITypes.UpdateReferralsMutation
>;
export const deleteReferrals = /* GraphQL */ `mutation DeleteReferrals(
  $input: DeleteReferralsInput!
  $condition: ModelReferralsConditionInput
) {
  deleteReferrals(input: $input, condition: $condition) {
    id
    date
    source
    name
    followUp
    DOA
    DOADate
    reasonForDecline
    howDidYouHearAboutUs
    assistanceProvided
    users {
      items {
        id
        userId
        referralsId
        user {
          id
          username
          email
          createdAt
          updatedAt
          __typename
        }
        referrals {
          id
          date
          source
          name
          followUp
          DOA
          DOADate
          reasonForDecline
          howDidYouHearAboutUs
          assistanceProvided
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteReferralsMutationVariables,
  APITypes.DeleteReferralsMutation
>;
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
export const createUserReferrals = /* GraphQL */ `mutation CreateUserReferrals(
  $input: CreateUserReferralsInput!
  $condition: ModelUserReferralsConditionInput
) {
  createUserReferrals(input: $input, condition: $condition) {
    id
    userId
    referralsId
    user {
      id
      username
      email
      Referrals {
        items {
          id
          userId
          referralsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    referrals {
      id
      date
      source
      name
      followUp
      DOA
      DOADate
      reasonForDecline
      howDidYouHearAboutUs
      assistanceProvided
      users {
        items {
          id
          userId
          referralsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserReferralsMutationVariables,
  APITypes.CreateUserReferralsMutation
>;
export const updateUserReferrals = /* GraphQL */ `mutation UpdateUserReferrals(
  $input: UpdateUserReferralsInput!
  $condition: ModelUserReferralsConditionInput
) {
  updateUserReferrals(input: $input, condition: $condition) {
    id
    userId
    referralsId
    user {
      id
      username
      email
      Referrals {
        items {
          id
          userId
          referralsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    referrals {
      id
      date
      source
      name
      followUp
      DOA
      DOADate
      reasonForDecline
      howDidYouHearAboutUs
      assistanceProvided
      users {
        items {
          id
          userId
          referralsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserReferralsMutationVariables,
  APITypes.UpdateUserReferralsMutation
>;
export const deleteUserReferrals = /* GraphQL */ `mutation DeleteUserReferrals(
  $input: DeleteUserReferralsInput!
  $condition: ModelUserReferralsConditionInput
) {
  deleteUserReferrals(input: $input, condition: $condition) {
    id
    userId
    referralsId
    user {
      id
      username
      email
      Referrals {
        items {
          id
          userId
          referralsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    referrals {
      id
      date
      source
      name
      followUp
      DOA
      DOADate
      reasonForDecline
      howDidYouHearAboutUs
      assistanceProvided
      users {
        items {
          id
          userId
          referralsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserReferralsMutationVariables,
  APITypes.DeleteUserReferralsMutation
>;
