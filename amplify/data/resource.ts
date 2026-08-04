import { defineData } from '@aws-amplify/backend';
import type { Backend } from '../backend';
import { aws_iam } from 'aws-cdk-lib';

const schema = `type User @model @auth(rules: [{allow: public}]) {
  id: ID!
  username: String
  email: String
  Referrals: [UserReferrals] @hasMany(indexName: "byUser", fields: ["id"])
  FeatureFeedback: [UserFeatureFeedback] @hasMany(indexName: "byUser", fields: ["id"])
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
  users: [UserReferrals] @hasMany(indexName: "byReferrals", fields: ["id"])
}

type UserReferrals @model @auth(rules: [{allow: public}]) {
  id: ID!
  userId: ID! @index(name: "byUser")
  referralsId: ID! @index(name: "byReferrals")
  user: User! @belongsTo(fields: ["userId"])
  referrals: Referrals! @belongsTo(fields: ["referralsId"])
}


type UserFeatureFeedback @model @auth(rules: [{allow: public}]) {
  id: ID!
  userId: ID! @index(name: "byUser")
  featureFeedbackId: ID! @index(name: "byFeatureFeedback")
  user: User! @belongsTo(fields: ["userId"])
  featureFeedback: FeatureFeedback! @belongsTo(fields: ["featureFeedbackId"])
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
  users: [UserFeatureFeedback] @hasMany(indexName: "byFeatureFeedback", fields: ["id"])
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
      // Was 30. Every model is {allow: public}, so the entire public read path
      // depends on this key; at 30 days the site goes dark a month after the
      // last deploy.
      expiresInDays: 365,
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
        // Gen2's own API, derived rather than hardcoded. AppSync is stateless
        // and does not participate in refactor, so Gen2 gets a new API ID.
        `${backend.data.resources.graphqlApi.arn}/*`,
        // Gen1 API, retained only for the coexistence window so signed-in users
        // on the Gen1 frontend keep working. Remove at §10 cutover.
        `arn:aws:appsync:${backend.data.stack.region}:${backend.data.stack.account}:apis/3xktyzywrvggxclbrqvos62pmq/*`,
      ],
    })
  );
}