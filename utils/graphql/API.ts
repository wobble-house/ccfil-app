/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username?: string | null,
  email?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  username?: string | null,
  email?: string | null,
  Referrals?: ModelUserReferralsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelUserReferralsConnection = {
  __typename: "ModelUserReferralsConnection",
  items:  Array<UserReferrals | null >,
  nextToken?: string | null,
};

export type UserReferrals = {
  __typename: "UserReferrals",
  id: string,
  userId: string,
  referralsId: string,
  user: User,
  referrals: Referrals,
  createdAt: string,
  updatedAt: string,
};

export type Referrals = {
  __typename: "Referrals",
  id: string,
  date?: string | null,
  source?: string | null,
  name?: string | null,
  followUp?: string | null,
  currentResident?: boolean | null,
  DOADate?: string | null,
  reasonForDecline?: string | null,
  howDidYouHearAboutUs?: string | null,
  assistanceProvided?: string | null,
  notes?: ModelNoteConnection | null,
  users?: ModelUserReferralsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelNoteConnection = {
  __typename: "ModelNoteConnection",
  items:  Array<Note | null >,
  nextToken?: string | null,
};

export type Note = {
  __typename: "Note",
  id: string,
  date?: string | null,
  author?: string | null,
  text?: string | null,
  createdAt: string,
  updatedAt: string,
  referralsNotesId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateReferralsInput = {
  id?: string | null,
  date?: string | null,
  source?: string | null,
  name?: string | null,
  followUp?: string | null,
  currentResident?: boolean | null,
  DOADate?: string | null,
  reasonForDecline?: string | null,
  howDidYouHearAboutUs?: string | null,
  assistanceProvided?: string | null,
};

export type ModelReferralsConditionInput = {
  date?: ModelStringInput | null,
  source?: ModelStringInput | null,
  name?: ModelStringInput | null,
  followUp?: ModelStringInput | null,
  currentResident?: ModelBooleanInput | null,
  DOADate?: ModelStringInput | null,
  reasonForDecline?: ModelStringInput | null,
  howDidYouHearAboutUs?: ModelStringInput | null,
  assistanceProvided?: ModelStringInput | null,
  and?: Array< ModelReferralsConditionInput | null > | null,
  or?: Array< ModelReferralsConditionInput | null > | null,
  not?: ModelReferralsConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateReferralsInput = {
  id: string,
  date?: string | null,
  source?: string | null,
  name?: string | null,
  followUp?: string | null,
  currentResident?: boolean | null,
  DOADate?: string | null,
  reasonForDecline?: string | null,
  howDidYouHearAboutUs?: string | null,
  assistanceProvided?: string | null,
};

export type DeleteReferralsInput = {
  id: string,
};

export type CreateNoteInput = {
  id?: string | null,
  date?: string | null,
  author?: string | null,
  text?: string | null,
  referralsNotesId?: string | null,
};

export type ModelNoteConditionInput = {
  date?: ModelStringInput | null,
  author?: ModelStringInput | null,
  text?: ModelStringInput | null,
  and?: Array< ModelNoteConditionInput | null > | null,
  or?: Array< ModelNoteConditionInput | null > | null,
  not?: ModelNoteConditionInput | null,
  referralsNotesId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateNoteInput = {
  id: string,
  date?: string | null,
  author?: string | null,
  text?: string | null,
  referralsNotesId?: string | null,
};

export type DeleteNoteInput = {
  id: string,
};

export type CreateIconInput = {
  id?: string | null,
  alt?: string | null,
  src?: string | null,
};

export type ModelIconConditionInput = {
  alt?: ModelStringInput | null,
  src?: ModelStringInput | null,
  and?: Array< ModelIconConditionInput | null > | null,
  or?: Array< ModelIconConditionInput | null > | null,
  not?: ModelIconConditionInput | null,
};

export type Icon = {
  __typename: "Icon",
  id: string,
  alt?: string | null,
  src?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateIconInput = {
  id: string,
  alt?: string | null,
  src?: string | null,
};

export type DeleteIconInput = {
  id: string,
};

export type CreateServicesInput = {
  id?: string | null,
  serviceTitle?: string | null,
  serviceBodyText?: string | null,
  servicesIconId?: string | null,
};

export type ModelServicesConditionInput = {
  serviceTitle?: ModelStringInput | null,
  serviceBodyText?: ModelStringInput | null,
  and?: Array< ModelServicesConditionInput | null > | null,
  or?: Array< ModelServicesConditionInput | null > | null,
  not?: ModelServicesConditionInput | null,
  servicesIconId?: ModelIDInput | null,
};

export type Services = {
  __typename: "Services",
  id: string,
  serviceTitle?: string | null,
  serviceBodyText?: string | null,
  Icon?: Icon | null,
  createdAt: string,
  updatedAt: string,
  servicesIconId?: string | null,
};

export type UpdateServicesInput = {
  id: string,
  serviceTitle?: string | null,
  serviceBodyText?: string | null,
  servicesIconId?: string | null,
};

export type DeleteServicesInput = {
  id: string,
};

export type CreateTeamMemberInput = {
  id?: string | null,
  firstName: string,
  lastName?: string | null,
  bio?: string | null,
  link?: string | null,
  title?: string | null,
  isLeader?: boolean | null,
  featurePosition: number,
  teamMemberImageId?: string | null,
};

export type ModelTeamMemberConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  link?: ModelStringInput | null,
  title?: ModelStringInput | null,
  isLeader?: ModelBooleanInput | null,
  featurePosition?: ModelIntInput | null,
  and?: Array< ModelTeamMemberConditionInput | null > | null,
  or?: Array< ModelTeamMemberConditionInput | null > | null,
  not?: ModelTeamMemberConditionInput | null,
  teamMemberImageId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type TeamMember = {
  __typename: "TeamMember",
  id: string,
  firstName: string,
  lastName?: string | null,
  bio?: string | null,
  link?: string | null,
  title?: string | null,
  Image?: Headshot | null,
  isLeader?: boolean | null,
  featurePosition: number,
  createdAt: string,
  updatedAt: string,
  teamMemberImageId?: string | null,
};

export type Headshot = {
  __typename: "Headshot",
  id: string,
  src: string,
  alt: string,
  imageTitle?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTeamMemberInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  bio?: string | null,
  link?: string | null,
  title?: string | null,
  isLeader?: boolean | null,
  featurePosition?: number | null,
  teamMemberImageId?: string | null,
};

export type DeleteTeamMemberInput = {
  id: string,
};

export type CreateHeadshotInput = {
  id?: string | null,
  src: string,
  alt: string,
  imageTitle?: string | null,
};

export type ModelHeadshotConditionInput = {
  src?: ModelStringInput | null,
  alt?: ModelStringInput | null,
  imageTitle?: ModelStringInput | null,
  and?: Array< ModelHeadshotConditionInput | null > | null,
  or?: Array< ModelHeadshotConditionInput | null > | null,
  not?: ModelHeadshotConditionInput | null,
};

export type UpdateHeadshotInput = {
  id: string,
  src?: string | null,
  alt?: string | null,
  imageTitle?: string | null,
};

export type DeleteHeadshotInput = {
  id: string,
};

export type CreateUserReferralsInput = {
  id?: string | null,
  userId: string,
  referralsId: string,
};

export type ModelUserReferralsConditionInput = {
  userId?: ModelIDInput | null,
  referralsId?: ModelIDInput | null,
  and?: Array< ModelUserReferralsConditionInput | null > | null,
  or?: Array< ModelUserReferralsConditionInput | null > | null,
  not?: ModelUserReferralsConditionInput | null,
};

export type UpdateUserReferralsInput = {
  id: string,
  userId?: string | null,
  referralsId?: string | null,
};

export type DeleteUserReferralsInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelReferralsFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  source?: ModelStringInput | null,
  name?: ModelStringInput | null,
  followUp?: ModelStringInput | null,
  currentResident?: ModelBooleanInput | null,
  DOADate?: ModelStringInput | null,
  reasonForDecline?: ModelStringInput | null,
  howDidYouHearAboutUs?: ModelStringInput | null,
  assistanceProvided?: ModelStringInput | null,
  and?: Array< ModelReferralsFilterInput | null > | null,
  or?: Array< ModelReferralsFilterInput | null > | null,
  not?: ModelReferralsFilterInput | null,
};

export type ModelReferralsConnection = {
  __typename: "ModelReferralsConnection",
  items:  Array<Referrals | null >,
  nextToken?: string | null,
};

export type ModelNoteFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  author?: ModelStringInput | null,
  text?: ModelStringInput | null,
  and?: Array< ModelNoteFilterInput | null > | null,
  or?: Array< ModelNoteFilterInput | null > | null,
  not?: ModelNoteFilterInput | null,
  referralsNotesId?: ModelIDInput | null,
};

export type ModelIconFilterInput = {
  id?: ModelIDInput | null,
  alt?: ModelStringInput | null,
  src?: ModelStringInput | null,
  and?: Array< ModelIconFilterInput | null > | null,
  or?: Array< ModelIconFilterInput | null > | null,
  not?: ModelIconFilterInput | null,
};

export type ModelIconConnection = {
  __typename: "ModelIconConnection",
  items:  Array<Icon | null >,
  nextToken?: string | null,
};

export type ModelServicesFilterInput = {
  id?: ModelIDInput | null,
  serviceTitle?: ModelStringInput | null,
  serviceBodyText?: ModelStringInput | null,
  and?: Array< ModelServicesFilterInput | null > | null,
  or?: Array< ModelServicesFilterInput | null > | null,
  not?: ModelServicesFilterInput | null,
  servicesIconId?: ModelIDInput | null,
};

export type ModelServicesConnection = {
  __typename: "ModelServicesConnection",
  items:  Array<Services | null >,
  nextToken?: string | null,
};

export type ModelTeamMemberFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  link?: ModelStringInput | null,
  title?: ModelStringInput | null,
  isLeader?: ModelBooleanInput | null,
  featurePosition?: ModelIntInput | null,
  and?: Array< ModelTeamMemberFilterInput | null > | null,
  or?: Array< ModelTeamMemberFilterInput | null > | null,
  not?: ModelTeamMemberFilterInput | null,
  teamMemberImageId?: ModelIDInput | null,
};

export type ModelTeamMemberConnection = {
  __typename: "ModelTeamMemberConnection",
  items:  Array<TeamMember | null >,
  nextToken?: string | null,
};

export type ModelHeadshotFilterInput = {
  id?: ModelIDInput | null,
  src?: ModelStringInput | null,
  alt?: ModelStringInput | null,
  imageTitle?: ModelStringInput | null,
  and?: Array< ModelHeadshotFilterInput | null > | null,
  or?: Array< ModelHeadshotFilterInput | null > | null,
  not?: ModelHeadshotFilterInput | null,
};

export type ModelHeadshotConnection = {
  __typename: "ModelHeadshotConnection",
  items:  Array<Headshot | null >,
  nextToken?: string | null,
};

export type ModelUserReferralsFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  referralsId?: ModelIDInput | null,
  and?: Array< ModelUserReferralsFilterInput | null > | null,
  or?: Array< ModelUserReferralsFilterInput | null > | null,
  not?: ModelUserReferralsFilterInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionReferralsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  source?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  followUp?: ModelSubscriptionStringInput | null,
  currentResident?: ModelSubscriptionBooleanInput | null,
  DOADate?: ModelSubscriptionStringInput | null,
  reasonForDecline?: ModelSubscriptionStringInput | null,
  howDidYouHearAboutUs?: ModelSubscriptionStringInput | null,
  assistanceProvided?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReferralsFilterInput | null > | null,
  or?: Array< ModelSubscriptionReferralsFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionNoteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  author?: ModelSubscriptionStringInput | null,
  text?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNoteFilterInput | null > | null,
  or?: Array< ModelSubscriptionNoteFilterInput | null > | null,
};

export type ModelSubscriptionIconFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  alt?: ModelSubscriptionStringInput | null,
  src?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionIconFilterInput | null > | null,
  or?: Array< ModelSubscriptionIconFilterInput | null > | null,
};

export type ModelSubscriptionServicesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  serviceTitle?: ModelSubscriptionStringInput | null,
  serviceBodyText?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionServicesFilterInput | null > | null,
  or?: Array< ModelSubscriptionServicesFilterInput | null > | null,
};

export type ModelSubscriptionTeamMemberFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  link?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  isLeader?: ModelSubscriptionBooleanInput | null,
  featurePosition?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionTeamMemberFilterInput | null > | null,
  or?: Array< ModelSubscriptionTeamMemberFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionHeadshotFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  src?: ModelSubscriptionStringInput | null,
  alt?: ModelSubscriptionStringInput | null,
  imageTitle?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionHeadshotFilterInput | null > | null,
  or?: Array< ModelSubscriptionHeadshotFilterInput | null > | null,
};

export type ModelSubscriptionUserReferralsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  referralsId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserReferralsFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserReferralsFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    email?: string | null,
    Referrals?:  {
      __typename: "ModelUserReferralsConnection",
      items:  Array< {
        __typename: "UserReferrals",
        id: string,
        userId: string,
        referralsId: string,
        user:  {
          __typename: "User",
          id: string,
          username?: string | null,
          email?: string | null,
          Referrals?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        referrals:  {
          __typename: "Referrals",
          id: string,
          date?: string | null,
          source?: string | null,
          name?: string | null,
          followUp?: string | null,
          currentResident?: boolean | null,
          DOADate?: string | null,
          reasonForDecline?: string | null,
          howDidYouHearAboutUs?: string | null,
          assistanceProvided?: string | null,
          notes?:  {
            __typename: "ModelNoteConnection",
            nextToken?: string | null,
          } | null,
          users?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    email?: string | null,
    Referrals?:  {
      __typename: "ModelUserReferralsConnection",
      items:  Array< {
        __typename: "UserReferrals",
        id: string,
        userId: string,
        referralsId: string,
        user:  {
          __typename: "User",
          id: string,
          username?: string | null,
          email?: string | null,
          Referrals?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        referrals:  {
          __typename: "Referrals",
          id: string,
          date?: string | null,
          source?: string | null,
          name?: string | null,
          followUp?: string | null,
          currentResident?: boolean | null,
          DOADate?: string | null,
          reasonForDecline?: string | null,
          howDidYouHearAboutUs?: string | null,
          assistanceProvided?: string | null,
          notes?:  {
            __typename: "ModelNoteConnection",
            nextToken?: string | null,
          } | null,
          users?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    email?: string | null,
    Referrals?:  {
      __typename: "ModelUserReferralsConnection",
      items:  Array< {
        __typename: "UserReferrals",
        id: string,
        userId: string,
        referralsId: string,
        user:  {
          __typename: "User",
          id: string,
          username?: string | null,
          email?: string | null,
          Referrals?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        referrals:  {
          __typename: "Referrals",
          id: string,
          date?: string | null,
          source?: string | null,
          name?: string | null,
          followUp?: string | null,
          currentResident?: boolean | null,
          DOADate?: string | null,
          reasonForDecline?: string | null,
          howDidYouHearAboutUs?: string | null,
          assistanceProvided?: string | null,
          notes?:  {
            __typename: "ModelNoteConnection",
            nextToken?: string | null,
          } | null,
          users?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateReferralsMutationVariables = {
  input: CreateReferralsInput,
  condition?: ModelReferralsConditionInput | null,
};

export type CreateReferralsMutation = {
  createReferrals?:  {
    __typename: "Referrals",
    id: string,
    date?: string | null,
    source?: string | null,
    name?: string | null,
    followUp?: string | null,
    currentResident?: boolean | null,
    DOADate?: string | null,
    reasonForDecline?: string | null,
    howDidYouHearAboutUs?: string | null,
    assistanceProvided?: string | null,
    notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        date?: string | null,
        author?: string | null,
        text?: string | null,
        createdAt: string,
        updatedAt: string,
        referralsNotesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserReferralsConnection",
      items:  Array< {
        __typename: "UserReferrals",
        id: string,
        userId: string,
        referralsId: string,
        user:  {
          __typename: "User",
          id: string,
          username?: string | null,
          email?: string | null,
          Referrals?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        referrals:  {
          __typename: "Referrals",
          id: string,
          date?: string | null,
          source?: string | null,
          name?: string | null,
          followUp?: string | null,
          currentResident?: boolean | null,
          DOADate?: string | null,
          reasonForDecline?: string | null,
          howDidYouHearAboutUs?: string | null,
          assistanceProvided?: string | null,
          notes?:  {
            __typename: "ModelNoteConnection",
            nextToken?: string | null,
          } | null,
          users?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReferralsMutationVariables = {
  input: UpdateReferralsInput,
  condition?: ModelReferralsConditionInput | null,
};

export type UpdateReferralsMutation = {
  updateReferrals?:  {
    __typename: "Referrals",
    id: string,
    date?: string | null,
    source?: string | null,
    name?: string | null,
    followUp?: string | null,
    currentResident?: boolean | null,
    DOADate?: string | null,
    reasonForDecline?: string | null,
    howDidYouHearAboutUs?: string | null,
    assistanceProvided?: string | null,
    notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        date?: string | null,
        author?: string | null,
        text?: string | null,
        createdAt: string,
        updatedAt: string,
        referralsNotesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserReferralsConnection",
      items:  Array< {
        __typename: "UserReferrals",
        id: string,
        userId: string,
        referralsId: string,
        user:  {
          __typename: "User",
          id: string,
          username?: string | null,
          email?: string | null,
          Referrals?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        referrals:  {
          __typename: "Referrals",
          id: string,
          date?: string | null,
          source?: string | null,
          name?: string | null,
          followUp?: string | null,
          currentResident?: boolean | null,
          DOADate?: string | null,
          reasonForDecline?: string | null,
          howDidYouHearAboutUs?: string | null,
          assistanceProvided?: string | null,
          notes?:  {
            __typename: "ModelNoteConnection",
            nextToken?: string | null,
          } | null,
          users?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReferralsMutationVariables = {
  input: DeleteReferralsInput,
  condition?: ModelReferralsConditionInput | null,
};

export type DeleteReferralsMutation = {
  deleteReferrals?:  {
    __typename: "Referrals",
    id: string,
    date?: string | null,
    source?: string | null,
    name?: string | null,
    followUp?: string | null,
    currentResident?: boolean | null,
    DOADate?: string | null,
    reasonForDecline?: string | null,
    howDidYouHearAboutUs?: string | null,
    assistanceProvided?: string | null,
    notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        date?: string | null,
        author?: string | null,
        text?: string | null,
        createdAt: string,
        updatedAt: string,
        referralsNotesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserReferralsConnection",
      items:  Array< {
        __typename: "UserReferrals",
        id: string,
        userId: string,
        referralsId: string,
        user:  {
          __typename: "User",
          id: string,
          username?: string | null,
          email?: string | null,
          Referrals?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        referrals:  {
          __typename: "Referrals",
          id: string,
          date?: string | null,
          source?: string | null,
          name?: string | null,
          followUp?: string | null,
          currentResident?: boolean | null,
          DOADate?: string | null,
          reasonForDecline?: string | null,
          howDidYouHearAboutUs?: string | null,
          assistanceProvided?: string | null,
          notes?:  {
            __typename: "ModelNoteConnection",
            nextToken?: string | null,
          } | null,
          users?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNoteMutationVariables = {
  input: CreateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type CreateNoteMutation = {
  createNote?:  {
    __typename: "Note",
    id: string,
    date?: string | null,
    author?: string | null,
    text?: string | null,
    createdAt: string,
    updatedAt: string,
    referralsNotesId?: string | null,
  } | null,
};

export type UpdateNoteMutationVariables = {
  input: UpdateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type UpdateNoteMutation = {
  updateNote?:  {
    __typename: "Note",
    id: string,
    date?: string | null,
    author?: string | null,
    text?: string | null,
    createdAt: string,
    updatedAt: string,
    referralsNotesId?: string | null,
  } | null,
};

export type DeleteNoteMutationVariables = {
  input: DeleteNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type DeleteNoteMutation = {
  deleteNote?:  {
    __typename: "Note",
    id: string,
    date?: string | null,
    author?: string | null,
    text?: string | null,
    createdAt: string,
    updatedAt: string,
    referralsNotesId?: string | null,
  } | null,
};

export type CreateIconMutationVariables = {
  input: CreateIconInput,
  condition?: ModelIconConditionInput | null,
};

export type CreateIconMutation = {
  createIcon?:  {
    __typename: "Icon",
    id: string,
    alt?: string | null,
    src?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateIconMutationVariables = {
  input: UpdateIconInput,
  condition?: ModelIconConditionInput | null,
};

export type UpdateIconMutation = {
  updateIcon?:  {
    __typename: "Icon",
    id: string,
    alt?: string | null,
    src?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteIconMutationVariables = {
  input: DeleteIconInput,
  condition?: ModelIconConditionInput | null,
};

export type DeleteIconMutation = {
  deleteIcon?:  {
    __typename: "Icon",
    id: string,
    alt?: string | null,
    src?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateServicesMutationVariables = {
  input: CreateServicesInput,
  condition?: ModelServicesConditionInput | null,
};

export type CreateServicesMutation = {
  createServices?:  {
    __typename: "Services",
    id: string,
    serviceTitle?: string | null,
    serviceBodyText?: string | null,
    Icon?:  {
      __typename: "Icon",
      id: string,
      alt?: string | null,
      src?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    servicesIconId?: string | null,
  } | null,
};

export type UpdateServicesMutationVariables = {
  input: UpdateServicesInput,
  condition?: ModelServicesConditionInput | null,
};

export type UpdateServicesMutation = {
  updateServices?:  {
    __typename: "Services",
    id: string,
    serviceTitle?: string | null,
    serviceBodyText?: string | null,
    Icon?:  {
      __typename: "Icon",
      id: string,
      alt?: string | null,
      src?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    servicesIconId?: string | null,
  } | null,
};

export type DeleteServicesMutationVariables = {
  input: DeleteServicesInput,
  condition?: ModelServicesConditionInput | null,
};

export type DeleteServicesMutation = {
  deleteServices?:  {
    __typename: "Services",
    id: string,
    serviceTitle?: string | null,
    serviceBodyText?: string | null,
    Icon?:  {
      __typename: "Icon",
      id: string,
      alt?: string | null,
      src?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    servicesIconId?: string | null,
  } | null,
};

export type CreateTeamMemberMutationVariables = {
  input: CreateTeamMemberInput,
  condition?: ModelTeamMemberConditionInput | null,
};

export type CreateTeamMemberMutation = {
  createTeamMember?:  {
    __typename: "TeamMember",
    id: string,
    firstName: string,
    lastName?: string | null,
    bio?: string | null,
    link?: string | null,
    title?: string | null,
    Image?:  {
      __typename: "Headshot",
      id: string,
      src: string,
      alt: string,
      imageTitle?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    isLeader?: boolean | null,
    featurePosition: number,
    createdAt: string,
    updatedAt: string,
    teamMemberImageId?: string | null,
  } | null,
};

export type UpdateTeamMemberMutationVariables = {
  input: UpdateTeamMemberInput,
  condition?: ModelTeamMemberConditionInput | null,
};

export type UpdateTeamMemberMutation = {
  updateTeamMember?:  {
    __typename: "TeamMember",
    id: string,
    firstName: string,
    lastName?: string | null,
    bio?: string | null,
    link?: string | null,
    title?: string | null,
    Image?:  {
      __typename: "Headshot",
      id: string,
      src: string,
      alt: string,
      imageTitle?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    isLeader?: boolean | null,
    featurePosition: number,
    createdAt: string,
    updatedAt: string,
    teamMemberImageId?: string | null,
  } | null,
};

export type DeleteTeamMemberMutationVariables = {
  input: DeleteTeamMemberInput,
  condition?: ModelTeamMemberConditionInput | null,
};

export type DeleteTeamMemberMutation = {
  deleteTeamMember?:  {
    __typename: "TeamMember",
    id: string,
    firstName: string,
    lastName?: string | null,
    bio?: string | null,
    link?: string | null,
    title?: string | null,
    Image?:  {
      __typename: "Headshot",
      id: string,
      src: string,
      alt: string,
      imageTitle?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    isLeader?: boolean | null,
    featurePosition: number,
    createdAt: string,
    updatedAt: string,
    teamMemberImageId?: string | null,
  } | null,
};

export type CreateHeadshotMutationVariables = {
  input: CreateHeadshotInput,
  condition?: ModelHeadshotConditionInput | null,
};

export type CreateHeadshotMutation = {
  createHeadshot?:  {
    __typename: "Headshot",
    id: string,
    src: string,
    alt: string,
    imageTitle?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateHeadshotMutationVariables = {
  input: UpdateHeadshotInput,
  condition?: ModelHeadshotConditionInput | null,
};

export type UpdateHeadshotMutation = {
  updateHeadshot?:  {
    __typename: "Headshot",
    id: string,
    src: string,
    alt: string,
    imageTitle?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteHeadshotMutationVariables = {
  input: DeleteHeadshotInput,
  condition?: ModelHeadshotConditionInput | null,
};

export type DeleteHeadshotMutation = {
  deleteHeadshot?:  {
    __typename: "Headshot",
    id: string,
    src: string,
    alt: string,
    imageTitle?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserReferralsMutationVariables = {
  input: CreateUserReferralsInput,
  condition?: ModelUserReferralsConditionInput | null,
};

export type CreateUserReferralsMutation = {
  createUserReferrals?:  {
    __typename: "UserReferrals",
    id: string,
    userId: string,
    referralsId: string,
    user:  {
      __typename: "User",
      id: string,
      username?: string | null,
      email?: string | null,
      Referrals?:  {
        __typename: "ModelUserReferralsConnection",
        items:  Array< {
          __typename: "UserReferrals",
          id: string,
          userId: string,
          referralsId: string,
          user:  {
            __typename: "User",
            id: string,
            username?: string | null,
            email?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          referrals:  {
            __typename: "Referrals",
            id: string,
            date?: string | null,
            source?: string | null,
            name?: string | null,
            followUp?: string | null,
            currentResident?: boolean | null,
            DOADate?: string | null,
            reasonForDecline?: string | null,
            howDidYouHearAboutUs?: string | null,
            assistanceProvided?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    referrals:  {
      __typename: "Referrals",
      id: string,
      date?: string | null,
      source?: string | null,
      name?: string | null,
      followUp?: string | null,
      currentResident?: boolean | null,
      DOADate?: string | null,
      reasonForDecline?: string | null,
      howDidYouHearAboutUs?: string | null,
      assistanceProvided?: string | null,
      notes?:  {
        __typename: "ModelNoteConnection",
        items:  Array< {
          __typename: "Note",
          id: string,
          date?: string | null,
          author?: string | null,
          text?: string | null,
          createdAt: string,
          updatedAt: string,
          referralsNotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserReferralsConnection",
        items:  Array< {
          __typename: "UserReferrals",
          id: string,
          userId: string,
          referralsId: string,
          user:  {
            __typename: "User",
            id: string,
            username?: string | null,
            email?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          referrals:  {
            __typename: "Referrals",
            id: string,
            date?: string | null,
            source?: string | null,
            name?: string | null,
            followUp?: string | null,
            currentResident?: boolean | null,
            DOADate?: string | null,
            reasonForDecline?: string | null,
            howDidYouHearAboutUs?: string | null,
            assistanceProvided?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserReferralsMutationVariables = {
  input: UpdateUserReferralsInput,
  condition?: ModelUserReferralsConditionInput | null,
};

export type UpdateUserReferralsMutation = {
  updateUserReferrals?:  {
    __typename: "UserReferrals",
    id: string,
    userId: string,
    referralsId: string,
    user:  {
      __typename: "User",
      id: string,
      username?: string | null,
      email?: string | null,
      Referrals?:  {
        __typename: "ModelUserReferralsConnection",
        items:  Array< {
          __typename: "UserReferrals",
          id: string,
          userId: string,
          referralsId: string,
          user:  {
            __typename: "User",
            id: string,
            username?: string | null,
            email?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          referrals:  {
            __typename: "Referrals",
            id: string,
            date?: string | null,
            source?: string | null,
            name?: string | null,
            followUp?: string | null,
            currentResident?: boolean | null,
            DOADate?: string | null,
            reasonForDecline?: string | null,
            howDidYouHearAboutUs?: string | null,
            assistanceProvided?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    referrals:  {
      __typename: "Referrals",
      id: string,
      date?: string | null,
      source?: string | null,
      name?: string | null,
      followUp?: string | null,
      currentResident?: boolean | null,
      DOADate?: string | null,
      reasonForDecline?: string | null,
      howDidYouHearAboutUs?: string | null,
      assistanceProvided?: string | null,
      notes?:  {
        __typename: "ModelNoteConnection",
        items:  Array< {
          __typename: "Note",
          id: string,
          date?: string | null,
          author?: string | null,
          text?: string | null,
          createdAt: string,
          updatedAt: string,
          referralsNotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserReferralsConnection",
        items:  Array< {
          __typename: "UserReferrals",
          id: string,
          userId: string,
          referralsId: string,
          user:  {
            __typename: "User",
            id: string,
            username?: string | null,
            email?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          referrals:  {
            __typename: "Referrals",
            id: string,
            date?: string | null,
            source?: string | null,
            name?: string | null,
            followUp?: string | null,
            currentResident?: boolean | null,
            DOADate?: string | null,
            reasonForDecline?: string | null,
            howDidYouHearAboutUs?: string | null,
            assistanceProvided?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserReferralsMutationVariables = {
  input: DeleteUserReferralsInput,
  condition?: ModelUserReferralsConditionInput | null,
};

export type DeleteUserReferralsMutation = {
  deleteUserReferrals?:  {
    __typename: "UserReferrals",
    id: string,
    userId: string,
    referralsId: string,
    user:  {
      __typename: "User",
      id: string,
      username?: string | null,
      email?: string | null,
      Referrals?:  {
        __typename: "ModelUserReferralsConnection",
        items:  Array< {
          __typename: "UserReferrals",
          id: string,
          userId: string,
          referralsId: string,
          user:  {
            __typename: "User",
            id: string,
            username?: string | null,
            email?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          referrals:  {
            __typename: "Referrals",
            id: string,
            date?: string | null,
            source?: string | null,
            name?: string | null,
            followUp?: string | null,
            currentResident?: boolean | null,
            DOADate?: string | null,
            reasonForDecline?: string | null,
            howDidYouHearAboutUs?: string | null,
            assistanceProvided?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    referrals:  {
      __typename: "Referrals",
      id: string,
      date?: string | null,
      source?: string | null,
      name?: string | null,
      followUp?: string | null,
      currentResident?: boolean | null,
      DOADate?: string | null,
      reasonForDecline?: string | null,
      howDidYouHearAboutUs?: string | null,
      assistanceProvided?: string | null,
      notes?:  {
        __typename: "ModelNoteConnection",
        items:  Array< {
          __typename: "Note",
          id: string,
          date?: string | null,
          author?: string | null,
          text?: string | null,
          createdAt: string,
          updatedAt: string,
          referralsNotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserReferralsConnection",
        items:  Array< {
          __typename: "UserReferrals",
          id: string,
          userId: string,
          referralsId: string,
          user:  {
            __typename: "User",
            id: string,
            username?: string | null,
            email?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          referrals:  {
            __typename: "Referrals",
            id: string,
            date?: string | null,
            source?: string | null,
            name?: string | null,
            followUp?: string | null,
            currentResident?: boolean | null,
            DOADate?: string | null,
            reasonForDecline?: string | null,
            howDidYouHearAboutUs?: string | null,
            assistanceProvided?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    email?: string | null,
    Referrals?:  {
      __typename: "ModelUserReferralsConnection",
      items:  Array< {
        __typename: "UserReferrals",
        id: string,
        userId: string,
        referralsId: string,
        user:  {
          __typename: "User",
          id: string,
          username?: string | null,
          email?: string | null,
          Referrals?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        referrals:  {
          __typename: "Referrals",
          id: string,
          date?: string | null,
          source?: string | null,
          name?: string | null,
          followUp?: string | null,
          currentResident?: boolean | null,
          DOADate?: string | null,
          reasonForDecline?: string | null,
          howDidYouHearAboutUs?: string | null,
          assistanceProvided?: string | null,
          notes?:  {
            __typename: "ModelNoteConnection",
            nextToken?: string | null,
          } | null,
          users?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  id?: string | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username?: string | null,
      email?: string | null,
      Referrals?:  {
        __typename: "ModelUserReferralsConnection",
        items:  Array< {
          __typename: "UserReferrals",
          id: string,
          userId: string,
          referralsId: string,
          user:  {
            __typename: "User",
            id: string,
            username?: string | null,
            email?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          referrals:  {
            __typename: "Referrals",
            id: string,
            date?: string | null,
            source?: string | null,
            name?: string | null,
            followUp?: string | null,
            currentResident?: boolean | null,
            DOADate?: string | null,
            reasonForDecline?: string | null,
            howDidYouHearAboutUs?: string | null,
            assistanceProvided?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReferralsQueryVariables = {
  id: string,
};

export type GetReferralsQuery = {
  getReferrals?:  {
    __typename: "Referrals",
    id: string,
    date?: string | null,
    source?: string | null,
    name?: string | null,
    followUp?: string | null,
    currentResident?: boolean | null,
    DOADate?: string | null,
    reasonForDecline?: string | null,
    howDidYouHearAboutUs?: string | null,
    assistanceProvided?: string | null,
    notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        date?: string | null,
        author?: string | null,
        text?: string | null,
        createdAt: string,
        updatedAt: string,
        referralsNotesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserReferralsConnection",
      items:  Array< {
        __typename: "UserReferrals",
        id: string,
        userId: string,
        referralsId: string,
        user:  {
          __typename: "User",
          id: string,
          username?: string | null,
          email?: string | null,
          Referrals?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        referrals:  {
          __typename: "Referrals",
          id: string,
          date?: string | null,
          source?: string | null,
          name?: string | null,
          followUp?: string | null,
          currentResident?: boolean | null,
          DOADate?: string | null,
          reasonForDecline?: string | null,
          howDidYouHearAboutUs?: string | null,
          assistanceProvided?: string | null,
          notes?:  {
            __typename: "ModelNoteConnection",
            nextToken?: string | null,
          } | null,
          users?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReferralsQueryVariables = {
  id?: string | null,
  filter?: ModelReferralsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListReferralsQuery = {
  listReferrals?:  {
    __typename: "ModelReferralsConnection",
    items:  Array< {
      __typename: "Referrals",
      id: string,
      date?: string | null,
      source?: string | null,
      name?: string | null,
      followUp?: string | null,
      currentResident?: boolean | null,
      DOADate?: string | null,
      reasonForDecline?: string | null,
      howDidYouHearAboutUs?: string | null,
      assistanceProvided?: string | null,
      notes?:  {
        __typename: "ModelNoteConnection",
        items:  Array< {
          __typename: "Note",
          id: string,
          date?: string | null,
          author?: string | null,
          text?: string | null,
          createdAt: string,
          updatedAt: string,
          referralsNotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserReferralsConnection",
        items:  Array< {
          __typename: "UserReferrals",
          id: string,
          userId: string,
          referralsId: string,
          user:  {
            __typename: "User",
            id: string,
            username?: string | null,
            email?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          referrals:  {
            __typename: "Referrals",
            id: string,
            date?: string | null,
            source?: string | null,
            name?: string | null,
            followUp?: string | null,
            currentResident?: boolean | null,
            DOADate?: string | null,
            reasonForDecline?: string | null,
            howDidYouHearAboutUs?: string | null,
            assistanceProvided?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNoteQueryVariables = {
  id: string,
};

export type GetNoteQuery = {
  getNote?:  {
    __typename: "Note",
    id: string,
    date?: string | null,
    author?: string | null,
    text?: string | null,
    createdAt: string,
    updatedAt: string,
    referralsNotesId?: string | null,
  } | null,
};

export type ListNotesQueryVariables = {
  id?: string | null,
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListNotesQuery = {
  listNotes?:  {
    __typename: "ModelNoteConnection",
    items:  Array< {
      __typename: "Note",
      id: string,
      date?: string | null,
      author?: string | null,
      text?: string | null,
      createdAt: string,
      updatedAt: string,
      referralsNotesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetIconQueryVariables = {
  id: string,
};

export type GetIconQuery = {
  getIcon?:  {
    __typename: "Icon",
    id: string,
    alt?: string | null,
    src?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListIconsQueryVariables = {
  id?: string | null,
  filter?: ModelIconFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListIconsQuery = {
  listIcons?:  {
    __typename: "ModelIconConnection",
    items:  Array< {
      __typename: "Icon",
      id: string,
      alt?: string | null,
      src?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetServicesQueryVariables = {
  id: string,
};

export type GetServicesQuery = {
  getServices?:  {
    __typename: "Services",
    id: string,
    serviceTitle?: string | null,
    serviceBodyText?: string | null,
    Icon?:  {
      __typename: "Icon",
      id: string,
      alt?: string | null,
      src?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    servicesIconId?: string | null,
  } | null,
};

export type ListServicesQueryVariables = {
  id?: string | null,
  filter?: ModelServicesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListServicesQuery = {
  listServices?:  {
    __typename: "ModelServicesConnection",
    items:  Array< {
      __typename: "Services",
      id: string,
      serviceTitle?: string | null,
      serviceBodyText?: string | null,
      Icon?:  {
        __typename: "Icon",
        id: string,
        alt?: string | null,
        src?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      servicesIconId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTeamMemberQueryVariables = {
  id: string,
};

export type GetTeamMemberQuery = {
  getTeamMember?:  {
    __typename: "TeamMember",
    id: string,
    firstName: string,
    lastName?: string | null,
    bio?: string | null,
    link?: string | null,
    title?: string | null,
    Image?:  {
      __typename: "Headshot",
      id: string,
      src: string,
      alt: string,
      imageTitle?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    isLeader?: boolean | null,
    featurePosition: number,
    createdAt: string,
    updatedAt: string,
    teamMemberImageId?: string | null,
  } | null,
};

export type ListTeamMembersQueryVariables = {
  id?: string | null,
  filter?: ModelTeamMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTeamMembersQuery = {
  listTeamMembers?:  {
    __typename: "ModelTeamMemberConnection",
    items:  Array< {
      __typename: "TeamMember",
      id: string,
      firstName: string,
      lastName?: string | null,
      bio?: string | null,
      link?: string | null,
      title?: string | null,
      Image?:  {
        __typename: "Headshot",
        id: string,
        src: string,
        alt: string,
        imageTitle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      isLeader?: boolean | null,
      featurePosition: number,
      createdAt: string,
      updatedAt: string,
      teamMemberImageId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetHeadshotQueryVariables = {
  id: string,
};

export type GetHeadshotQuery = {
  getHeadshot?:  {
    __typename: "Headshot",
    id: string,
    src: string,
    alt: string,
    imageTitle?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListHeadshotsQueryVariables = {
  id?: string | null,
  filter?: ModelHeadshotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListHeadshotsQuery = {
  listHeadshots?:  {
    __typename: "ModelHeadshotConnection",
    items:  Array< {
      __typename: "Headshot",
      id: string,
      src: string,
      alt: string,
      imageTitle?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserReferralsQueryVariables = {
  id: string,
};

export type GetUserReferralsQuery = {
  getUserReferrals?:  {
    __typename: "UserReferrals",
    id: string,
    userId: string,
    referralsId: string,
    user:  {
      __typename: "User",
      id: string,
      username?: string | null,
      email?: string | null,
      Referrals?:  {
        __typename: "ModelUserReferralsConnection",
        items:  Array< {
          __typename: "UserReferrals",
          id: string,
          userId: string,
          referralsId: string,
          user:  {
            __typename: "User",
            id: string,
            username?: string | null,
            email?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          referrals:  {
            __typename: "Referrals",
            id: string,
            date?: string | null,
            source?: string | null,
            name?: string | null,
            followUp?: string | null,
            currentResident?: boolean | null,
            DOADate?: string | null,
            reasonForDecline?: string | null,
            howDidYouHearAboutUs?: string | null,
            assistanceProvided?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    referrals:  {
      __typename: "Referrals",
      id: string,
      date?: string | null,
      source?: string | null,
      name?: string | null,
      followUp?: string | null,
      currentResident?: boolean | null,
      DOADate?: string | null,
      reasonForDecline?: string | null,
      howDidYouHearAboutUs?: string | null,
      assistanceProvided?: string | null,
      notes?:  {
        __typename: "ModelNoteConnection",
        items:  Array< {
          __typename: "Note",
          id: string,
          date?: string | null,
          author?: string | null,
          text?: string | null,
          createdAt: string,
          updatedAt: string,
          referralsNotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserReferralsConnection",
        items:  Array< {
          __typename: "UserReferrals",
          id: string,
          userId: string,
          referralsId: string,
          user:  {
            __typename: "User",
            id: string,
            username?: string | null,
            email?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          referrals:  {
            __typename: "Referrals",
            id: string,
            date?: string | null,
            source?: string | null,
            name?: string | null,
            followUp?: string | null,
            currentResident?: boolean | null,
            DOADate?: string | null,
            reasonForDecline?: string | null,
            howDidYouHearAboutUs?: string | null,
            assistanceProvided?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserReferralsQueryVariables = {
  filter?: ModelUserReferralsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserReferralsQuery = {
  listUserReferrals?:  {
    __typename: "ModelUserReferralsConnection",
    items:  Array< {
      __typename: "UserReferrals",
      id: string,
      userId: string,
      referralsId: string,
      user:  {
        __typename: "User",
        id: string,
        username?: string | null,
        email?: string | null,
        Referrals?:  {
          __typename: "ModelUserReferralsConnection",
          items:  Array< {
            __typename: "UserReferrals",
            id: string,
            userId: string,
            referralsId: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      referrals:  {
        __typename: "Referrals",
        id: string,
        date?: string | null,
        source?: string | null,
        name?: string | null,
        followUp?: string | null,
        currentResident?: boolean | null,
        DOADate?: string | null,
        reasonForDecline?: string | null,
        howDidYouHearAboutUs?: string | null,
        assistanceProvided?: string | null,
        notes?:  {
          __typename: "ModelNoteConnection",
          items:  Array< {
            __typename: "Note",
            id: string,
            date?: string | null,
            author?: string | null,
            text?: string | null,
            createdAt: string,
            updatedAt: string,
            referralsNotesId?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        users?:  {
          __typename: "ModelUserReferralsConnection",
          items:  Array< {
            __typename: "UserReferrals",
            id: string,
            userId: string,
            referralsId: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserReferralsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserReferralsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserReferralsByUserIdQuery = {
  userReferralsByUserId?:  {
    __typename: "ModelUserReferralsConnection",
    items:  Array< {
      __typename: "UserReferrals",
      id: string,
      userId: string,
      referralsId: string,
      user:  {
        __typename: "User",
        id: string,
        username?: string | null,
        email?: string | null,
        Referrals?:  {
          __typename: "ModelUserReferralsConnection",
          items:  Array< {
            __typename: "UserReferrals",
            id: string,
            userId: string,
            referralsId: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      referrals:  {
        __typename: "Referrals",
        id: string,
        date?: string | null,
        source?: string | null,
        name?: string | null,
        followUp?: string | null,
        currentResident?: boolean | null,
        DOADate?: string | null,
        reasonForDecline?: string | null,
        howDidYouHearAboutUs?: string | null,
        assistanceProvided?: string | null,
        notes?:  {
          __typename: "ModelNoteConnection",
          items:  Array< {
            __typename: "Note",
            id: string,
            date?: string | null,
            author?: string | null,
            text?: string | null,
            createdAt: string,
            updatedAt: string,
            referralsNotesId?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        users?:  {
          __typename: "ModelUserReferralsConnection",
          items:  Array< {
            __typename: "UserReferrals",
            id: string,
            userId: string,
            referralsId: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserReferralsByReferralsIdQueryVariables = {
  referralsId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserReferralsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserReferralsByReferralsIdQuery = {
  userReferralsByReferralsId?:  {
    __typename: "ModelUserReferralsConnection",
    items:  Array< {
      __typename: "UserReferrals",
      id: string,
      userId: string,
      referralsId: string,
      user:  {
        __typename: "User",
        id: string,
        username?: string | null,
        email?: string | null,
        Referrals?:  {
          __typename: "ModelUserReferralsConnection",
          items:  Array< {
            __typename: "UserReferrals",
            id: string,
            userId: string,
            referralsId: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      referrals:  {
        __typename: "Referrals",
        id: string,
        date?: string | null,
        source?: string | null,
        name?: string | null,
        followUp?: string | null,
        currentResident?: boolean | null,
        DOADate?: string | null,
        reasonForDecline?: string | null,
        howDidYouHearAboutUs?: string | null,
        assistanceProvided?: string | null,
        notes?:  {
          __typename: "ModelNoteConnection",
          items:  Array< {
            __typename: "Note",
            id: string,
            date?: string | null,
            author?: string | null,
            text?: string | null,
            createdAt: string,
            updatedAt: string,
            referralsNotesId?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        users?:  {
          __typename: "ModelUserReferralsConnection",
          items:  Array< {
            __typename: "UserReferrals",
            id: string,
            userId: string,
            referralsId: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    email?: string | null,
    Referrals?:  {
      __typename: "ModelUserReferralsConnection",
      items:  Array< {
        __typename: "UserReferrals",
        id: string,
        userId: string,
        referralsId: string,
        user:  {
          __typename: "User",
          id: string,
          username?: string | null,
          email?: string | null,
          Referrals?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        referrals:  {
          __typename: "Referrals",
          id: string,
          date?: string | null,
          source?: string | null,
          name?: string | null,
          followUp?: string | null,
          currentResident?: boolean | null,
          DOADate?: string | null,
          reasonForDecline?: string | null,
          howDidYouHearAboutUs?: string | null,
          assistanceProvided?: string | null,
          notes?:  {
            __typename: "ModelNoteConnection",
            nextToken?: string | null,
          } | null,
          users?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    email?: string | null,
    Referrals?:  {
      __typename: "ModelUserReferralsConnection",
      items:  Array< {
        __typename: "UserReferrals",
        id: string,
        userId: string,
        referralsId: string,
        user:  {
          __typename: "User",
          id: string,
          username?: string | null,
          email?: string | null,
          Referrals?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        referrals:  {
          __typename: "Referrals",
          id: string,
          date?: string | null,
          source?: string | null,
          name?: string | null,
          followUp?: string | null,
          currentResident?: boolean | null,
          DOADate?: string | null,
          reasonForDecline?: string | null,
          howDidYouHearAboutUs?: string | null,
          assistanceProvided?: string | null,
          notes?:  {
            __typename: "ModelNoteConnection",
            nextToken?: string | null,
          } | null,
          users?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    email?: string | null,
    Referrals?:  {
      __typename: "ModelUserReferralsConnection",
      items:  Array< {
        __typename: "UserReferrals",
        id: string,
        userId: string,
        referralsId: string,
        user:  {
          __typename: "User",
          id: string,
          username?: string | null,
          email?: string | null,
          Referrals?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        referrals:  {
          __typename: "Referrals",
          id: string,
          date?: string | null,
          source?: string | null,
          name?: string | null,
          followUp?: string | null,
          currentResident?: boolean | null,
          DOADate?: string | null,
          reasonForDecline?: string | null,
          howDidYouHearAboutUs?: string | null,
          assistanceProvided?: string | null,
          notes?:  {
            __typename: "ModelNoteConnection",
            nextToken?: string | null,
          } | null,
          users?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReferralsSubscriptionVariables = {
  filter?: ModelSubscriptionReferralsFilterInput | null,
};

export type OnCreateReferralsSubscription = {
  onCreateReferrals?:  {
    __typename: "Referrals",
    id: string,
    date?: string | null,
    source?: string | null,
    name?: string | null,
    followUp?: string | null,
    currentResident?: boolean | null,
    DOADate?: string | null,
    reasonForDecline?: string | null,
    howDidYouHearAboutUs?: string | null,
    assistanceProvided?: string | null,
    notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        date?: string | null,
        author?: string | null,
        text?: string | null,
        createdAt: string,
        updatedAt: string,
        referralsNotesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserReferralsConnection",
      items:  Array< {
        __typename: "UserReferrals",
        id: string,
        userId: string,
        referralsId: string,
        user:  {
          __typename: "User",
          id: string,
          username?: string | null,
          email?: string | null,
          Referrals?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        referrals:  {
          __typename: "Referrals",
          id: string,
          date?: string | null,
          source?: string | null,
          name?: string | null,
          followUp?: string | null,
          currentResident?: boolean | null,
          DOADate?: string | null,
          reasonForDecline?: string | null,
          howDidYouHearAboutUs?: string | null,
          assistanceProvided?: string | null,
          notes?:  {
            __typename: "ModelNoteConnection",
            nextToken?: string | null,
          } | null,
          users?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReferralsSubscriptionVariables = {
  filter?: ModelSubscriptionReferralsFilterInput | null,
};

export type OnUpdateReferralsSubscription = {
  onUpdateReferrals?:  {
    __typename: "Referrals",
    id: string,
    date?: string | null,
    source?: string | null,
    name?: string | null,
    followUp?: string | null,
    currentResident?: boolean | null,
    DOADate?: string | null,
    reasonForDecline?: string | null,
    howDidYouHearAboutUs?: string | null,
    assistanceProvided?: string | null,
    notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        date?: string | null,
        author?: string | null,
        text?: string | null,
        createdAt: string,
        updatedAt: string,
        referralsNotesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserReferralsConnection",
      items:  Array< {
        __typename: "UserReferrals",
        id: string,
        userId: string,
        referralsId: string,
        user:  {
          __typename: "User",
          id: string,
          username?: string | null,
          email?: string | null,
          Referrals?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        referrals:  {
          __typename: "Referrals",
          id: string,
          date?: string | null,
          source?: string | null,
          name?: string | null,
          followUp?: string | null,
          currentResident?: boolean | null,
          DOADate?: string | null,
          reasonForDecline?: string | null,
          howDidYouHearAboutUs?: string | null,
          assistanceProvided?: string | null,
          notes?:  {
            __typename: "ModelNoteConnection",
            nextToken?: string | null,
          } | null,
          users?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReferralsSubscriptionVariables = {
  filter?: ModelSubscriptionReferralsFilterInput | null,
};

export type OnDeleteReferralsSubscription = {
  onDeleteReferrals?:  {
    __typename: "Referrals",
    id: string,
    date?: string | null,
    source?: string | null,
    name?: string | null,
    followUp?: string | null,
    currentResident?: boolean | null,
    DOADate?: string | null,
    reasonForDecline?: string | null,
    howDidYouHearAboutUs?: string | null,
    assistanceProvided?: string | null,
    notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        date?: string | null,
        author?: string | null,
        text?: string | null,
        createdAt: string,
        updatedAt: string,
        referralsNotesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserReferralsConnection",
      items:  Array< {
        __typename: "UserReferrals",
        id: string,
        userId: string,
        referralsId: string,
        user:  {
          __typename: "User",
          id: string,
          username?: string | null,
          email?: string | null,
          Referrals?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        referrals:  {
          __typename: "Referrals",
          id: string,
          date?: string | null,
          source?: string | null,
          name?: string | null,
          followUp?: string | null,
          currentResident?: boolean | null,
          DOADate?: string | null,
          reasonForDecline?: string | null,
          howDidYouHearAboutUs?: string | null,
          assistanceProvided?: string | null,
          notes?:  {
            __typename: "ModelNoteConnection",
            nextToken?: string | null,
          } | null,
          users?:  {
            __typename: "ModelUserReferralsConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnCreateNoteSubscription = {
  onCreateNote?:  {
    __typename: "Note",
    id: string,
    date?: string | null,
    author?: string | null,
    text?: string | null,
    createdAt: string,
    updatedAt: string,
    referralsNotesId?: string | null,
  } | null,
};

export type OnUpdateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnUpdateNoteSubscription = {
  onUpdateNote?:  {
    __typename: "Note",
    id: string,
    date?: string | null,
    author?: string | null,
    text?: string | null,
    createdAt: string,
    updatedAt: string,
    referralsNotesId?: string | null,
  } | null,
};

export type OnDeleteNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnDeleteNoteSubscription = {
  onDeleteNote?:  {
    __typename: "Note",
    id: string,
    date?: string | null,
    author?: string | null,
    text?: string | null,
    createdAt: string,
    updatedAt: string,
    referralsNotesId?: string | null,
  } | null,
};

export type OnCreateIconSubscriptionVariables = {
  filter?: ModelSubscriptionIconFilterInput | null,
};

export type OnCreateIconSubscription = {
  onCreateIcon?:  {
    __typename: "Icon",
    id: string,
    alt?: string | null,
    src?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIconSubscriptionVariables = {
  filter?: ModelSubscriptionIconFilterInput | null,
};

export type OnUpdateIconSubscription = {
  onUpdateIcon?:  {
    __typename: "Icon",
    id: string,
    alt?: string | null,
    src?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIconSubscriptionVariables = {
  filter?: ModelSubscriptionIconFilterInput | null,
};

export type OnDeleteIconSubscription = {
  onDeleteIcon?:  {
    __typename: "Icon",
    id: string,
    alt?: string | null,
    src?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateServicesSubscriptionVariables = {
  filter?: ModelSubscriptionServicesFilterInput | null,
};

export type OnCreateServicesSubscription = {
  onCreateServices?:  {
    __typename: "Services",
    id: string,
    serviceTitle?: string | null,
    serviceBodyText?: string | null,
    Icon?:  {
      __typename: "Icon",
      id: string,
      alt?: string | null,
      src?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    servicesIconId?: string | null,
  } | null,
};

export type OnUpdateServicesSubscriptionVariables = {
  filter?: ModelSubscriptionServicesFilterInput | null,
};

export type OnUpdateServicesSubscription = {
  onUpdateServices?:  {
    __typename: "Services",
    id: string,
    serviceTitle?: string | null,
    serviceBodyText?: string | null,
    Icon?:  {
      __typename: "Icon",
      id: string,
      alt?: string | null,
      src?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    servicesIconId?: string | null,
  } | null,
};

export type OnDeleteServicesSubscriptionVariables = {
  filter?: ModelSubscriptionServicesFilterInput | null,
};

export type OnDeleteServicesSubscription = {
  onDeleteServices?:  {
    __typename: "Services",
    id: string,
    serviceTitle?: string | null,
    serviceBodyText?: string | null,
    Icon?:  {
      __typename: "Icon",
      id: string,
      alt?: string | null,
      src?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    servicesIconId?: string | null,
  } | null,
};

export type OnCreateTeamMemberSubscriptionVariables = {
  filter?: ModelSubscriptionTeamMemberFilterInput | null,
};

export type OnCreateTeamMemberSubscription = {
  onCreateTeamMember?:  {
    __typename: "TeamMember",
    id: string,
    firstName: string,
    lastName?: string | null,
    bio?: string | null,
    link?: string | null,
    title?: string | null,
    Image?:  {
      __typename: "Headshot",
      id: string,
      src: string,
      alt: string,
      imageTitle?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    isLeader?: boolean | null,
    featurePosition: number,
    createdAt: string,
    updatedAt: string,
    teamMemberImageId?: string | null,
  } | null,
};

export type OnUpdateTeamMemberSubscriptionVariables = {
  filter?: ModelSubscriptionTeamMemberFilterInput | null,
};

export type OnUpdateTeamMemberSubscription = {
  onUpdateTeamMember?:  {
    __typename: "TeamMember",
    id: string,
    firstName: string,
    lastName?: string | null,
    bio?: string | null,
    link?: string | null,
    title?: string | null,
    Image?:  {
      __typename: "Headshot",
      id: string,
      src: string,
      alt: string,
      imageTitle?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    isLeader?: boolean | null,
    featurePosition: number,
    createdAt: string,
    updatedAt: string,
    teamMemberImageId?: string | null,
  } | null,
};

export type OnDeleteTeamMemberSubscriptionVariables = {
  filter?: ModelSubscriptionTeamMemberFilterInput | null,
};

export type OnDeleteTeamMemberSubscription = {
  onDeleteTeamMember?:  {
    __typename: "TeamMember",
    id: string,
    firstName: string,
    lastName?: string | null,
    bio?: string | null,
    link?: string | null,
    title?: string | null,
    Image?:  {
      __typename: "Headshot",
      id: string,
      src: string,
      alt: string,
      imageTitle?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    isLeader?: boolean | null,
    featurePosition: number,
    createdAt: string,
    updatedAt: string,
    teamMemberImageId?: string | null,
  } | null,
};

export type OnCreateHeadshotSubscriptionVariables = {
  filter?: ModelSubscriptionHeadshotFilterInput | null,
};

export type OnCreateHeadshotSubscription = {
  onCreateHeadshot?:  {
    __typename: "Headshot",
    id: string,
    src: string,
    alt: string,
    imageTitle?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateHeadshotSubscriptionVariables = {
  filter?: ModelSubscriptionHeadshotFilterInput | null,
};

export type OnUpdateHeadshotSubscription = {
  onUpdateHeadshot?:  {
    __typename: "Headshot",
    id: string,
    src: string,
    alt: string,
    imageTitle?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteHeadshotSubscriptionVariables = {
  filter?: ModelSubscriptionHeadshotFilterInput | null,
};

export type OnDeleteHeadshotSubscription = {
  onDeleteHeadshot?:  {
    __typename: "Headshot",
    id: string,
    src: string,
    alt: string,
    imageTitle?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserReferralsSubscriptionVariables = {
  filter?: ModelSubscriptionUserReferralsFilterInput | null,
};

export type OnCreateUserReferralsSubscription = {
  onCreateUserReferrals?:  {
    __typename: "UserReferrals",
    id: string,
    userId: string,
    referralsId: string,
    user:  {
      __typename: "User",
      id: string,
      username?: string | null,
      email?: string | null,
      Referrals?:  {
        __typename: "ModelUserReferralsConnection",
        items:  Array< {
          __typename: "UserReferrals",
          id: string,
          userId: string,
          referralsId: string,
          user:  {
            __typename: "User",
            id: string,
            username?: string | null,
            email?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          referrals:  {
            __typename: "Referrals",
            id: string,
            date?: string | null,
            source?: string | null,
            name?: string | null,
            followUp?: string | null,
            currentResident?: boolean | null,
            DOADate?: string | null,
            reasonForDecline?: string | null,
            howDidYouHearAboutUs?: string | null,
            assistanceProvided?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    referrals:  {
      __typename: "Referrals",
      id: string,
      date?: string | null,
      source?: string | null,
      name?: string | null,
      followUp?: string | null,
      currentResident?: boolean | null,
      DOADate?: string | null,
      reasonForDecline?: string | null,
      howDidYouHearAboutUs?: string | null,
      assistanceProvided?: string | null,
      notes?:  {
        __typename: "ModelNoteConnection",
        items:  Array< {
          __typename: "Note",
          id: string,
          date?: string | null,
          author?: string | null,
          text?: string | null,
          createdAt: string,
          updatedAt: string,
          referralsNotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserReferralsConnection",
        items:  Array< {
          __typename: "UserReferrals",
          id: string,
          userId: string,
          referralsId: string,
          user:  {
            __typename: "User",
            id: string,
            username?: string | null,
            email?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          referrals:  {
            __typename: "Referrals",
            id: string,
            date?: string | null,
            source?: string | null,
            name?: string | null,
            followUp?: string | null,
            currentResident?: boolean | null,
            DOADate?: string | null,
            reasonForDecline?: string | null,
            howDidYouHearAboutUs?: string | null,
            assistanceProvided?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserReferralsSubscriptionVariables = {
  filter?: ModelSubscriptionUserReferralsFilterInput | null,
};

export type OnUpdateUserReferralsSubscription = {
  onUpdateUserReferrals?:  {
    __typename: "UserReferrals",
    id: string,
    userId: string,
    referralsId: string,
    user:  {
      __typename: "User",
      id: string,
      username?: string | null,
      email?: string | null,
      Referrals?:  {
        __typename: "ModelUserReferralsConnection",
        items:  Array< {
          __typename: "UserReferrals",
          id: string,
          userId: string,
          referralsId: string,
          user:  {
            __typename: "User",
            id: string,
            username?: string | null,
            email?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          referrals:  {
            __typename: "Referrals",
            id: string,
            date?: string | null,
            source?: string | null,
            name?: string | null,
            followUp?: string | null,
            currentResident?: boolean | null,
            DOADate?: string | null,
            reasonForDecline?: string | null,
            howDidYouHearAboutUs?: string | null,
            assistanceProvided?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    referrals:  {
      __typename: "Referrals",
      id: string,
      date?: string | null,
      source?: string | null,
      name?: string | null,
      followUp?: string | null,
      currentResident?: boolean | null,
      DOADate?: string | null,
      reasonForDecline?: string | null,
      howDidYouHearAboutUs?: string | null,
      assistanceProvided?: string | null,
      notes?:  {
        __typename: "ModelNoteConnection",
        items:  Array< {
          __typename: "Note",
          id: string,
          date?: string | null,
          author?: string | null,
          text?: string | null,
          createdAt: string,
          updatedAt: string,
          referralsNotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserReferralsConnection",
        items:  Array< {
          __typename: "UserReferrals",
          id: string,
          userId: string,
          referralsId: string,
          user:  {
            __typename: "User",
            id: string,
            username?: string | null,
            email?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          referrals:  {
            __typename: "Referrals",
            id: string,
            date?: string | null,
            source?: string | null,
            name?: string | null,
            followUp?: string | null,
            currentResident?: boolean | null,
            DOADate?: string | null,
            reasonForDecline?: string | null,
            howDidYouHearAboutUs?: string | null,
            assistanceProvided?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserReferralsSubscriptionVariables = {
  filter?: ModelSubscriptionUserReferralsFilterInput | null,
};

export type OnDeleteUserReferralsSubscription = {
  onDeleteUserReferrals?:  {
    __typename: "UserReferrals",
    id: string,
    userId: string,
    referralsId: string,
    user:  {
      __typename: "User",
      id: string,
      username?: string | null,
      email?: string | null,
      Referrals?:  {
        __typename: "ModelUserReferralsConnection",
        items:  Array< {
          __typename: "UserReferrals",
          id: string,
          userId: string,
          referralsId: string,
          user:  {
            __typename: "User",
            id: string,
            username?: string | null,
            email?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          referrals:  {
            __typename: "Referrals",
            id: string,
            date?: string | null,
            source?: string | null,
            name?: string | null,
            followUp?: string | null,
            currentResident?: boolean | null,
            DOADate?: string | null,
            reasonForDecline?: string | null,
            howDidYouHearAboutUs?: string | null,
            assistanceProvided?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    referrals:  {
      __typename: "Referrals",
      id: string,
      date?: string | null,
      source?: string | null,
      name?: string | null,
      followUp?: string | null,
      currentResident?: boolean | null,
      DOADate?: string | null,
      reasonForDecline?: string | null,
      howDidYouHearAboutUs?: string | null,
      assistanceProvided?: string | null,
      notes?:  {
        __typename: "ModelNoteConnection",
        items:  Array< {
          __typename: "Note",
          id: string,
          date?: string | null,
          author?: string | null,
          text?: string | null,
          createdAt: string,
          updatedAt: string,
          referralsNotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserReferralsConnection",
        items:  Array< {
          __typename: "UserReferrals",
          id: string,
          userId: string,
          referralsId: string,
          user:  {
            __typename: "User",
            id: string,
            username?: string | null,
            email?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          referrals:  {
            __typename: "Referrals",
            id: string,
            date?: string | null,
            source?: string | null,
            name?: string | null,
            followUp?: string | null,
            currentResident?: boolean | null,
            DOADate?: string | null,
            reasonForDecline?: string | null,
            howDidYouHearAboutUs?: string | null,
            assistanceProvided?: string | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
