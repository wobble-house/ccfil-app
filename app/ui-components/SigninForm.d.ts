/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { User } from "../../utils/graphql/API.ts";
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
export declare type SigninFormInputValues = {
    username?: string;
    email?: string;
};
export declare type SigninFormValidationValues = {
    username?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SigninFormOverridesProps = {
    SigninFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SigninFormProps = React.PropsWithChildren<{
    overrides?: SigninFormOverridesProps | undefined | null;
} & {
    id?: string;
    user?: User;
    onSubmit?: (fields: SigninFormInputValues) => SigninFormInputValues;
    onSuccess?: (fields: SigninFormInputValues) => void;
    onError?: (fields: SigninFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SigninFormInputValues) => SigninFormInputValues;
    onValidate?: SigninFormValidationValues;
} & React.CSSProperties>;
export default function SigninForm(props: SigninFormProps): React.ReactElement;
