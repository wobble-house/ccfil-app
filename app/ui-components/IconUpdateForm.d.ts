/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "../../utils/graphql/API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type IconUpdateFormInputValues = {
    src?: string;
    alt?: string;
    iconTitle?: string;
};
export declare type IconUpdateFormValidationValues = {
    src?: ValidationFunction<string>;
    alt?: ValidationFunction<string>;
    iconTitle?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IconUpdateFormOverridesProps = {
    IconUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    src?: PrimitiveOverrideProps<TextFieldProps>;
    alt?: PrimitiveOverrideProps<TextFieldProps>;
    iconTitle?: PrimitiveOverrideProps<TextFieldProps>;
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
