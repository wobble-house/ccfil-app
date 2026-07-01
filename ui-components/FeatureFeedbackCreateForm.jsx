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
import { createFeatureFeedback } from "../utils/graphql/mutations";
const client = generateClient();
export default function FeatureFeedbackCreateForm(props) {
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
    date: "",
    layoutDesign: "",
    functionality: "",
    formFields: "",
    featureRequest: "",
    other: "",
    isComplete: false,
  };
  const [date, setDate] = React.useState(initialValues.date);
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
  const [isComplete, setIsComplete] = React.useState(initialValues.isComplete);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDate(initialValues.date);
    setLayoutDesign(initialValues.layoutDesign);
    setFunctionality(initialValues.functionality);
    setFormFields(initialValues.formFields);
    setFeatureRequest(initialValues.featureRequest);
    setOther(initialValues.other);
    setIsComplete(initialValues.isComplete);
    setErrors({});
  };
  const validations = {
    date: [],
    layoutDesign: [],
    functionality: [],
    formFields: [],
    featureRequest: [],
    other: [],
    isComplete: [],
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
          date,
          layoutDesign,
          functionality,
          formFields,
          featureRequest,
          other,
          isComplete,
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
      {...getOverrideProps(overrides, "FeatureFeedbackCreateForm")}
      {...rest}
    >
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date: value,
              layoutDesign,
              functionality,
              formFields,
              featureRequest,
              other,
              isComplete,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Layout design"
        isRequired={false}
        isReadOnly={false}
        value={layoutDesign}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              layoutDesign: value,
              functionality,
              formFields,
              featureRequest,
              other,
              isComplete,
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
      ></TextField>
      <TextField
        label="Functionality"
        isRequired={false}
        isReadOnly={false}
        value={functionality}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              layoutDesign,
              functionality: value,
              formFields,
              featureRequest,
              other,
              isComplete,
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
      ></TextField>
      <TextField
        label="Form fields"
        isRequired={false}
        isReadOnly={false}
        value={formFields}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              layoutDesign,
              functionality,
              formFields: value,
              featureRequest,
              other,
              isComplete,
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
      ></TextField>
      <TextField
        label="Feature request"
        isRequired={false}
        isReadOnly={false}
        value={featureRequest}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              layoutDesign,
              functionality,
              formFields,
              featureRequest: value,
              other,
              isComplete,
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
      ></TextField>
      <TextField
        label="Other"
        isRequired={false}
        isReadOnly={false}
        value={other}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              layoutDesign,
              functionality,
              formFields,
              featureRequest,
              other: value,
              isComplete,
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
      ></TextField>
      <SwitchField
        label="Is complete"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isComplete}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              date,
              layoutDesign,
              functionality,
              formFields,
              featureRequest,
              other,
              isComplete: value,
            };
            const result = onChange(modelFields);
            value = result?.isComplete ?? value;
          }
          if (errors.isComplete?.hasError) {
            runValidationTasks("isComplete", value);
          }
          setIsComplete(value);
        }}
        onBlur={() => runValidationTasks("isComplete", isComplete)}
        errorMessage={errors.isComplete?.errorMessage}
        hasError={errors.isComplete?.hasError}
        {...getOverrideProps(overrides, "isComplete")}
      ></SwitchField>
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
