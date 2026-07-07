/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
          Referrals {
            nextToken
            __typename
          }
          FeatureFeedback {
            nextToken
            __typename
          }
          title
          bio
          firstName
          lastName
          isLeader
          featurePosition
          Headshot {
            id
            src
            alt
            imageTitle
            createdAt
            updatedAt
            __typename
          }
          link
          createdAt
          updatedAt
          userHeadshotId
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
          notes {
            nextToken
            __typename
          }
          users {
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
      nextToken
      __typename
    }
    FeatureFeedback {
      items {
        id
        userId
        featureFeedbackId
        user {
          id
          username
          email
          Referrals {
            nextToken
            __typename
          }
          FeatureFeedback {
            nextToken
            __typename
          }
          title
          bio
          firstName
          lastName
          isLeader
          featurePosition
          Headshot {
            id
            src
            alt
            imageTitle
            createdAt
            updatedAt
            __typename
          }
          link
          createdAt
          updatedAt
          userHeadshotId
          __typename
        }
        featureFeedback {
          id
          date
          layoutDesign
          functionality
          formFields
          featureRequest
          other
          isComplete
          users {
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
      nextToken
      __typename
    }
    title
    bio
    firstName
    lastName
    isLeader
    featurePosition
    Headshot {
      id
      src
      alt
      imageTitle
      createdAt
      updatedAt
      __typename
    }
    link
    createdAt
    updatedAt
    userHeadshotId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
            title
            bio
            firstName
            lastName
            isLeader
            featurePosition
            link
            createdAt
            updatedAt
            userHeadshotId
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
      FeatureFeedback {
        items {
          id
          userId
          featureFeedbackId
          user {
            id
            username
            email
            title
            bio
            firstName
            lastName
            isLeader
            featurePosition
            link
            createdAt
            updatedAt
            userHeadshotId
            __typename
          }
          featureFeedback {
            id
            date
            layoutDesign
            functionality
            formFields
            featureRequest
            other
            isComplete
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
      title
      bio
      firstName
      lastName
      isLeader
      featurePosition
      Headshot {
        id
        src
        alt
        imageTitle
        createdAt
        updatedAt
        __typename
      }
      link
      createdAt
      updatedAt
      userHeadshotId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getReferrals = /* GraphQL */ `query GetReferrals($id: ID!) {
  getReferrals(id: $id) {
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
    notes {
      items {
        id
        date
        author
        text
        createdAt
        updatedAt
        referralsNotesId
        __typename
      }
      nextToken
      __typename
    }
    users {
      items {
        id
        userId
        referralsId
        user {
          id
          username
          email
          Referrals {
            nextToken
            __typename
          }
          FeatureFeedback {
            nextToken
            __typename
          }
          title
          bio
          firstName
          lastName
          isLeader
          featurePosition
          Headshot {
            id
            src
            alt
            imageTitle
            createdAt
            updatedAt
            __typename
          }
          link
          createdAt
          updatedAt
          userHeadshotId
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
          notes {
            nextToken
            __typename
          }
          users {
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetReferralsQueryVariables,
  APITypes.GetReferralsQuery
>;
export const listReferrals = /* GraphQL */ `query ListReferrals(
  $filter: ModelReferralsFilterInput
  $limit: Int
  $nextToken: String
) {
  listReferrals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      notes {
        items {
          id
          date
          author
          text
          createdAt
          updatedAt
          referralsNotesId
          __typename
        }
        nextToken
        __typename
      }
      users {
        items {
          id
          userId
          referralsId
          user {
            id
            username
            email
            title
            bio
            firstName
            lastName
            isLeader
            featurePosition
            link
            createdAt
            updatedAt
            userHeadshotId
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReferralsQueryVariables,
  APITypes.ListReferralsQuery
>;
export const getNote = /* GraphQL */ `query GetNote($id: ID!) {
  getNote(id: $id) {
    id
    date
    author
    text
    createdAt
    updatedAt
    referralsNotesId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetNoteQueryVariables, APITypes.GetNoteQuery>;
export const listNotes = /* GraphQL */ `query ListNotes(
  $filter: ModelNoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      date
      author
      text
      createdAt
      updatedAt
      referralsNotesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListNotesQueryVariables, APITypes.ListNotesQuery>;
export const getIcon = /* GraphQL */ `query GetIcon($id: ID!) {
  getIcon(id: $id) {
    id
    alt
    src
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetIconQueryVariables, APITypes.GetIconQuery>;
export const listIcons = /* GraphQL */ `query ListIcons(
  $filter: ModelIconFilterInput
  $limit: Int
  $nextToken: String
) {
  listIcons(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      alt
      src
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListIconsQueryVariables, APITypes.ListIconsQuery>;
export const getServices = /* GraphQL */ `query GetServices($id: ID!) {
  getServices(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetServicesQueryVariables,
  APITypes.GetServicesQuery
>;
export const listServices = /* GraphQL */ `query ListServices(
  $filter: ModelServicesFilterInput
  $limit: Int
  $nextToken: String
) {
  listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListServicesQueryVariables,
  APITypes.ListServicesQuery
>;
export const getTeamMember = /* GraphQL */ `query GetTeamMember($id: ID!) {
  getTeamMember(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetTeamMemberQueryVariables,
  APITypes.GetTeamMemberQuery
>;
export const listTeamMembers = /* GraphQL */ `query ListTeamMembers(
  $filter: ModelTeamMemberFilterInput
  $limit: Int
  $nextToken: String
) {
  listTeamMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTeamMembersQueryVariables,
  APITypes.ListTeamMembersQuery
>;
export const getHeadshot = /* GraphQL */ `query GetHeadshot($id: ID!) {
  getHeadshot(id: $id) {
    id
    src
    alt
    imageTitle
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetHeadshotQueryVariables,
  APITypes.GetHeadshotQuery
>;
export const listHeadshots = /* GraphQL */ `query ListHeadshots(
  $filter: ModelHeadshotFilterInput
  $limit: Int
  $nextToken: String
) {
  listHeadshots(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      src
      alt
      imageTitle
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListHeadshotsQueryVariables,
  APITypes.ListHeadshotsQuery
>;
export const getFeatureFeedback = /* GraphQL */ `query GetFeatureFeedback($id: ID!) {
  getFeatureFeedback(id: $id) {
    id
    date
    layoutDesign
    functionality
    formFields
    featureRequest
    other
    isComplete
    users {
      items {
        id
        userId
        featureFeedbackId
        user {
          id
          username
          email
          Referrals {
            nextToken
            __typename
          }
          FeatureFeedback {
            nextToken
            __typename
          }
          title
          bio
          firstName
          lastName
          isLeader
          featurePosition
          Headshot {
            id
            src
            alt
            imageTitle
            createdAt
            updatedAt
            __typename
          }
          link
          createdAt
          updatedAt
          userHeadshotId
          __typename
        }
        featureFeedback {
          id
          date
          layoutDesign
          functionality
          formFields
          featureRequest
          other
          isComplete
          users {
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFeatureFeedbackQueryVariables,
  APITypes.GetFeatureFeedbackQuery
>;
export const listFeatureFeedbacks = /* GraphQL */ `query ListFeatureFeedbacks(
  $filter: ModelFeatureFeedbackFilterInput
  $limit: Int
  $nextToken: String
) {
  listFeatureFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      date
      layoutDesign
      functionality
      formFields
      featureRequest
      other
      isComplete
      users {
        items {
          id
          userId
          featureFeedbackId
          user {
            id
            username
            email
            title
            bio
            firstName
            lastName
            isLeader
            featurePosition
            link
            createdAt
            updatedAt
            userHeadshotId
            __typename
          }
          featureFeedback {
            id
            date
            layoutDesign
            functionality
            formFields
            featureRequest
            other
            isComplete
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFeatureFeedbacksQueryVariables,
  APITypes.ListFeatureFeedbacksQuery
>;
export const getUserReferrals = /* GraphQL */ `query GetUserReferrals($id: ID!) {
  getUserReferrals(id: $id) {
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
          user {
            id
            username
            email
            title
            bio
            firstName
            lastName
            isLeader
            featurePosition
            link
            createdAt
            updatedAt
            userHeadshotId
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
      FeatureFeedback {
        items {
          id
          userId
          featureFeedbackId
          user {
            id
            username
            email
            title
            bio
            firstName
            lastName
            isLeader
            featurePosition
            link
            createdAt
            updatedAt
            userHeadshotId
            __typename
          }
          featureFeedback {
            id
            date
            layoutDesign
            functionality
            formFields
            featureRequest
            other
            isComplete
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
      title
      bio
      firstName
      lastName
      isLeader
      featurePosition
      Headshot {
        id
        src
        alt
        imageTitle
        createdAt
        updatedAt
        __typename
      }
      link
      createdAt
      updatedAt
      userHeadshotId
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
      notes {
        items {
          id
          date
          author
          text
          createdAt
          updatedAt
          referralsNotesId
          __typename
        }
        nextToken
        __typename
      }
      users {
        items {
          id
          userId
          referralsId
          user {
            id
            username
            email
            title
            bio
            firstName
            lastName
            isLeader
            featurePosition
            link
            createdAt
            updatedAt
            userHeadshotId
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserReferralsQueryVariables,
  APITypes.GetUserReferralsQuery
>;
export const listUserReferrals = /* GraphQL */ `query ListUserReferrals(
  $filter: ModelUserReferralsFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserReferrals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        FeatureFeedback {
          items {
            id
            userId
            featureFeedbackId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        title
        bio
        firstName
        lastName
        isLeader
        featurePosition
        Headshot {
          id
          src
          alt
          imageTitle
          createdAt
          updatedAt
          __typename
        }
        link
        createdAt
        updatedAt
        userHeadshotId
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
        notes {
          items {
            id
            date
            author
            text
            createdAt
            updatedAt
            referralsNotesId
            __typename
          }
          nextToken
          __typename
        }
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserReferralsQueryVariables,
  APITypes.ListUserReferralsQuery
>;
export const userReferralsByUserId = /* GraphQL */ `query UserReferralsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserReferralsFilterInput
  $limit: Int
  $nextToken: String
) {
  userReferralsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
        FeatureFeedback {
          items {
            id
            userId
            featureFeedbackId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        title
        bio
        firstName
        lastName
        isLeader
        featurePosition
        Headshot {
          id
          src
          alt
          imageTitle
          createdAt
          updatedAt
          __typename
        }
        link
        createdAt
        updatedAt
        userHeadshotId
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
        notes {
          items {
            id
            date
            author
            text
            createdAt
            updatedAt
            referralsNotesId
            __typename
          }
          nextToken
          __typename
        }
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserReferralsByUserIdQueryVariables,
  APITypes.UserReferralsByUserIdQuery
>;
export const userReferralsByReferralsId = /* GraphQL */ `query UserReferralsByReferralsId(
  $referralsId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserReferralsFilterInput
  $limit: Int
  $nextToken: String
) {
  userReferralsByReferralsId(
    referralsId: $referralsId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
        FeatureFeedback {
          items {
            id
            userId
            featureFeedbackId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        title
        bio
        firstName
        lastName
        isLeader
        featurePosition
        Headshot {
          id
          src
          alt
          imageTitle
          createdAt
          updatedAt
          __typename
        }
        link
        createdAt
        updatedAt
        userHeadshotId
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
        notes {
          items {
            id
            date
            author
            text
            createdAt
            updatedAt
            referralsNotesId
            __typename
          }
          nextToken
          __typename
        }
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserReferralsByReferralsIdQueryVariables,
  APITypes.UserReferralsByReferralsIdQuery
>;
export const getUserFeatureFeedback = /* GraphQL */ `query GetUserFeatureFeedback($id: ID!) {
  getUserFeatureFeedback(id: $id) {
    id
    userId
    featureFeedbackId
    user {
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
            title
            bio
            firstName
            lastName
            isLeader
            featurePosition
            link
            createdAt
            updatedAt
            userHeadshotId
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
      FeatureFeedback {
        items {
          id
          userId
          featureFeedbackId
          user {
            id
            username
            email
            title
            bio
            firstName
            lastName
            isLeader
            featurePosition
            link
            createdAt
            updatedAt
            userHeadshotId
            __typename
          }
          featureFeedback {
            id
            date
            layoutDesign
            functionality
            formFields
            featureRequest
            other
            isComplete
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
      title
      bio
      firstName
      lastName
      isLeader
      featurePosition
      Headshot {
        id
        src
        alt
        imageTitle
        createdAt
        updatedAt
        __typename
      }
      link
      createdAt
      updatedAt
      userHeadshotId
      __typename
    }
    featureFeedback {
      id
      date
      layoutDesign
      functionality
      formFields
      featureRequest
      other
      isComplete
      users {
        items {
          id
          userId
          featureFeedbackId
          user {
            id
            username
            email
            title
            bio
            firstName
            lastName
            isLeader
            featurePosition
            link
            createdAt
            updatedAt
            userHeadshotId
            __typename
          }
          featureFeedback {
            id
            date
            layoutDesign
            functionality
            formFields
            featureRequest
            other
            isComplete
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserFeatureFeedbackQueryVariables,
  APITypes.GetUserFeatureFeedbackQuery
>;
export const listUserFeatureFeedbacks = /* GraphQL */ `query ListUserFeatureFeedbacks(
  $filter: ModelUserFeatureFeedbackFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserFeatureFeedbacks(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      featureFeedbackId
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
        FeatureFeedback {
          items {
            id
            userId
            featureFeedbackId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        title
        bio
        firstName
        lastName
        isLeader
        featurePosition
        Headshot {
          id
          src
          alt
          imageTitle
          createdAt
          updatedAt
          __typename
        }
        link
        createdAt
        updatedAt
        userHeadshotId
        __typename
      }
      featureFeedback {
        id
        date
        layoutDesign
        functionality
        formFields
        featureRequest
        other
        isComplete
        users {
          items {
            id
            userId
            featureFeedbackId
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserFeatureFeedbacksQueryVariables,
  APITypes.ListUserFeatureFeedbacksQuery
>;
export const userFeatureFeedbacksByUserId = /* GraphQL */ `query UserFeatureFeedbacksByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFeatureFeedbackFilterInput
  $limit: Int
  $nextToken: String
) {
  userFeatureFeedbacksByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      featureFeedbackId
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
        FeatureFeedback {
          items {
            id
            userId
            featureFeedbackId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        title
        bio
        firstName
        lastName
        isLeader
        featurePosition
        Headshot {
          id
          src
          alt
          imageTitle
          createdAt
          updatedAt
          __typename
        }
        link
        createdAt
        updatedAt
        userHeadshotId
        __typename
      }
      featureFeedback {
        id
        date
        layoutDesign
        functionality
        formFields
        featureRequest
        other
        isComplete
        users {
          items {
            id
            userId
            featureFeedbackId
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserFeatureFeedbacksByUserIdQueryVariables,
  APITypes.UserFeatureFeedbacksByUserIdQuery
>;
export const userFeatureFeedbacksByFeatureFeedbackId = /* GraphQL */ `query UserFeatureFeedbacksByFeatureFeedbackId(
  $featureFeedbackId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFeatureFeedbackFilterInput
  $limit: Int
  $nextToken: String
) {
  userFeatureFeedbacksByFeatureFeedbackId(
    featureFeedbackId: $featureFeedbackId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      featureFeedbackId
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
        FeatureFeedback {
          items {
            id
            userId
            featureFeedbackId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        title
        bio
        firstName
        lastName
        isLeader
        featurePosition
        Headshot {
          id
          src
          alt
          imageTitle
          createdAt
          updatedAt
          __typename
        }
        link
        createdAt
        updatedAt
        userHeadshotId
        __typename
      }
      featureFeedback {
        id
        date
        layoutDesign
        functionality
        formFields
        featureRequest
        other
        isComplete
        users {
          items {
            id
            userId
            featureFeedbackId
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserFeatureFeedbacksByFeatureFeedbackIdQueryVariables,
  APITypes.UserFeatureFeedbacksByFeatureFeedbackIdQuery
>;
