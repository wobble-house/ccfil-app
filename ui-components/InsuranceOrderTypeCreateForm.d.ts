/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps } from "@aws-amplify/ui-react";
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
export declare type InsuranceOrderTypeCreateFormInputValues = {
    primary?: boolean;
    secondary?: boolean;
};
export declare type InsuranceOrderTypeCreateFormValidationValues = {
    primary?: ValidationFunction<boolean>;
    secondary?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InsuranceOrderTypeCreateFormOverridesProps = {
    InsuranceOrderTypeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    primary?: PrimitiveOverrideProps<SwitchFieldProps>;
    secondary?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type InsuranceOrderTypeCreateFormProps = React.PropsWithChildren<{
    overrides?: InsuranceOrderTypeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InsuranceOrderTypeCreateFormInputValues) => InsuranceOrderTypeCreateFormInputValues;
    onSuccess?: (fields: InsuranceOrderTypeCreateFormInputValues) => void;
    onError?: (fields: InsuranceOrderTypeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InsuranceOrderTypeCreateFormInputValues) => InsuranceOrderTypeCreateFormInputValues;
    onValidate?: InsuranceOrderTypeCreateFormValidationValues;
} & React.CSSProperties>;
export default function InsuranceOrderTypeCreateForm(props: InsuranceOrderTypeCreateFormProps): React.ReactElement;
