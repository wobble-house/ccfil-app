/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

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
  isFeatured?: boolean | null,
  isLeader?: boolean | null,
  teamMemberImageId?: string | null,
};

export type ModelTeamMemberConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  link?: ModelStringInput | null,
  title?: ModelStringInput | null,
  isFeatured?: ModelBooleanInput | null,
  isLeader?: ModelBooleanInput | null,
  and?: Array< ModelTeamMemberConditionInput | null > | null,
  or?: Array< ModelTeamMemberConditionInput | null > | null,
  not?: ModelTeamMemberConditionInput | null,
  teamMemberImageId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
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
  isFeatured?: boolean | null,
  Image?: Headshot | null,
  isLeader?: boolean | null,
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
  isFeatured?: boolean | null,
  isLeader?: boolean | null,
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
  isFeatured?: ModelBooleanInput | null,
  isLeader?: ModelBooleanInput | null,
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

export type ModelSubscriptionIconFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  alt?: ModelSubscriptionStringInput | null,
  src?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionIconFilterInput | null > | null,
  or?: Array< ModelSubscriptionIconFilterInput | null > | null,
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
  isFeatured?: ModelSubscriptionBooleanInput | null,
  isLeader?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionTeamMemberFilterInput | null > | null,
  or?: Array< ModelSubscriptionTeamMemberFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionHeadshotFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  src?: ModelSubscriptionStringInput | null,
  alt?: ModelSubscriptionStringInput | null,
  imageTitle?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionHeadshotFilterInput | null > | null,
  or?: Array< ModelSubscriptionHeadshotFilterInput | null > | null,
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
    isFeatured?: boolean | null,
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
    isFeatured?: boolean | null,
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
    isFeatured?: boolean | null,
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
  filter?: ModelIconFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
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
  filter?: ModelServicesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
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
    isFeatured?: boolean | null,
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
    createdAt: string,
    updatedAt: string,
    teamMemberImageId?: string | null,
  } | null,
};

export type ListTeamMembersQueryVariables = {
  filter?: ModelTeamMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
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
      isFeatured?: boolean | null,
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
  filter?: ModelHeadshotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
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
    isFeatured?: boolean | null,
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
    isFeatured?: boolean | null,
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
    isFeatured?: boolean | null,
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
