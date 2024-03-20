'use client';
/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextAreaField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "@/app/ui-components/utils";
import { generateClient } from "aws-amplify/api";
import { createFeatureFeedback } from "../../utils/graphql/mutations";
const client = generateClient();
export default function FeatureFeedbackForm(props) {
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
    layoutDesign: "",
    functionality: "",
    formFields: "",
    featureRequest: "",
    other: "",
  };
  const [layoutDesign, setLayoutDesign] = React.useState(
    initialValues.layoutDesign
  );
  const [functionality, setFunctionality] = React.useState(
    initialValues.functionality
  );
  const [formFields, setFormFields] = React.useState(initialValues.formFields);
  const [featureRequest, setFeatureRequest] = React.useState(
    initialValues.featureRequest
  );
  const [other, setOther] = React.useState(initialValues.other);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setLayoutDesign(initialValues.layoutDesign);
    setFunctionality(initialValues.functionality);
    setFormFields(initialValues.formFields);
    setFeatureRequest(initialValues.featureRequest);
    setOther(initialValues.other);
    setErrors({});
  };
  const validations = {
    layoutDesign: [],
    functionality: [],
    formFields: [],
    featureRequest: [],
    other: [],
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
      className="flex flex-col bg-white bg-opacity-75 rounded-md justify-end w-[400px] mb-20"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          layoutDesign,
          functionality,
          formFields,
          featureRequest,
          other,
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
            query: createFeatureFeedback.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "FeatureFeedbackForm")}
      {...rest}
    >
      <h2>Feature Feedback</h2>
      <TextAreaField
      className={`flex flex-col`}
        label="Layout design"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              layoutDesign: value,
              functionality,
              formFields,
              featureRequest,
              other,
            };
            const result = onChange(modelFields);
            value = result?.layoutDesign ?? value;
          }
          if (errors.layoutDesign?.hasError) {
            runValidationTasks("layoutDesign", value);
          }
          setLayoutDesign(value);
        }}
        onBlur={() => runValidationTasks("layoutDesign", layoutDesign)}
        errorMessage={errors.layoutDesign?.errorMessage}
        hasError={errors.layoutDesign?.hasError}
        {...getOverrideProps(overrides, "layoutDesign")}
      ></TextAreaField>
      <TextAreaField
      className={`flex flex-col`}
        label="Functionality"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              layoutDesign,
              functionality: value,
              formFields,
              featureRequest,
              other,
            };
            const result = onChange(modelFields);
            value = result?.functionality ?? value;
          }
          if (errors.functionality?.hasError) {
            runValidationTasks("functionality", value);
          }
          setFunctionality(value);
        }}
        onBlur={() => runValidationTasks("functionality", functionality)}
        errorMessage={errors.functionality?.errorMessage}
        hasError={errors.functionality?.hasError}
        {...getOverrideProps(overrides, "functionality")}
      ></TextAreaField>
      <TextAreaField
      className={`flex flex-col`}
        label="Form fields"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              layoutDesign,
              functionality,
              formFields: value,
              featureRequest,
              other,
            };
            const result = onChange(modelFields);
            value = result?.formFields ?? value;
          }
          if (errors.formFields?.hasError) {
            runValidationTasks("formFields", value);
          }
          setFormFields(value);
        }}
        onBlur={() => runValidationTasks("formFields", formFields)}
        errorMessage={errors.formFields?.errorMessage}
        hasError={errors.formFields?.hasError}
        {...getOverrideProps(overrides, "formFields")}
      ></TextAreaField>
      <TextAreaField
      className={`flex flex-col`}
        label="Feature request"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              layoutDesign,
              functionality,
              formFields,
              featureRequest: value,
              other,
            };
            const result = onChange(modelFields);
            value = result?.featureRequest ?? value;
          }
          if (errors.featureRequest?.hasError) {
            runValidationTasks("featureRequest", value);
          }
          setFeatureRequest(value);
        }}
        onBlur={() => runValidationTasks("featureRequest", featureRequest)}
        errorMessage={errors.featureRequest?.errorMessage}
        hasError={errors.featureRequest?.hasError}
        {...getOverrideProps(overrides, "featureRequest")}
      ></TextAreaField>
      <TextAreaField
      className={`flex flex-col`}
        label="Other"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              layoutDesign,
              functionality,
              formFields,
              featureRequest,
              other: value,
            };
            const result = onChange(modelFields);
            value = result?.other ?? value;
          }
          if (errors.other?.hasError) {
            runValidationTasks("other", value);
          }
          setOther(value);
        }}
        onBlur={() => runValidationTasks("other", other)}
        errorMessage={errors.other?.errorMessage}
        hasError={errors.other?.hasError}
        {...getOverrideProps(overrides, "other")}
      ></TextAreaField>
        <div className={`flex flex-row justify-between p-4`}>
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
          </div>
    </Grid>
  );
}
