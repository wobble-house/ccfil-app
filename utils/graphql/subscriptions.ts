/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
          currentResident
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
          currentResident
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
          currentResident
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateReferrals = /* GraphQL */ `subscription OnCreateReferrals($filter: ModelSubscriptionReferralsFilterInput) {
  onCreateReferrals(filter: $filter) {
    id
    date
    source
    name
    followUp
    currentResident
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
          currentResident
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
` as GeneratedSubscription<
  APITypes.OnCreateReferralsSubscriptionVariables,
  APITypes.OnCreateReferralsSubscription
>;
export const onUpdateReferrals = /* GraphQL */ `subscription OnUpdateReferrals($filter: ModelSubscriptionReferralsFilterInput) {
  onUpdateReferrals(filter: $filter) {
    id
    date
    source
    name
    followUp
    currentResident
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
          currentResident
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
` as GeneratedSubscription<
  APITypes.OnUpdateReferralsSubscriptionVariables,
  APITypes.OnUpdateReferralsSubscription
>;
export const onDeleteReferrals = /* GraphQL */ `subscription OnDeleteReferrals($filter: ModelSubscriptionReferralsFilterInput) {
  onDeleteReferrals(filter: $filter) {
    id
    date
    source
    name
    followUp
    currentResident
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
          currentResident
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
` as GeneratedSubscription<
  APITypes.OnDeleteReferralsSubscriptionVariables,
  APITypes.OnDeleteReferralsSubscription
>;
export const onCreateIcon = /* GraphQL */ `subscription OnCreateIcon($filter: ModelSubscriptionIconFilterInput) {
  onCreateIcon(filter: $filter) {
    id
    alt
    src
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
    alt
    src
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
    alt
    src
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
    featurePosition
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
    featurePosition
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
    featurePosition
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
export const onCreateHeadshot = /* GraphQL */ `subscription OnCreateHeadshot($filter: ModelSubscriptionHeadshotFilterInput) {
  onCreateHeadshot(filter: $filter) {
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
  APITypes.OnCreateHeadshotSubscriptionVariables,
  APITypes.OnCreateHeadshotSubscription
>;
export const onUpdateHeadshot = /* GraphQL */ `subscription OnUpdateHeadshot($filter: ModelSubscriptionHeadshotFilterInput) {
  onUpdateHeadshot(filter: $filter) {
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
  APITypes.OnUpdateHeadshotSubscriptionVariables,
  APITypes.OnUpdateHeadshotSubscription
>;
export const onDeleteHeadshot = /* GraphQL */ `subscription OnDeleteHeadshot($filter: ModelSubscriptionHeadshotFilterInput) {
  onDeleteHeadshot(filter: $filter) {
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
  APITypes.OnDeleteHeadshotSubscriptionVariables,
  APITypes.OnDeleteHeadshotSubscription
>;
export const onCreateUserReferrals = /* GraphQL */ `subscription OnCreateUserReferrals(
  $filter: ModelSubscriptionUserReferralsFilterInput
) {
  onCreateUserReferrals(filter: $filter) {
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
      currentResident
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
` as GeneratedSubscription<
  APITypes.OnCreateUserReferralsSubscriptionVariables,
  APITypes.OnCreateUserReferralsSubscription
>;
export const onUpdateUserReferrals = /* GraphQL */ `subscription OnUpdateUserReferrals(
  $filter: ModelSubscriptionUserReferralsFilterInput
) {
  onUpdateUserReferrals(filter: $filter) {
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
      currentResident
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserReferralsSubscriptionVariables,
  APITypes.OnUpdateUserReferralsSubscription
>;
export const onDeleteUserReferrals = /* GraphQL */ `subscription OnDeleteUserReferrals(
  $filter: ModelSubscriptionUserReferralsFilterInput
) {
  onDeleteUserReferrals(filter: $filter) {
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
      currentResident
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserReferralsSubscriptionVariables,
  APITypes.OnDeleteUserReferralsSubscription
>;
