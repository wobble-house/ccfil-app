/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type HeadshotCreateFormInputValues = {
    src?: string;
    alt?: string;
    imageTitle?: string;
};
export declare type HeadshotCreateFormValidationValues = {
    src?: ValidationFunction<string>;
    alt?: ValidationFunction<string>;
    imageTitle?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeadshotCreateFormOverridesProps = {
    HeadshotCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    src?: PrimitiveOverrideProps<TextFieldProps>;
    alt?: PrimitiveOverrideProps<TextFieldProps>;
    imageTitle?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HeadshotCreateFormProps = React.PropsWithChildren<{
    overrides?: HeadshotCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HeadshotCreateFormInputValues) => HeadshotCreateFormInputValues;
    onSuccess?: (fields: HeadshotCreateFormInputValues) => void;
    onError?: (fields: HeadshotCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HeadshotCreateFormInputValues) => HeadshotCreateFormInputValues;
    onValidate?: HeadshotCreateFormValidationValues;
} & React.CSSProperties>;
export default function HeadshotCreateForm(props: HeadshotCreateFormProps): React.ReactElement;
