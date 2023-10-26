/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TeamMemberCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    bio?: string;
    link?: string;
    title?: string;
    isFeatured?: boolean;
};
export declare type TeamMemberCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    isFeatured?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamMemberCreateFormOverridesProps = {
    TeamMemberCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    bio?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    isFeatured?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type TeamMemberCreateFormProps = React.PropsWithChildren<{
    overrides?: TeamMemberCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TeamMemberCreateFormInputValues) => TeamMemberCreateFormInputValues;
    onSuccess?: (fields: TeamMemberCreateFormInputValues) => void;
    onError?: (fields: TeamMemberCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TeamMemberCreateFormInputValues) => TeamMemberCreateFormInputValues;
    onValidate?: TeamMemberCreateFormValidationValues;
} & React.CSSProperties>;
export default function TeamMemberCreateForm(props: TeamMemberCreateFormProps): React.ReactElement;
