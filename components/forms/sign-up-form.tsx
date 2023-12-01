"use client"
import Image from "next/image";
import { useAuthenticator, useTheme, View, Text, Heading, Button, Authenticator } from "@aws-amplify/ui-react";
import { Amplify, type ResourcesConfig } from 'aws-amplify';
import { I18n } from 'aws-amplify/utils';

const authConfig: ResourcesConfig['Auth'] = {
  Cognito: {
    userPoolId: process.env.COGNITO_USER_POOL_ID,
    userPoolClientId: process.env.COGNITO_USER_POOL_CLIENT_ID
  }
};

Amplify.configure({
  Auth: authConfig
});

I18n.putVocabulariesForLanguage('en', {
  'Sign In': 'Sign In', // Tab header
  'Sign in': 'Sign In', // Button label
  'Sign in to your account': 'Welcome Back!',
  Username: 'Enter your username', // Username label
  Password: 'Enter your password', // Password label
  'Forgot your password?': 'Reset Password',
});

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large} className={`mb-10`}>
        <Image
          alt="CCFIL logo"
          src="/Logos/main-logo.svg"
          width={300}
          height={77}
        />
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large} className="align-bottom mt-10">
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved
        </Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
        </Heading>
      );
    },
    Footer() {
      const { toForgotPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toForgotPassword}
            size="small"
            variation="link"
            className="border-2 border-solid border-slate-500 bg-white opacity-75 rounded-full px-3 my-8 hover:scale-105"
          >
            Reset Password
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading>
          <h3 className="font-bold text-blue1 uppercase">Create a new account</h3>
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Back to Sign In
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  SetupTotp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ForgotPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};
const formFields = {
    signIn: {
      username: {
        placeholder: 'Enter your email',
      },
    },
    signUp: {
      username: {
        order: 1,
      },
      password: {
        label: 'Password:',
        placeholder: 'Enter your Password:',
        isRequired: true,
        order: 2,
      },
      confirm_password: {
        label: 'Confirm Password:',
        order: 3,
      },
    },
    forceNewPassword: {
      password: {
        placeholder: 'Enter your Password:',
      },
    },
    forgotPassword: {
      username: {
        placeholder: 'Enter your email:',
      },
    },
    confirmResetPassword: {
      confirmation_code: {
        placeholder: 'Enter your Confirmation Code:',
        label: 'New Label',
        isRequired: false,
      },
      confirm_password: {
        placeholder: 'Enter your Password Please:',
      },
    },
    setupTotp: {
      QR: {
        totpIssuer: 'test issuer',
        totpUsername: 'amplify_qr_test_user',
      },
      confirmation_code: {
        label: 'New Label',
        placeholder: 'Enter your Confirmation Code:',
        isRequired: false,
      },
    },
    confirmSignIn: {
      confirmation_code: {
        label: 'New Label',
        placeholder: 'Enter your Confirmation Code:',
        isRequired: false,
      },
    },
  };
export default function SignupForm() {
    return (
      <div className="absolute flex bg-white bg-opacity-75 mt-10 right-0 rounded-md">
      <Authenticator formFields={formFields} components={components} className={`flex flex-grow w-full p-8 border-[6px] border-blue1 rounded-md overflow-auto`}>
        {({ signOut }) => <button onClick={signOut}>Sign out</button>}
      </Authenticator>
      </div>
    );
  }