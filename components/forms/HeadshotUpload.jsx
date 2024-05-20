'use client';
/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import {
  fetchByPath,
  getOverrideProps,
  processFile,
  validateField,
} from "@/app/ui-components/utils";
import { generateClient } from "aws-amplify/api";
import { getUser } from "../../utils/graphql/queries";
import { updateUser } from "../../utils/graphql/mutations";
import { Field } from "@aws-amplify/ui-react/internal";
import { useRouter } from "next/navigation";
const client = generateClient();
export default function HeadshotUpload(props) {
  const router = useRouter();
  const {
    id: idProp,
    user: userModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Field0: undefined,
    userHeadshot: "",
  };
  const [Field0, setField0] = React.useState(initialValues.Field0);
  const [userHeadshot, setUserHeadshot] = React.useState(
    initialValues.userHeadshot
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userRecord
      ? { ...initialValues, ...userRecord }
      : initialValues;
    setField0(cleanValues.Field0);
    setUserHeadshot(cleanValues.userHeadshot);
    setErrors({});
  };
  const [userRecord, setUserRecord] = React.useState(userModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUser.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUser
        : userModelProp;
      setUserRecord(record);
    };
    queryData();
  }, [idProp, userModelProp]);
  React.useEffect(resetStateValues, [userRecord]);
  const validations = {
    Field0: [],
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
          Field0: Field0 ?? null,
          userHeadshot: userHeadshot ?? null,
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
          const modelFieldsToSave = {
            userHeadshot: modelFields.userHeadshot ?? null,
          };
          await client.graphql({
            query: updateUser.replaceAll("__typename", ""),
            variables: {
              input: {
                id: userRecord.id,
                ...modelFieldsToSave,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
            revalidatePath('/dashboard/profile', 'page')
            router.push('/dashboard/profile')
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "HeadshotUpload")}
      {...rest}
    >
      <Field
        errorMessage={errors.Field0?.errorMessage}
        hasError={errors.Field0?.hasError}
        label={"Headshot"}
        isRequired={false}
      >
        {userRecord && (
          <StorageManager
            defaultFiles={[{ key: userRecord.Field0 }]}
            onUploadSuccess={({ key }) => {
              setField0((prev) => {
                let value = key;
                if (onChange) {
                  const modelFields = {
                    Field0: value,
                    userHeadshot,
                  };
                  const result = onChange(modelFields);
                  value = result?.Field0 ?? value;
                }
                return value;
              });
            }}
            onFileRemove={({ key }) => {
              setField0((prev) => {
                let value = initialValues?.Field0;
                if (onChange) {
                  const modelFields = {
                    Field0: value,
                    userHeadshot,
                  };
                  const result = onChange(modelFields);
                  value = result?.Field0 ?? value;
                }
                return value;
              });
            }}
            processFile={processFile}
            accessLevel={"protected"}
            acceptedFileTypes={["image/*"]}
            isResumable={false}
            showThumbnails={true}
            maxFileCount={1}
            {...getOverrideProps(overrides, "Field0")}
          ></StorageManager>
        )}
      </Field>
      <TextField
        label="User headshot"
        isRequired={false}
        isReadOnly={false}
        value={userHeadshot}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field0,
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
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || userModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
