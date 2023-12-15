'use client';
/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, SwitchField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "@/app/ui-components/utils";
import { generateClient } from "aws-amplify/api";
import { getInsuranceOrderType } from "../../utils/graphql/queries";
import { updateInsuranceOrderType } from "../../utils/graphql/mutations";
const client = generateClient();
export default function InsuranceOrderTypeUpdateForm(props) {
  const {
    id: idProp,
    insuranceOrderType: insuranceOrderTypeModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    primary: false,
    secondary: false,
  };
  const [primary, setPrimary] = React.useState(initialValues.primary);
  const [secondary, setSecondary] = React.useState(initialValues.secondary);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = insuranceOrderTypeRecord
      ? { ...initialValues, ...insuranceOrderTypeRecord }
      : initialValues;
    setPrimary(cleanValues.primary);
    setSecondary(cleanValues.secondary);
    setErrors({});
  };
  const [insuranceOrderTypeRecord, setInsuranceOrderTypeRecord] =
    React.useState(insuranceOrderTypeModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getInsuranceOrderType.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getInsuranceOrderType
        : insuranceOrderTypeModelProp;
      setInsuranceOrderTypeRecord(record);
    };
    queryData();
  }, [idProp, insuranceOrderTypeModelProp]);
  React.useEffect(resetStateValues, [insuranceOrderTypeRecord]);
  const validations = {
    primary: [],
    secondary: [],
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
          primary: primary ?? null,
          secondary: secondary ?? null,
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
            query: updateInsuranceOrderType.replaceAll("__typename", ""),
            variables: {
              input: {
                id: insuranceOrderTypeRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "InsuranceOrderTypeUpdateForm")}
      {...rest}
    >
      <SwitchField
        label="Primary"
        defaultChecked={false}
        isDisabled={false}
        isChecked={primary}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              primary: value,
              secondary,
            };
            const result = onChange(modelFields);
            value = result?.primary ?? value;
          }
          if (errors.primary?.hasError) {
            runValidationTasks("primary", value);
          }
          setPrimary(value);
        }}
        onBlur={() => runValidationTasks("primary", primary)}
        errorMessage={errors.primary?.errorMessage}
        hasError={errors.primary?.hasError}
        {...getOverrideProps(overrides, "primary")}
      ></SwitchField>
      <SwitchField
        label="Secondary"
        defaultChecked={false}
        isDisabled={false}
        isChecked={secondary}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              primary,
              secondary: value,
            };
            const result = onChange(modelFields);
            value = result?.secondary ?? value;
          }
          if (errors.secondary?.hasError) {
            runValidationTasks("secondary", value);
          }
          setSecondary(value);
        }}
        onBlur={() => runValidationTasks("secondary", secondary)}
        errorMessage={errors.secondary?.errorMessage}
        hasError={errors.secondary?.hasError}
        {...getOverrideProps(overrides, "secondary")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || insuranceOrderTypeModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || insuranceOrderTypeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
