/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/
'use client';
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
export declare type ReferralsCreateFormInputValues = {
    date?: string;
    source?: string;
    name?: string;
    followUp?: string;
    DOA?: boolean;
    DOADate?: string;
    reasonForDecline?: string;
    howDidYouHearAboutUs?: string;
    assistanceProvided?: string;
};
export declare type ReferralsCreateFormValidationValues = {
    date?: ValidationFunction<string>;
    source?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    followUp?: ValidationFunction<string>;
    DOA?: ValidationFunction<boolean>;
    DOADate?: ValidationFunction<string>;
    reasonForDecline?: ValidationFunction<string>;
    howDidYouHearAboutUs?: ValidationFunction<string>;
    assistanceProvided?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReferralsCreateFormOverridesProps = {
    ReferralsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    source?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    followUp?: PrimitiveOverrideProps<TextFieldProps>;
    DOA?: PrimitiveOverrideProps<SwitchFieldProps>;
    DOADate?: PrimitiveOverrideProps<TextFieldProps>;
    reasonForDecline?: PrimitiveOverrideProps<TextFieldProps>;
    howDidYouHearAboutUs?: PrimitiveOverrideProps<TextFieldProps>;
    assistanceProvided?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReferralsCreateFormProps = React.PropsWithChildren<{
    overrides?: ReferralsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReferralsCreateFormInputValues) => ReferralsCreateFormInputValues;
    onSuccess?: (fields: ReferralsCreateFormInputValues) => void;
    onError?: (fields: ReferralsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReferralsCreateFormInputValues) => ReferralsCreateFormInputValues;
    onValidate?: ReferralsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReferralsCreateForm(props: ReferralsCreateFormProps): React.ReactElement;
