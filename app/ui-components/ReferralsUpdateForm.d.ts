/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/
'use client'
import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Referrals } from "../../utils/graphql/API.ts";
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
export declare type ReferralsUpdateFormInputValues = {
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
export declare type ReferralsUpdateFormValidationValues = {
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
export declare type ReferralsUpdateFormOverridesProps = {
    ReferralsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type ReferralsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReferralsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    referrals?: Referrals;
    onSubmit?: (fields: ReferralsUpdateFormInputValues) => ReferralsUpdateFormInputValues;
    onSuccess?: (fields: ReferralsUpdateFormInputValues) => void;
    onError?: (fields: ReferralsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReferralsUpdateFormInputValues) => ReferralsUpdateFormInputValues;
    onValidate?: ReferralsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReferralsUpdateForm(props: ReferralsUpdateFormProps): React.ReactElement;
