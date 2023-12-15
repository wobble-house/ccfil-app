'use client';
import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { MedicalInsurance } from "../../utils/graphql/API.ts";
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
export declare type MedicalInsuranceUpdateFormInputValues = {
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
export declare type MedicalInsuranceUpdateFormValidationValues = {
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
export declare type MedicalInsuranceUpdateFormOverridesProps = {
    MedicalInsuranceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type MedicalInsuranceUpdateFormProps = React.PropsWithChildren<{
    overrides?: MedicalInsuranceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    medicalInsurance?: MedicalInsurance;
    onSubmit?: (fields: MedicalInsuranceUpdateFormInputValues) => MedicalInsuranceUpdateFormInputValues;
    onSuccess?: (fields: MedicalInsuranceUpdateFormInputValues) => void;
    onError?: (fields: MedicalInsuranceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MedicalInsuranceUpdateFormInputValues) => MedicalInsuranceUpdateFormInputValues;
    onValidate?: MedicalInsuranceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MedicalInsuranceUpdateForm(props: MedicalInsuranceUpdateFormProps): React.ReactElement;
