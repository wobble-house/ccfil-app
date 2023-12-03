/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Headshot } from "../../utils/graphql/API.ts";
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
export declare type HeadshotUpdateFormInputValues = {
    src?: string;
    alt?: string;
    imageTitle?: string;
};
export declare type HeadshotUpdateFormValidationValues = {
    src?: ValidationFunction<string>;
    alt?: ValidationFunction<string>;
    imageTitle?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeadshotUpdateFormOverridesProps = {
    HeadshotUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    src?: PrimitiveOverrideProps<TextFieldProps>;
    alt?: PrimitiveOverrideProps<TextFieldProps>;
    imageTitle?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HeadshotUpdateFormProps = React.PropsWithChildren<{
    overrides?: HeadshotUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    headshot?: Headshot;
    onSubmit?: (fields: HeadshotUpdateFormInputValues) => HeadshotUpdateFormInputValues;
    onSuccess?: (fields: HeadshotUpdateFormInputValues) => void;
    onError?: (fields: HeadshotUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HeadshotUpdateFormInputValues) => HeadshotUpdateFormInputValues;
    onValidate?: HeadshotUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HeadshotUpdateForm(props: HeadshotUpdateFormProps): React.ReactElement;
