/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FeatureFeedbackCreateFormInputValues = {
    date?: string;
    layoutDesign?: string;
    functionality?: string;
    formFields?: string;
    featureRequest?: string;
    other?: string;
    isComplete?: boolean;
};
export declare type FeatureFeedbackCreateFormValidationValues = {
    date?: ValidationFunction<string>;
    layoutDesign?: ValidationFunction<string>;
    functionality?: ValidationFunction<string>;
    formFields?: ValidationFunction<string>;
    featureRequest?: ValidationFunction<string>;
    other?: ValidationFunction<string>;
    isComplete?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeatureFeedbackCreateFormOverridesProps = {
    FeatureFeedbackCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    layoutDesign?: PrimitiveOverrideProps<TextFieldProps>;
    functionality?: PrimitiveOverrideProps<TextFieldProps>;
    formFields?: PrimitiveOverrideProps<TextFieldProps>;
    featureRequest?: PrimitiveOverrideProps<TextFieldProps>;
    other?: PrimitiveOverrideProps<TextFieldProps>;
    isComplete?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type FeatureFeedbackCreateFormProps = React.PropsWithChildren<{
    overrides?: FeatureFeedbackCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FeatureFeedbackCreateFormInputValues) => FeatureFeedbackCreateFormInputValues;
    onSuccess?: (fields: FeatureFeedbackCreateFormInputValues) => void;
    onError?: (fields: FeatureFeedbackCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FeatureFeedbackCreateFormInputValues) => FeatureFeedbackCreateFormInputValues;
    onValidate?: FeatureFeedbackCreateFormValidationValues;
} & React.CSSProperties>;
export default function FeatureFeedbackCreateForm(props: FeatureFeedbackCreateFormProps): React.ReactElement;
