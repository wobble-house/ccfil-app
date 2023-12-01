import { Amplify, type ResourcesConfig } from 'aws-amplify';
import { autoSignIn, confirmSignUp, fetchAuthSession, getCurrentUser, signIn , signOut, signUp, type ConfirmSignUpInput, type SignInInput } from 'aws-amplify/auth';

const authConfig: ResourcesConfig['Auth'] = {
    Cognito: {
      userPoolId: process.env.COGNITO_USER_POOL_ID,
      userPoolClientId: process.env.COGNITO_USER_POOL_CLIENT_ID
    }
  };
  
  Amplify.configure({
    Auth: authConfig
  },{ssr: true});
type SignUpParameters = {
    username: string;
    password: string;
    email: string;
    phone_number: string;
    name: string;
    given_name: string;
    family_name: string;
    middle_name: string;
    preferred_username: string;
    profile: string;
    picture: string;
    website: string;
    gender: string;
    birthdate: string;
    locale: string;
    address: string;
    updated_at: string;
  };

export async function handleSignUp({ 
    username, 
    password, 
    email, 
    phone_number,
    name,
    given_name,
    family_name,
    middle_name,
    preferred_username,
    profile,
    picture,
    website,
    gender,
    birthdate,
    locale,
    address,
    updated_at,
 }: SignUpParameters) {
  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username,
      password,
      options: {
        userAttributes: {
          email,
          phone_number,
          name,
          given_name,
          family_name,
          middle_name,
          preferred_username,
          profile,
          picture,
          website,
          gender,
          birthdate,
          locale,
          address,
          updated_at
        },
        // optional
        autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
      }
    });
  } catch (error) {
    console.log('error signing up:', error);
  }
}

export async function handleSignUpConfirmation({
    username,
    confirmationCode
  }: ConfirmSignUpInput) {
    try {
      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username,
        confirmationCode
      });
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }
  
export async function handleAutoSignIn() {
    try {
      const signInOutput = await autoSignIn();
      // handle sign-in steps
    } catch (error) {
      console.log(error);
    }
  }

export async function handleSignIn({ username, password }: SignInInput) {
    try {
      const { isSignedIn, nextStep } = await signIn({ username, password });
    } catch (error) {
      console.log('error signing in', error);
    }
  }

export async function handleSignOut() {
    try {
      await signOut({ global: true });
        location.reload()
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

export async function currentAuthenticatedUser() {
    try {
      const { username, userId, signInDetails } = await getCurrentUser();
      console.log(`The username: ${username}`);
      console.log(`The userId: ${userId}`);
      console.log(`The signInDetails: ${signInDetails}`);
    } catch (err) {
      console.log(err);
    }
  }

export async function currentSession() {
    try {
      const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
    } catch (err) {
      console.log(err);
    }
  }