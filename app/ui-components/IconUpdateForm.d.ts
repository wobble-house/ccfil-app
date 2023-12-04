/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Icon } from "../../utils/graphql/API.ts";
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
export declare type IconUpdateFormInputValues = {
    alt?: string;
    src?: string;
};
export declare type IconUpdateFormValidationValues = {
    alt?: ValidationFunction<string>;
    src?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IconUpdateFormOverridesProps = {
    IconUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    alt?: PrimitiveOverrideProps<TextFieldProps>;
    src?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type IconUpdateFormProps = React.PropsWithChildren<{
    overrides?: IconUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    icon?: Icon;
    onSubmit?: (fields: IconUpdateFormInputValues) => IconUpdateFormInputValues;
    onSuccess?: (fields: IconUpdateFormInputValues) => void;
    onError?: (fields: IconUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: IconUpdateFormInputValues) => IconUpdateFormInputValues;
    onValidate?: IconUpdateFormValidationValues;
} & React.CSSProperties>;
export default function IconUpdateForm(props: IconUpdateFormProps): React.ReactElement;
