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
import { getHeadshot } from "../../utils/graphql/queries";
import { updateHeadshot } from "../../utils/graphql/mutations";
const client = generateClient();
export default function HeadshotUpdateForm(props) {
  const {
    id: idProp,
    headshot: headshotModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    src: "",
    alt: "",
    imageTitle: "",
  };
  const [src, setSrc] = React.useState(initialValues.src);
  const [alt, setAlt] = React.useState(initialValues.alt);
  const [imageTitle, setImageTitle] = React.useState(initialValues.imageTitle);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = headshotRecord
      ? { ...initialValues, ...headshotRecord }
      : initialValues;
    setSrc(cleanValues.src);
    setAlt(cleanValues.alt);
    setImageTitle(cleanValues.imageTitle);
    setErrors({});
  };
  const [headshotRecord, setHeadshotRecord] = React.useState(headshotModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getHeadshot.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getHeadshot
        : headshotModelProp;
      setHeadshotRecord(record);
    };
    queryData();
  }, [idProp, headshotModelProp]);
  React.useEffect(resetStateValues, [headshotRecord]);
  const validations = {
    src: [{ type: "Required" }],
    alt: [{ type: "Required" }],
    imageTitle: [],
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
          src,
          alt,
          imageTitle: imageTitle ?? null,
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
            query: updateHeadshot.replaceAll("__typename", ""),
            variables: {
              input: {
                id: headshotRecord.id,
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
      {...getOverrideProps(overrides, "HeadshotUpdateForm")}
      {...rest}
    >
      <TextField
        label="Src"
        isRequired={true}
        isReadOnly={false}
        value={src}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              src: value,
              alt,
              imageTitle,
            };
            const result = onChange(modelFields);
            value = result?.src ?? value;
          }
          if (errors.src?.hasError) {
            runValidationTasks("src", value);
          }
          setSrc(value);
        }}
        onBlur={() => runValidationTasks("src", src)}
        errorMessage={errors.src?.errorMessage}
        hasError={errors.src?.hasError}
        {...getOverrideProps(overrides, "src")}
      ></TextField>
      <TextField
        label="Alt"
        isRequired={true}
        isReadOnly={false}
        value={alt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              src,
              alt: value,
              imageTitle,
            };
            const result = onChange(modelFields);
            value = result?.alt ?? value;
          }
          if (errors.alt?.hasError) {
            runValidationTasks("alt", value);
          }
          setAlt(value);
        }}
        onBlur={() => runValidationTasks("alt", alt)}
        errorMessage={errors.alt?.errorMessage}
        hasError={errors.alt?.hasError}
        {...getOverrideProps(overrides, "alt")}
      ></TextField>
      <TextField
        label="Image title"
        isRequired={false}
        isReadOnly={false}
        value={imageTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              src,
              alt,
              imageTitle: value,
            };
            const result = onChange(modelFields);
            value = result?.imageTitle ?? value;
          }
          if (errors.imageTitle?.hasError) {
            runValidationTasks("imageTitle", value);
          }
          setImageTitle(value);
        }}
        onBlur={() => runValidationTasks("imageTitle", imageTitle)}
        errorMessage={errors.imageTitle?.errorMessage}
        hasError={errors.imageTitle?.hasError}
        {...getOverrideProps(overrides, "imageTitle")}
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
          isDisabled={!(idProp || headshotModelProp)}
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
              !(idProp || headshotModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
