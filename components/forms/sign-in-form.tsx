"use client"
import Image from "next/image";
import { useAuthenticator, useTheme, View, Text, Heading, Button, Authenticator } from "@aws-amplify/ui-react";
import { I18n } from 'aws-amplify/utils';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Hub } from 'aws-amplify/utils';


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
          src="/logos/main-logo.svg"
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

  

export default function SigninForm() {
  const router = useRouter();
  // State to track the current authentication state
  const [authState, setAuthState] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Add an event listener to handle changes in authentication state
    Hub.listen('auth', (data) => {
      if (data.payload.event === "signedIn") {
        // Redirect the user to the /dashboard route upon successful sign-in
        router.push("/dashboard");
      }
      return;
    });

  });
    return (
      <div className="md:absolute flex bg-white bg-opacity-75 mt-12 md:left-0 rounded-md">
      <Authenticator formFields={formFields} components={components} className={`flex flex-grow w-full p-8 border-[6px] border-blue1 rounded-md overflow-auto`}>
        {({ signOut }) => <button onClick={signOut}>Sign out</button>}
      </Authenticator>
      </div>
    );
  }