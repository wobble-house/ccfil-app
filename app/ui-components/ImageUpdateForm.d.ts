/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Image } from "../../utils/graphql/API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ImageUpdateFormInputValues = {
    src?: string;
    alt?: string;
};
export declare type ImageUpdateFormValidationValues = {
    src?: ValidationFunction<string>;
    alt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ImageUpdateFormOverridesProps = {
    ImageUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    src?: PrimitiveOverrideProps<TextFieldProps>;
    alt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ImageUpdateFormProps = React.PropsWithChildren<{
    overrides?: ImageUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    image?: Image;
    onSubmit?: (fields: ImageUpdateFormInputValues) => ImageUpdateFormInputValues;
    onSuccess?: (fields: ImageUpdateFormInputValues) => void;
    onError?: (fields: ImageUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ImageUpdateFormInputValues) => ImageUpdateFormInputValues;
    onValidate?: ImageUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ImageUpdateForm(props: ImageUpdateFormProps): React.ReactElement;
