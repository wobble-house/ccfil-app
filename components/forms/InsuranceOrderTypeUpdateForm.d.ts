'use client';
import * as React from "react";
import { GridProps, SwitchFieldProps } from "@aws-amplify/ui-react";
import { InsuranceOrderType } from "../../utils/graphql/API.ts";
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
export declare type InsuranceOrderTypeUpdateFormInputValues = {
    primary?: boolean;
    secondary?: boolean;
};
export declare type InsuranceOrderTypeUpdateFormValidationValues = {
    primary?: ValidationFunction<boolean>;
    secondary?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InsuranceOrderTypeUpdateFormOverridesProps = {
    InsuranceOrderTypeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    primary?: PrimitiveOverrideProps<SwitchFieldProps>;
    secondary?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type InsuranceOrderTypeUpdateFormProps = React.PropsWithChildren<{
    overrides?: InsuranceOrderTypeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    insuranceOrderType?: InsuranceOrderType;
    onSubmit?: (fields: InsuranceOrderTypeUpdateFormInputValues) => InsuranceOrderTypeUpdateFormInputValues;
    onSuccess?: (fields: InsuranceOrderTypeUpdateFormInputValues) => void;
    onError?: (fields: InsuranceOrderTypeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InsuranceOrderTypeUpdateFormInputValues) => InsuranceOrderTypeUpdateFormInputValues;
    onValidate?: InsuranceOrderTypeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InsuranceOrderTypeUpdateForm(props: InsuranceOrderTypeUpdateFormProps): React.ReactElement;
