/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type IconCreateFormInputValues = {
    src?: string;
    alt?: string;
    iconTitle?: string;
};
export declare type IconCreateFormValidationValues = {
    src?: ValidationFunction<string>;
    alt?: ValidationFunction<string>;
    iconTitle?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IconCreateFormOverridesProps = {
    IconCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    src?: PrimitiveOverrideProps<TextFieldProps>;
    alt?: PrimitiveOverrideProps<TextFieldProps>;
    iconTitle?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type IconCreateFormProps = React.PropsWithChildren<{
    overrides?: IconCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: IconCreateFormInputValues) => IconCreateFormInputValues;
    onSuccess?: (fields: IconCreateFormInputValues) => void;
    onError?: (fields: IconCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: IconCreateFormInputValues) => IconCreateFormInputValues;
    onValidate?: IconCreateFormValidationValues;
} & React.CSSProperties>;
export default function IconCreateForm(props: IconCreateFormProps): React.ReactElement;
