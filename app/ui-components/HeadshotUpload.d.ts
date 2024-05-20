/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
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
export declare type HeadshotUploadInputValues = {
    Field0?: string;
    userHeadshot?: string;
};
export declare type HeadshotUploadValidationValues = {
    Field0?: ValidationFunction<string>;
    userHeadshot?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeadshotUploadOverridesProps = {
    HeadshotUploadGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<StorageManagerProps>;
    userHeadshot?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HeadshotUploadProps = React.PropsWithChildren<{
    overrides?: HeadshotUploadOverridesProps | undefined | null;
} & {
    id?: string;
    user?: User;
    onSubmit?: (fields: HeadshotUploadInputValues) => HeadshotUploadInputValues;
    onSuccess?: (fields: HeadshotUploadInputValues) => void;
    onError?: (fields: HeadshotUploadInputValues, errorMessage: string) => void;
    onChange?: (fields: HeadshotUploadInputValues) => HeadshotUploadInputValues;
    onValidate?: HeadshotUploadValidationValues;
} & React.CSSProperties>;
export default function HeadshotUpload(props: HeadshotUploadProps): React.ReactElement;
