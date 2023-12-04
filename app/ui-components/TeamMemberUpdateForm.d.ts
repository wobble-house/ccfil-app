/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TeamMember } from "../../utils/graphql/API.ts";
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
export declare type TeamMemberUpdateFormInputValues = {
    firstName?: string;
    lastName?: string;
    bio?: string;
    link?: string;
    title?: string;
    isFeatured?: boolean;
    isLeader?: boolean;
};
export declare type TeamMemberUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    isFeatured?: ValidationFunction<boolean>;
    isLeader?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamMemberUpdateFormOverridesProps = {
    TeamMemberUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    bio?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    isFeatured?: PrimitiveOverrideProps<SwitchFieldProps>;
    isLeader?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type TeamMemberUpdateFormProps = React.PropsWithChildren<{
    overrides?: TeamMemberUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    teamMember?: TeamMember;
    onSubmit?: (fields: TeamMemberUpdateFormInputValues) => TeamMemberUpdateFormInputValues;
    onSuccess?: (fields: TeamMemberUpdateFormInputValues) => void;
    onError?: (fields: TeamMemberUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TeamMemberUpdateFormInputValues) => TeamMemberUpdateFormInputValues;
    onValidate?: TeamMemberUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TeamMemberUpdateForm(props: TeamMemberUpdateFormProps): React.ReactElement;
