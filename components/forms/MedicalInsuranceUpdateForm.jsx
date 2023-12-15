'use client';
/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "@/app/ui-components/utils";
import { generateClient } from "aws-amplify/api";
import { getMedicalInsurance } from "../../utils/graphql/queries";
import { updateMedicalInsurance } from "../../utils/graphql/mutations";
const client = generateClient();
export default function MedicalInsuranceUpdateForm(props) {
  const {
    id: idProp,
    medicalInsurance: medicalInsuranceModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    companyName: "",
    address: "",
    phone: "",
    groupNumber: "",
    policyNumber: "",
    policyholdersFirstName: "",
    policyholdersLastName: "",
    employer: "",
    DOB: "",
    SSN: "",
  };
  const [companyName, setCompanyName] = React.useState(
    initialValues.companyName
  );
  const [address, setAddress] = React.useState(initialValues.address);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [groupNumber, setGroupNumber] = React.useState(
    initialValues.groupNumber
  );
  const [policyNumber, setPolicyNumber] = React.useState(
    initialValues.policyNumber
  );
  const [policyholdersFirstName, setPolicyholdersFirstName] = React.useState(
    initialValues.policyholdersFirstName
  );
  const [policyholdersLastName, setPolicyholdersLastName] = React.useState(
    initialValues.policyholdersLastName
  );
  const [employer, setEmployer] = React.useState(initialValues.employer);
  const [DOB, setDOB] = React.useState(initialValues.DOB);
  const [SSN, setSSN] = React.useState(initialValues.SSN);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = medicalInsuranceRecord
      ? { ...initialValues, ...medicalInsuranceRecord }
      : initialValues;
    setCompanyName(cleanValues.companyName);
    setAddress(cleanValues.address);
    setPhone(cleanValues.phone);
    setGroupNumber(cleanValues.groupNumber);
    setPolicyNumber(cleanValues.policyNumber);
    setPolicyholdersFirstName(cleanValues.policyholdersFirstName);
    setPolicyholdersLastName(cleanValues.policyholdersLastName);
    setEmployer(cleanValues.employer);
    setDOB(cleanValues.DOB);
    setSSN(cleanValues.SSN);
    setErrors({});
  };
  const [medicalInsuranceRecord, setMedicalInsuranceRecord] = React.useState(
    medicalInsuranceModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getMedicalInsurance.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getMedicalInsurance
        : medicalInsuranceModelProp;
      setMedicalInsuranceRecord(record);
    };
    queryData();
  }, [idProp, medicalInsuranceModelProp]);
  React.useEffect(resetStateValues, [medicalInsuranceRecord]);
  const validations = {
    companyName: [],
    address: [],
    phone: [],
    groupNumber: [],
    policyNumber: [],
    policyholdersFirstName: [],
    policyholdersLastName: [],
    employer: [],
    DOB: [],
    SSN: [],
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
          companyName: companyName ?? null,
          address: address ?? null,
          phone: phone ?? null,
          groupNumber: groupNumber ?? null,
          policyNumber: policyNumber ?? null,
          policyholdersFirstName: policyholdersFirstName ?? null,
          policyholdersLastName: policyholdersLastName ?? null,
          employer: employer ?? null,
          DOB: DOB ?? null,
          SSN: SSN ?? null,
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
            query: updateMedicalInsurance.replaceAll("__typename", ""),
            variables: {
              input: {
                id: medicalInsuranceRecord.id,
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
      {...getOverrideProps(overrides, "MedicalInsuranceUpdateForm")}
      {...rest}
    >
      <TextField
        label="Company name"
        isRequired={false}
        isReadOnly={false}
        value={companyName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName: value,
              address,
              phone,
              groupNumber,
              policyNumber,
              policyholdersFirstName,
              policyholdersLastName,
              employer,
              DOB,
              SSN,
            };
            const result = onChange(modelFields);
            value = result?.companyName ?? value;
          }
          if (errors.companyName?.hasError) {
            runValidationTasks("companyName", value);
          }
          setCompanyName(value);
        }}
        onBlur={() => runValidationTasks("companyName", companyName)}
        errorMessage={errors.companyName?.errorMessage}
        hasError={errors.companyName?.hasError}
        {...getOverrideProps(overrides, "companyName")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              address: value,
              phone,
              groupNumber,
              policyNumber,
              policyholdersFirstName,
              policyholdersLastName,
              employer,
              DOB,
              SSN,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              address,
              phone: value,
              groupNumber,
              policyNumber,
              policyholdersFirstName,
              policyholdersLastName,
              employer,
              DOB,
              SSN,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Group number"
        isRequired={false}
        isReadOnly={false}
        value={groupNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              address,
              phone,
              groupNumber: value,
              policyNumber,
              policyholdersFirstName,
              policyholdersLastName,
              employer,
              DOB,
              SSN,
            };
            const result = onChange(modelFields);
            value = result?.groupNumber ?? value;
          }
          if (errors.groupNumber?.hasError) {
            runValidationTasks("groupNumber", value);
          }
          setGroupNumber(value);
        }}
        onBlur={() => runValidationTasks("groupNumber", groupNumber)}
        errorMessage={errors.groupNumber?.errorMessage}
        hasError={errors.groupNumber?.hasError}
        {...getOverrideProps(overrides, "groupNumber")}
      ></TextField>
      <TextField
        label="Policy number"
        isRequired={false}
        isReadOnly={false}
        value={policyNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              address,
              phone,
              groupNumber,
              policyNumber: value,
              policyholdersFirstName,
              policyholdersLastName,
              employer,
              DOB,
              SSN,
            };
            const result = onChange(modelFields);
            value = result?.policyNumber ?? value;
          }
          if (errors.policyNumber?.hasError) {
            runValidationTasks("policyNumber", value);
          }
          setPolicyNumber(value);
        }}
        onBlur={() => runValidationTasks("policyNumber", policyNumber)}
        errorMessage={errors.policyNumber?.errorMessage}
        hasError={errors.policyNumber?.hasError}
        {...getOverrideProps(overrides, "policyNumber")}
      ></TextField>
      <TextField
        label="Policyholders first name"
        isRequired={false}
        isReadOnly={false}
        value={policyholdersFirstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              address,
              phone,
              groupNumber,
              policyNumber,
              policyholdersFirstName: value,
              policyholdersLastName,
              employer,
              DOB,
              SSN,
            };
            const result = onChange(modelFields);
            value = result?.policyholdersFirstName ?? value;
          }
          if (errors.policyholdersFirstName?.hasError) {
            runValidationTasks("policyholdersFirstName", value);
          }
          setPolicyholdersFirstName(value);
        }}
        onBlur={() =>
          runValidationTasks("policyholdersFirstName", policyholdersFirstName)
        }
        errorMessage={errors.policyholdersFirstName?.errorMessage}
        hasError={errors.policyholdersFirstName?.hasError}
        {...getOverrideProps(overrides, "policyholdersFirstName")}
      ></TextField>
      <TextField
        label="Policyholders last name"
        isRequired={false}
        isReadOnly={false}
        value={policyholdersLastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              address,
              phone,
              groupNumber,
              policyNumber,
              policyholdersFirstName,
              policyholdersLastName: value,
              employer,
              DOB,
              SSN,
            };
            const result = onChange(modelFields);
            value = result?.policyholdersLastName ?? value;
          }
          if (errors.policyholdersLastName?.hasError) {
            runValidationTasks("policyholdersLastName", value);
          }
          setPolicyholdersLastName(value);
        }}
        onBlur={() =>
          runValidationTasks("policyholdersLastName", policyholdersLastName)
        }
        errorMessage={errors.policyholdersLastName?.errorMessage}
        hasError={errors.policyholdersLastName?.hasError}
        {...getOverrideProps(overrides, "policyholdersLastName")}
      ></TextField>
      <TextField
        label="Employer"
        isRequired={false}
        isReadOnly={false}
        value={employer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              address,
              phone,
              groupNumber,
              policyNumber,
              policyholdersFirstName,
              policyholdersLastName,
              employer: value,
              DOB,
              SSN,
            };
            const result = onChange(modelFields);
            value = result?.employer ?? value;
          }
          if (errors.employer?.hasError) {
            runValidationTasks("employer", value);
          }
          setEmployer(value);
        }}
        onBlur={() => runValidationTasks("employer", employer)}
        errorMessage={errors.employer?.errorMessage}
        hasError={errors.employer?.hasError}
        {...getOverrideProps(overrides, "employer")}
      ></TextField>
      <TextField
        label="Dob"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={DOB}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              address,
              phone,
              groupNumber,
              policyNumber,
              policyholdersFirstName,
              policyholdersLastName,
              employer,
              DOB: value,
              SSN,
            };
            const result = onChange(modelFields);
            value = result?.DOB ?? value;
          }
          if (errors.DOB?.hasError) {
            runValidationTasks("DOB", value);
          }
          setDOB(value);
        }}
        onBlur={() => runValidationTasks("DOB", DOB)}
        errorMessage={errors.DOB?.errorMessage}
        hasError={errors.DOB?.hasError}
        {...getOverrideProps(overrides, "DOB")}
      ></TextField>
      <TextField
        label="Ssn"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={SSN}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              companyName,
              address,
              phone,
              groupNumber,
              policyNumber,
              policyholdersFirstName,
              policyholdersLastName,
              employer,
              DOB,
              SSN: value,
            };
            const result = onChange(modelFields);
            value = result?.SSN ?? value;
          }
          if (errors.SSN?.hasError) {
            runValidationTasks("SSN", value);
          }
          setSSN(value);
        }}
        onBlur={() => runValidationTasks("SSN", SSN)}
        errorMessage={errors.SSN?.errorMessage}
        hasError={errors.SSN?.hasError}
        {...getOverrideProps(overrides, "SSN")}
      ></TextField>
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
          isDisabled={!(idProp || medicalInsuranceModelProp)}
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
              !(idProp || medicalInsuranceModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
