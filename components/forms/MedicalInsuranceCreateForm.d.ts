'use client';
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
export declare type MedicalInsuranceCreateFormInputValues = {
    companyName?: string;
    address?: string;
    phone?: string;
    groupNumber?: string;
    policyNumber?: string;
    policyholdersFirstName?: string;
    policyholdersLastName?: string;
    employer?: string;
    DOB?: string;
    SSN?: number;
};
export declare type MedicalInsuranceCreateFormValidationValues = {
    companyName?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    groupNumber?: ValidationFunction<string>;
    policyNumber?: ValidationFunction<string>;
    policyholdersFirstName?: ValidationFunction<string>;
    policyholdersLastName?: ValidationFunction<string>;
    employer?: ValidationFunction<string>;
    DOB?: ValidationFunction<string>;
    SSN?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MedicalInsuranceCreateFormOverridesProps = {
    MedicalInsuranceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    companyName?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    groupNumber?: PrimitiveOverrideProps<TextFieldProps>;
    policyNumber?: PrimitiveOverrideProps<TextFieldProps>;
    policyholdersFirstName?: PrimitiveOverrideProps<TextFieldProps>;
    policyholdersLastName?: PrimitiveOverrideProps<TextFieldProps>;
    employer?: PrimitiveOverrideProps<TextFieldProps>;
    DOB?: PrimitiveOverrideProps<TextFieldProps>;
    SSN?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MedicalInsuranceCreateFormProps = React.PropsWithChildren<{
    overrides?: MedicalInsuranceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MedicalInsuranceCreateFormInputValues) => MedicalInsuranceCreateFormInputValues;
    onSuccess?: (fields: MedicalInsuranceCreateFormInputValues) => void;
    onError?: (fields: MedicalInsuranceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MedicalInsuranceCreateFormInputValues) => MedicalInsuranceCreateFormInputValues;
    onValidate?: MedicalInsuranceCreateFormValidationValues;
} & React.CSSProperties>;
export default function MedicalInsuranceCreateForm(props: MedicalInsuranceCreateFormProps): React.ReactElement;
