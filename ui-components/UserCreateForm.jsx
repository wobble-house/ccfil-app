/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createUser } from "../utils/graphql/mutations";
const client = generateClient();
export default function UserCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    username: "",
    email: "",
    title: "",
    bio: "",
    firstName: "",
    lastName: "",
    isLeader: false,
    featurePosition: "",
    link: "",
    userHeadshot: "",
  };
  const [username, setUsername] = React.useState(initialValues.username);
  const [email, setEmail] = React.useState(initialValues.email);
  const [title, setTitle] = React.useState(initialValues.title);
  const [bio, setBio] = React.useState(initialValues.bio);
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [isLeader, setIsLeader] = React.useState(initialValues.isLeader);
  const [featurePosition, setFeaturePosition] = React.useState(
    initialValues.featurePosition
  );
  const [link, setLink] = React.useState(initialValues.link);
  const [userHeadshot, setUserHeadshot] = React.useState(
    initialValues.userHeadshot
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUsername(initialValues.username);
    setEmail(initialValues.email);
    setTitle(initialValues.title);
    setBio(initialValues.bio);
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setIsLeader(initialValues.isLeader);
    setFeaturePosition(initialValues.featurePosition);
    setLink(initialValues.link);
    setUserHeadshot(initialValues.userHeadshot);
    setErrors({});
  };
  const validations = {
    username: [],
    email: [],
    title: [],
    bio: [],
    firstName: [],
    lastName: [],
    isLeader: [],
    featurePosition: [],
    link: [],
    userHeadshot: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          username,
          email,
          title,
          bio,
          firstName,
          lastName,
          isLeader,
          featurePosition,
          link,
          userHeadshot,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createUser.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserCreateForm")}
      {...rest}
    >
      <TextField
        label="Username"
        isRequired={false}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username: value,
              email,
              title,
              bio,
              firstName,
              lastName,
              isLeader,
              featurePosition,
              link,
              userHeadshot,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              email: value,
              title,
              bio,
              firstName,
              lastName,
              isLeader,
              featurePosition,
              link,
              userHeadshot,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              email,
              title: value,
              bio,
              firstName,
              lastName,
              isLeader,
              featurePosition,
              link,
              userHeadshot,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Bio"
        isRequired={false}
        isReadOnly={false}
        value={bio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              email,
              title,
              bio: value,
              firstName,
              lastName,
              isLeader,
              featurePosition,
              link,
              userHeadshot,
            };
            const result = onChange(modelFields);
            value = result?.bio ?? value;
          }
          if (errors.bio?.hasError) {
            runValidationTasks("bio", value);
          }
          setBio(value);
        }}
        onBlur={() => runValidationTasks("bio", bio)}
        errorMessage={errors.bio?.errorMessage}
        hasError={errors.bio?.hasError}
        {...getOverrideProps(overrides, "bio")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              email,
              title,
              bio,
              firstName: value,
              lastName,
              isLeader,
              featurePosition,
              link,
              userHeadshot,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              email,
              title,
              bio,
              firstName,
              lastName: value,
              isLeader,
              featurePosition,
              link,
              userHeadshot,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <SwitchField
        label="Is leader"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isLeader}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              username,
              email,
              title,
              bio,
              firstName,
              lastName,
              isLeader: value,
              featurePosition,
              link,
              userHeadshot,
            };
            const result = onChange(modelFields);
            value = result?.isLeader ?? value;
          }
          if (errors.isLeader?.hasError) {
            runValidationTasks("isLeader", value);
          }
          setIsLeader(value);
        }}
        onBlur={() => runValidationTasks("isLeader", isLeader)}
        errorMessage={errors.isLeader?.errorMessage}
        hasError={errors.isLeader?.hasError}
        {...getOverrideProps(overrides, "isLeader")}
      ></SwitchField>
      <TextField
        label="Feature position"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={featurePosition}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              username,
              email,
              title,
              bio,
              firstName,
              lastName,
              isLeader,
              featurePosition: value,
              link,
              userHeadshot,
            };
            const result = onChange(modelFields);
            value = result?.featurePosition ?? value;
          }
          if (errors.featurePosition?.hasError) {
            runValidationTasks("featurePosition", value);
          }
          setFeaturePosition(value);
        }}
        onBlur={() => runValidationTasks("featurePosition", featurePosition)}
        errorMessage={errors.featurePosition?.errorMessage}
        hasError={errors.featurePosition?.hasError}
        {...getOverrideProps(overrides, "featurePosition")}
      ></TextField>
      <TextField
        label="Link"
        isRequired={false}
        isReadOnly={false}
        value={link}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              email,
              title,
              bio,
              firstName,
              lastName,
              isLeader,
              featurePosition,
              link: value,
              userHeadshot,
            };
            const result = onChange(modelFields);
            value = result?.link ?? value;
          }
          if (errors.link?.hasError) {
            runValidationTasks("link", value);
          }
          setLink(value);
        }}
        onBlur={() => runValidationTasks("link", link)}
        errorMessage={errors.link?.errorMessage}
        hasError={errors.link?.hasError}
        {...getOverrideProps(overrides, "link")}
      ></TextField>
      <TextField
        label="User headshot"
        isRequired={false}
        isReadOnly={false}
        value={userHeadshot}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              email,
              title,
              bio,
              firstName,
              lastName,
              isLeader,
              featurePosition,
              link,
              userHeadshot: value,
            };
            const result = onChange(modelFields);
            value = result?.userHeadshot ?? value;
          }
          if (errors.userHeadshot?.hasError) {
            runValidationTasks("userHeadshot", value);
          }
          setUserHeadshot(value);
        }}
        onBlur={() => runValidationTasks("userHeadshot", userHeadshot)}
        errorMessage={errors.userHeadshot?.errorMessage}
        hasError={errors.userHeadshot?.hasError}
        {...getOverrideProps(overrides, "userHeadshot")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
