/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getIcon } from "../../utils/graphql/queries";
import { updateIcon } from "../../utils/graphql/mutations";
export default function IconUpdateForm(props) {
  const {
    id: idProp,
    icon: iconModelProp,
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
    iconTitle: "",
  };
  const [src, setSrc] = React.useState(initialValues.src);
  const [alt, setAlt] = React.useState(initialValues.alt);
  const [iconTitle, setIconTitle] = React.useState(initialValues.iconTitle);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = iconRecord
      ? { ...initialValues, ...iconRecord }
      : initialValues;
    setSrc(cleanValues.src);
    setAlt(cleanValues.alt);
    setIconTitle(cleanValues.iconTitle);
    setErrors({});
  };
  const [iconRecord, setIconRecord] = React.useState(iconModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getIcon.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getIcon
        : iconModelProp;
      setIconRecord(record);
    };
    queryData();
  }, [idProp, iconModelProp]);
  React.useEffect(resetStateValues, [iconRecord]);
  const validations = {
    src: [],
    alt: [],
    iconTitle: [],
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
          src: src ?? null,
          alt: alt ?? null,
          iconTitle: iconTitle ?? null,
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
          await API.graphql({
            query: updateIcon.replaceAll("__typename", ""),
            variables: {
              input: {
                id: iconRecord.id,
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
      {...getOverrideProps(overrides, "IconUpdateForm")}
      {...rest}
    >
      <TextField
        label="Src"
        isRequired={false}
        isReadOnly={false}
        value={src}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              src: value,
              alt,
              iconTitle,
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
        isRequired={false}
        isReadOnly={false}
        value={alt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              src,
              alt: value,
              iconTitle,
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
        label="Icon title"
        isRequired={false}
        isReadOnly={false}
        value={iconTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              src,
              alt,
              iconTitle: value,
            };
            const result = onChange(modelFields);
            value = result?.iconTitle ?? value;
          }
          if (errors.iconTitle?.hasError) {
            runValidationTasks("iconTitle", value);
          }
          setIconTitle(value);
        }}
        onBlur={() => runValidationTasks("iconTitle", iconTitle)}
        errorMessage={errors.iconTitle?.errorMessage}
        hasError={errors.iconTitle?.hasError}
        {...getOverrideProps(overrides, "iconTitle")}
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
          isDisabled={!(idProp || iconModelProp)}
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
              !(idProp || iconModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}