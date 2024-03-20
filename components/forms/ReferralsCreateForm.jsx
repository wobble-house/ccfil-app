'use client';
/* eslint-disable */
import * as React from "react";
import { revalidatePath } from "next/cache";
import { Button,Grid,TextField} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "@/app/ui-components/utils";
import { generateClient } from "aws-amplify/api";
import { createReferrals } from "../../utils/graphql/mutations";
import { useRouter } from "next/navigation";
const client = generateClient();
export default function ReferralsCreateForm(props) {
  const router = useRouter();
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
    source: "",
    name: "",
    followUp: "",
    currentResident: false,
    DOADate: "",
    reasonForDecline: "",
    howDidYouHearAboutUs: "",
    assistanceProvided: "",
  };
  const [date, setDate] = React.useState(initialValues.date);
  const [source, setSource] = React.useState(initialValues.source);
  const [name, setName] = React.useState(initialValues.name);
  const [followUp, setFollowUp] = React.useState(initialValues.followUp);
  const [currentResident, setCurrentResident] = React.useState(
    initialValues.currentResident
  );
  const [DOADate, setDOADate] = React.useState(initialValues.DOADate);
  const [reasonForDecline, setReasonForDecline] = React.useState(
    initialValues.reasonForDecline
  );
  const [howDidYouHearAboutUs, setHowDidYouHearAboutUs] = React.useState(
    initialValues.howDidYouHearAboutUs
  );
  const [assistanceProvided, setAssistanceProvided] = React.useState(
    initialValues.assistanceProvided
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDate(initialValues.date);
    setSource(initialValues.source);
    setName(initialValues.name);
    setFollowUp(initialValues.followUp);
    setCurrentResident(initialValues.currentResident);
    setDOADate(initialValues.DOADate);
    setReasonForDecline(initialValues.reasonForDecline);
    setHowDidYouHearAboutUs(initialValues.howDidYouHearAboutUs);
    setAssistanceProvided(initialValues.assistanceProvided);
    setErrors({});
  };
  const validations = {
    date: [],
    source: [],
    name: [],
    followUp: [],
    currentResident: [],
    DOADate: [],
    reasonForDecline: [],
    howDidYouHearAboutUs: [],
    assistanceProvided: [],
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
      className="bg-white bg-opacity-75 rounded-md"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          date,
          source,
          name,
          followUp,
          currentResident,
          DOADate,
          reasonForDecline,
          howDidYouHearAboutUs,
          assistanceProvided,
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
            query: createReferrals.replaceAll("__typename", ""),
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
            revalidatePath('/dashboard', 'page')
            router.push('/dashboard')
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ReferralsCreateForm")}
      {...rest}
    >
      <h2>Referrals</h2>
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
              source,
              name,
              followUp,
              currentResident,
              DOADate,
              reasonForDecline,
              howDidYouHearAboutUs,
              assistanceProvided,
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
        label="Source"
        isRequired={false}
        isReadOnly={false}
        value={source}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              source: value,
              name,
              followUp,
              currentResident,
              DOADate,
              reasonForDecline,
              howDidYouHearAboutUs,
              assistanceProvided,
            };
            const result = onChange(modelFields);
            value = result?.source ?? value;
          }
          if (errors.source?.hasError) {
            runValidationTasks("source", value);
          }
          setSource(value);
        }}
        onBlur={() => runValidationTasks("source", source)}
        errorMessage={errors.source?.errorMessage}
        hasError={errors.source?.hasError}
        {...getOverrideProps(overrides, "source")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              source,
              name: value,
              followUp,
              currentResident,
              DOADate,
              reasonForDecline,
              howDidYouHearAboutUs,
              assistanceProvided,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="How did you hear about us"
        isRequired={false}
        isReadOnly={false}
        value={howDidYouHearAboutUs}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              source,
              name,
              followUp,
              currentResident,
              DOADate,
              reasonForDecline,
              howDidYouHearAboutUs: value,
              assistanceProvided,
            };
            const result = onChange(modelFields);
            value = result?.howDidYouHearAboutUs ?? value;
          }
          if (errors.howDidYouHearAboutUs?.hasError) {
            runValidationTasks("howDidYouHearAboutUs", value);
          }
          setHowDidYouHearAboutUs(value);
        }}
        onBlur={() =>
          runValidationTasks("howDidYouHearAboutUs", howDidYouHearAboutUs)
        }
        errorMessage={errors.howDidYouHearAboutUs?.errorMessage}
        hasError={errors.howDidYouHearAboutUs?.hasError}
        {...getOverrideProps(overrides, "howDidYouHearAboutUs")}
      ></TextField>
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
