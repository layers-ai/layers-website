/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type WaitlistCreateFormInputValues = {
    email?: string;
};
export declare type WaitlistCreateFormValidationValues = {
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WaitlistCreateFormOverridesProps = {
    WaitlistCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WaitlistCreateFormProps = React.PropsWithChildren<{
    overrides?: WaitlistCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WaitlistCreateFormInputValues) => WaitlistCreateFormInputValues;
    onSuccess?: (fields: WaitlistCreateFormInputValues) => void;
    onError?: (fields: WaitlistCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WaitlistCreateFormInputValues) => WaitlistCreateFormInputValues;
    onValidate?: WaitlistCreateFormValidationValues;
} & React.CSSProperties>;
export default function WaitlistCreateForm(props: WaitlistCreateFormProps): React.ReactElement;
