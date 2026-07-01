/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { FeatureFeedback } from "../utils/graphql/API.ts";
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
export declare type FeatureFeedbackUpdateFormInputValues = {
    date?: string;
    layoutDesign?: string;
    functionality?: string;
    formFields?: string;
    featureRequest?: string;
    other?: string;
    isComplete?: boolean;
};
export declare type FeatureFeedbackUpdateFormValidationValues = {
    date?: ValidationFunction<string>;
    layoutDesign?: ValidationFunction<string>;
    functionality?: ValidationFunction<string>;
    formFields?: ValidationFunction<string>;
    featureRequest?: ValidationFunction<string>;
    other?: ValidationFunction<string>;
    isComplete?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeatureFeedbackUpdateFormOverridesProps = {
    FeatureFeedbackUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    layoutDesign?: PrimitiveOverrideProps<TextFieldProps>;
    functionality?: PrimitiveOverrideProps<TextFieldProps>;
    formFields?: PrimitiveOverrideProps<TextFieldProps>;
    featureRequest?: PrimitiveOverrideProps<TextFieldProps>;
    other?: PrimitiveOverrideProps<TextFieldProps>;
    isComplete?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type FeatureFeedbackUpdateFormProps = React.PropsWithChildren<{
    overrides?: FeatureFeedbackUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    featureFeedback?: FeatureFeedback;
    onSubmit?: (fields: FeatureFeedbackUpdateFormInputValues) => FeatureFeedbackUpdateFormInputValues;
    onSuccess?: (fields: FeatureFeedbackUpdateFormInputValues) => void;
    onError?: (fields: FeatureFeedbackUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FeatureFeedbackUpdateFormInputValues) => FeatureFeedbackUpdateFormInputValues;
    onValidate?: FeatureFeedbackUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FeatureFeedbackUpdateForm(props: FeatureFeedbackUpdateFormProps): React.ReactElement;
