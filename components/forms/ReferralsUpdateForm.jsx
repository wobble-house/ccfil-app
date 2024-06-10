
/* eslint-disable */
'use client'
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "@/app/ui-components/utils";
import { generateClient } from "aws-amplify/api";
import { getReferrals } from "../../utils/graphql/queries";
import { updateReferrals } from "../../utils/graphql/mutations";
import { useRouter } from "next/navigation";
const client = generateClient();
export default function ReferralsUpdateForm(props) {
  const router = useRouter();
  const {
    id: idProp,
    referrals: referralsModelProp,
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
    const cleanValues = referralsRecord
      ? { ...initialValues, ...referralsRecord }
      : initialValues;
    setDate(cleanValues.date);
    setSource(cleanValues.source);
    setName(cleanValues.name);
    setFollowUp(cleanValues.followUp);
    setDOADate(cleanValues.DOADate);
    setReasonForDecline(cleanValues.reasonForDecline);
    setHowDidYouHearAboutUs(cleanValues.howDidYouHearAboutUs);
    setAssistanceProvided(cleanValues.assistanceProvided);
    setErrors({});
  };
  const [referralsRecord, setReferralsRecord] =
    React.useState(referralsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getReferrals.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getReferrals
        : referralsModelProp;
      setReferralsRecord(record);
    };
    queryData();
  }, [idProp, referralsModelProp]);
  React.useEffect(resetStateValues, [referralsRecord]);
  const validations = {
    date: [],
    source: [],
    name: [],
    followUp: [],
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
      className="px-4"
      as="form"
      rowGap="15px"
      columnGap="15px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          date: date ?? null,
          source: source ?? null,
          name: name ?? null,
          followUp: followUp ?? null,
          DOADate: DOADate ?? null,
          reasonForDecline: reasonForDecline ?? null,
          howDidYouHearAboutUs: howDidYouHearAboutUs ?? null,
          assistanceProvided: assistanceProvided ?? null,
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
            query: updateReferrals.replaceAll("__typename", ""),
            variables: {
              input: {
                id: referralsRecord.id,
                ...modelFields,
              },
            },
          }).then(router.refresh());
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }
    }
      {...getOverrideProps(overrides, "ReferralsUpdateForm")}
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
        label="Follow up"
        isRequired={false}
        isReadOnly={false}
        value={followUp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              source,
              name,
              followUp: value,
              currentResident,
              DOADate,
              reasonForDecline,
              howDidYouHearAboutUs,
              assistanceProvided,
            };
            const result = onChange(modelFields);
            value = result?.followUp ?? value;
          }
          if (errors.followUp?.hasError) {
            runValidationTasks("followUp", value);
          }
          setFollowUp(value);
        }}
        onBlur={() => runValidationTasks("followUp", followUp)}
        errorMessage={errors.followUp?.errorMessage}
        hasError={errors.followUp?.hasError}
        {...getOverrideProps(overrides, "followUp")}
      ></TextField>
            <TextField
        label="DOA/DOD"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={DOADate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              source,
              name,
              followUp,
              currentResident,
              DOADate: value,
              reasonForDecline,
              howDidYouHearAboutUs,
              assistanceProvided,
            };
            const result = onChange(modelFields);
            value = result?.DOADate ?? value;
          }
          if (errors.DOADate?.hasError) {
            runValidationTasks("DOADate", value);
          }
          setDOADate(value);
        }}
        onBlur={() => runValidationTasks("DOADate", DOADate)}
        errorMessage={errors.DOADate?.errorMessage}
        hasError={errors.DOADate?.hasError}
        {...getOverrideProps(overrides, "DOADate")}
      ></TextField>
      <TextField
        label="Reason for decline"
        isRequired={false}
        isReadOnly={false}
        value={reasonForDecline}
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
              reasonForDecline: value,
              howDidYouHearAboutUs,
              assistanceProvided,
            };
            const result = onChange(modelFields);
            value = result?.reasonForDecline ?? value;
          }
          if (errors.reasonForDecline?.hasError) {
            runValidationTasks("reasonForDecline", value);
          }
          setReasonForDecline(value);
        }}
        onBlur={() => runValidationTasks("reasonForDecline", reasonForDecline)}
        errorMessage={errors.reasonForDecline?.errorMessage}
        hasError={errors.reasonForDecline?.hasError}
        {...getOverrideProps(overrides, "reasonForDecline")}
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
      <TextField
        label="Assistance provided"
        isRequired={false}
        isReadOnly={false}
        value={assistanceProvided}
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
              howDidYouHearAboutUs,
              assistanceProvided: value,
            };
            const result = onChange(modelFields);
            value = result?.assistanceProvided ?? value;
          }
          if (errors.assistanceProvided?.hasError) {
            runValidationTasks("assistanceProvided", value);
          }
          setAssistanceProvided(value);
        }}
        onBlur={() =>
          runValidationTasks("assistanceProvided", assistanceProvided)
        }
        errorMessage={errors.assistanceProvided?.errorMessage}
        hasError={errors.assistanceProvided?.hasError}
        {...getOverrideProps(overrides, "assistanceProvided")}
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
            className="py-2 my-2"
            children="Update"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || referralsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
