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
export declare type WaitlistCountCreateFormInputValues = {
    count?: number;
};
export declare type WaitlistCountCreateFormValidationValues = {
    count?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WaitlistCountCreateFormOverridesProps = {
    WaitlistCountCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    count?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WaitlistCountCreateFormProps = React.PropsWithChildren<{
    overrides?: WaitlistCountCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WaitlistCountCreateFormInputValues) => WaitlistCountCreateFormInputValues;
    onSuccess?: (fields: WaitlistCountCreateFormInputValues) => void;
    onError?: (fields: WaitlistCountCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WaitlistCountCreateFormInputValues) => WaitlistCountCreateFormInputValues;
    onValidate?: WaitlistCountCreateFormValidationValues;
} & React.CSSProperties>;
export default function WaitlistCountCreateForm(props: WaitlistCountCreateFormProps): React.ReactElement;
