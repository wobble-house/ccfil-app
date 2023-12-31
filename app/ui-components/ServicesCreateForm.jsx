/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createServices } from "../../utils/graphql/mutations";
const client = generateClient();
export default function ServicesCreateForm(props) {
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
    serviceTitle: "",
    serviceBodyText: "",
  };
  const [serviceTitle, setServiceTitle] = React.useState(
    initialValues.serviceTitle
  );
  const [serviceBodyText, setServiceBodyText] = React.useState(
    initialValues.serviceBodyText
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setServiceTitle(initialValues.serviceTitle);
    setServiceBodyText(initialValues.serviceBodyText);
    setErrors({});
  };
  const validations = {
    serviceTitle: [],
    serviceBodyText: [],
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
          serviceTitle,
          serviceBodyText,
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
            query: createServices.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "ServicesCreateForm")}
      {...rest}
    >
      <TextField
        label="Service title"
        isRequired={false}
        isReadOnly={false}
        value={serviceTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceTitle: value,
              serviceBodyText,
            };
            const result = onChange(modelFields);
            value = result?.serviceTitle ?? value;
          }
          if (errors.serviceTitle?.hasError) {
            runValidationTasks("serviceTitle", value);
          }
          setServiceTitle(value);
        }}
        onBlur={() => runValidationTasks("serviceTitle", serviceTitle)}
        errorMessage={errors.serviceTitle?.errorMessage}
        hasError={errors.serviceTitle?.hasError}
        {...getOverrideProps(overrides, "serviceTitle")}
      ></TextField>
      <TextField
        label="Service body text"
        isRequired={false}
        isReadOnly={false}
        value={serviceBodyText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceTitle,
              serviceBodyText: value,
            };
            const result = onChange(modelFields);
            value = result?.serviceBodyText ?? value;
          }
          if (errors.serviceBodyText?.hasError) {
            runValidationTasks("serviceBodyText", value);
          }
          setServiceBodyText(value);
        }}
        onBlur={() => runValidationTasks("serviceBodyText", serviceBodyText)}
        errorMessage={errors.serviceBodyText?.errorMessage}
        hasError={errors.serviceBodyText?.hasError}
        {...getOverrideProps(overrides, "serviceBodyText")}
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
