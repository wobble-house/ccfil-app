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
export declare type ServicesCreateFormInputValues = {
    serviceTitle?: string;
    serviceBodyText?: string;
};
export declare type ServicesCreateFormValidationValues = {
    serviceTitle?: ValidationFunction<string>;
    serviceBodyText?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ServicesCreateFormOverridesProps = {
    ServicesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    serviceTitle?: PrimitiveOverrideProps<TextFieldProps>;
    serviceBodyText?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ServicesCreateFormProps = React.PropsWithChildren<{
    overrides?: ServicesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ServicesCreateFormInputValues) => ServicesCreateFormInputValues;
    onSuccess?: (fields: ServicesCreateFormInputValues) => void;
    onError?: (fields: ServicesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ServicesCreateFormInputValues) => ServicesCreateFormInputValues;
    onValidate?: ServicesCreateFormValidationValues;
} & React.CSSProperties>;
export default function ServicesCreateForm(props: ServicesCreateFormProps): React.ReactElement;
