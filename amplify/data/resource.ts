import { defineData } from '@aws-amplify/backend';
import type { Backend } from '../backend';
import { aws_iam } from 'aws-cdk-lib';

const schema = `type User @model @auth(rules: [{allow: public}]) {
  id: ID!
  username: String
  email: String
  Referrals: [Referrals] @manyToMany(relationName: "UserReferrals")
  FeatureFeedback: [FeatureFeedback] @manyToMany(relationName: "UserFeatureFeedback")
  title: String
  bio: String
  firstName: String
  lastName: String
  isLeader: Boolean
  featurePosition: Int
  Headshot: Headshot @hasOne
  link: String
  userHeadshot: ID
}

type Referrals @model @auth(rules: [{allow: public}]) {
  id: ID!
  date: AWSDate
  source: String
  name: String
  followUp: String
  currentResident: Boolean
  DOADate: AWSDate
  reasonForDecline: String
  howDidYouHearAboutUs: String
  assistanceProvided: String
  notes: [Note] @hasMany
  users: [User] @manyToMany(relationName: "UserReferrals")
}

type Note @model @auth(rules: [{allow: public}]) {
  id: ID!
  date: AWSDate
  author: String
  text: String
}

type Icon @model @auth(rules: [{allow: public}]) {
  id: ID!
  alt: String
  src: String
}

type Services @model @auth(rules: [{allow: public}]) {
  id: ID!
  serviceTitle: String
  serviceBodyText: String
  Icon: Icon @hasOne
}

type TeamMember @model @auth(rules: [{allow: public}]) {
  id: ID!
  firstName: String!
  lastName: String
  bio: String
  link: String
  title: String
  Image: Headshot @hasOne
  isLeader: Boolean
  featurePosition: Int!
}

type Headshot @model @auth(rules: [{allow: public}]) {
  id: ID!
  src: String!
  alt: String!
  imageTitle: String
}

type FeatureFeedback @model @auth(rules: [{allow: public}]) {
  id: ID!
  date: AWSDate
  layoutDesign: String
  functionality: String
  formFields: String
  featureRequest: String
  other: String
  isComplete: Boolean
  users: [User] @manyToMany(relationName: "UserFeatureFeedback")
}
 `;

export const data = defineData({
  migratedAmplifyGen1DynamoDbTableMappings: [
    {
      //The "branchName" variable needs to be the same as your deployment branch if you want to reuse your Gen1 app tables
      branchName: 'gen2-main',
      modelNameToTableNameMapping: {
        User: 'User-3xktyzywrvggxclbrqvos62pmq-staging',
        Referrals: 'Referrals-3xktyzywrvggxclbrqvos62pmq-staging',
        Note: 'Note-3xktyzywrvggxclbrqvos62pmq-staging',
        Icon: 'Icon-3xktyzywrvggxclbrqvos62pmq-staging',
        Services: 'Services-3xktyzywrvggxclbrqvos62pmq-staging',
        TeamMember: 'TeamMember-3xktyzywrvggxclbrqvos62pmq-staging',
        Headshot: 'Headshot-3xktyzywrvggxclbrqvos62pmq-staging',
        FeatureFeedback: 'FeatureFeedback-3xktyzywrvggxclbrqvos62pmq-staging',
        UserReferrals: 'UserReferrals-3xktyzywrvggxclbrqvos62pmq-staging',
        UserFeatureFeedback:
          'UserFeatureFeedback-3xktyzywrvggxclbrqvos62pmq-staging',
      },
    },
  ],
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
      description: 'api key description',
    },
  },
  schema,
});

export function applyEscapeHatches(backend: Backend) {
  const cfnGraphqlApi = backend.data.resources.cfnResources.cfnGraphqlApi;
  cfnGraphqlApi.additionalAuthenticationProviders = [
    {
      authenticationType: 'AWS_IAM',
    },
  ];
  backend.auth.resources.authenticatedUserIamRole.addToPrincipalPolicy(
    new aws_iam.PolicyStatement({
      effect: aws_iam.Effect.ALLOW,
      actions: ['appsync:GraphQL'],
      resources: [
        `arn:aws:appsync:${backend.data.stack.region}:${backend.data.stack.account}:apis/3xktyzywrvggxclbrqvos62pmq/*`,
      ],
    })
  );
}
