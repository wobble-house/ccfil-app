/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
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
export declare type FeatureFeedbackFormInputValues = {
    layoutDesign?: string;
    functionality?: string;
    formFields?: string;
    featureRequest?: string;
    other?: string;
};
export declare type FeatureFeedbackFormValidationValues = {
    layoutDesign?: ValidationFunction<string>;
    functionality?: ValidationFunction<string>;
    formFields?: ValidationFunction<string>;
    featureRequest?: ValidationFunction<string>;
    other?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeatureFeedbackFormOverridesProps = {
    FeatureFeedbackFormGrid?: PrimitiveOverrideProps<GridProps>;
    layoutDesign?: PrimitiveOverrideProps<TextAreaFieldProps>;
    functionality?: PrimitiveOverrideProps<TextAreaFieldProps>;
    formFields?: PrimitiveOverrideProps<TextAreaFieldProps>;
    featureRequest?: PrimitiveOverrideProps<TextAreaFieldProps>;
    other?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type FeatureFeedbackFormProps = React.PropsWithChildren<{
    overrides?: FeatureFeedbackFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FeatureFeedbackFormInputValues) => FeatureFeedbackFormInputValues;
    onSuccess?: (fields: FeatureFeedbackFormInputValues) => void;
    onError?: (fields: FeatureFeedbackFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FeatureFeedbackFormInputValues) => FeatureFeedbackFormInputValues;
    onValidate?: FeatureFeedbackFormValidationValues;
} & React.CSSProperties>;
export default function FeatureFeedbackForm(props: FeatureFeedbackFormProps): React.ReactElement;
